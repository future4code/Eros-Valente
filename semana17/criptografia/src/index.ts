import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import  IdGenerator  from "./services/IdGenerator";
import UserDatabase  from "./data/UserDatabase";
import Authenticator from "./services/Authenticator";
import HashManager from "./services/HashManager";

dotenv.config();

const app = express();

app.use(express.json());

// alterações do item 2b.

app.post("/signup", async (req: Request, res: Response) => {
  try {
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = IdGenerator.execute();
    
    const cypherPassword = await HashManager.hash(userData.password)
    
    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cypherPassword);
        
    const token = Authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// alterações do item 2c.

app.post("/login", async (req: Request, res: Response) => {
  try {
  
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    if (!user) {
      throw new Error("Invalid email");
    }

    const comparePassword = await HashManager.compare(userData.password, user.password)

    if (!comparePassword) {
      throw new Error("Invalid password");
    }

    const token = Authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = Authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

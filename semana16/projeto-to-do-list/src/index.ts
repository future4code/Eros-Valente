import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { REPLCommand } from "repl";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
})

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/**************************************************************/

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
    const id: string = String(Date.now() + Math.random())
    if( name || nickname || email ) {
        await connection.raw(`
            INSERT INTO UsersList VALUES (
                "${id}",
                "${name}",
                "${nickname}",
                "${email}"
            )
        `)
        console.log("usuário criado com sucesso")
    } else {
        throw { message: "Preencha todos os campos" }
    }
}

app.put("/user", async (req: Request, res: Response) => {
    try {
        await createUser(req.body.name, req.body.nickname, req.body.email)
        res.status(200).send({
            message: "User created successfully"
        })
    } catch (error) {
        res
           .status(400)
           .send(error)
    }
})



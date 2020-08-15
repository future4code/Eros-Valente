import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { REPLCommand } from "repl";
import { connect } from "http2";

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

// 1. Criar usuário

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
    const id: string = String(Date.now() + Math.random())
    if( name.replace(/\s/g, "") && nickname.replace(/\s/g, "") && email.replace(/\s/g, "") ) {
        await connection.raw(`
            INSERT INTO UsersList VALUES (
                "${id}",
                "${name}",
                "${nickname}",
                "${email}"
            )
        `)
    } else {
        throw { message: "Preencha todos os campos" }
    }
}

app.put("/user", async (req: Request, res: Response) => {
    try {
        await createUser(req.body.name, req.body.nickname, req.body.email)
        res.status(200).send({
            message: "Usuário criado com sucesso"
        })
    } catch (error) {
        res.status(400)
           .send(error)
    }
})

/**************************************************************/

// 2. Pegar usuário pelo id

const getUserById = async (id: string): Promise<any> => {
    if(id.replace(/\s/g, "")) {
        const result = await connection.raw(`
            SELECT * FROM UsersList WHERE id = "${id}"
        `)
        return result[0][0]
    } else {
        throw { message: "Id não informado"}
    }
}

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const response = await getUserById(req.params.id)
        if(response === undefined) {
            res.status(400).send({ message: "Usuário não encontrado"})
        } else {
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400)
           .send(error)
    }
})

/**************************************************************/

// 3. Editar usuário

const editUser = async (id: string, name: string, nickname: string): Promise<void> => {
    const user = await connection.raw(`
        SELECT * FROM UsersList
        WHERE id = "${id}"
    `)

    if (user[0][0] === undefined) {
        throw { messageNotFound: "Usuário não encontrado"}
    }

    if(name.replace(/\s/g, "") && nickname.replace(/\s/g, "")) {
        await connection.raw(`
        UPDATE UsersList
        SET name = "${name}", nickname = "${nickname}"
        WHERE id = "${id}"
        `)
    } else {
        throw { message: "Preencha todos os campos" }
    }
}

app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        await editUser(req.params.id, req.body.name, req.body.nickname)
        res.status(200).send({
            message: "Usuário editado com sucesso"
        })
    } catch (error) {
        res.status(400).send(error.messageNotFound ? {message: error.messageNotFound} : error )
    }
})


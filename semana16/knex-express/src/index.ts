import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
    console.log(result[0][0])
    return result[0][0]
}

const searchActorByName = async (name: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}'
        `)
        console.log(result[0][0])
        return result[0][0]
        
    } catch (error) {
        console.log(error)   
    }
}

const countActorsByGender = async (gender: string): Promise<any> => {
    try {
        const result = await connection.raw(`
           SELECT COUNT(*) as countByGender
           FROM Actor
           WHERE gender = '${gender}'
        `)
        
        const count = result[0][0].countByGender
        console.log(count)
        return count
    } catch (error) {
        console.log(error)
    }
}

const updateSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({salary})
        .where("id", id)
    
    console.log("Salário atualizado")    
}

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)  
}

const averageSalaryByGender = async (gender: string): Promise<number> => {
    const result = await connection("Actor")
        .avg("salary as salaryAverage")
        .where({gender})   

    console.log(result[0].salaryAverage)  
    return result[0].salaryAverage  
}

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const countByGender = await countActorsByGender(gender as string)
        res.status(200).send({
            quan: countByGender
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }           
})     
            
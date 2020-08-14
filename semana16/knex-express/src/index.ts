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

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

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
        .where("id", id)    
        .del()
}

const averageSalaryByGender = async (gender: string): Promise<number> => {
    const result = await connection("Actor")
        .avg("salary as salaryAverage")
        .where({gender})   

    console.log(result[0].salaryAverage)  
    return result[0].salaryAverage  
}

const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    rating: number,
    playingLimitDate: Date    
): Promise<void> => {
    await connection
        .insert({
            id,
            title,
            synopsis,
            release_date: releaseDate,
            rating,
            playing_limit_date: playingLimitDate
        })
        .into("Movies")
}

const getAllMovies = async (): Promise<any> => {
    const result = await connection("Movies")
        .select("*")
        .limit(15)
    
    return result
}

const searchMovie = async (searchTerm: string): Promise<any> => {
    const result = await connection("Movies")
        .select("*")
        .where("title", "LIKE", `%${searchTerm}%`)
        .orWhere("synopsis", "LIKE", `%${searchTerm}%`)
        .orderBy("release_date", "asc")
        
    return result    
}

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const countByGender = await countActorsByGender(gender as string)
        res.status(200).send({
            quantity: countByGender
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }           
})     

app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.birth_date),
        req.body.gender
      );
  
      res.status(200).send({
          message: "Success"
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary)
        res.status(200).send({
            message: "Success",
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send({
            message: "Successfully deleted",
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        }) 
    }
})

app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.release_date,
            req.body.rating,
            req.body.playing_limit_date
        )
        res.status(200).send({
            message: "Success"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get("/movie/all", async (req: Request, res: Response) => {
    try {
        const movies = await getAllMovies()
        res.status(200).send({
            movies: movies,
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const movies = await searchMovie(req.query.searchTerm as string)
        res.status(200).send({
            movies: movies
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })    
    }
})
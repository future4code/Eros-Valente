import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { UserDatabase } from "./data/UserDatabase";
import { bandRouter } from "./routes/bandRouter";
import { BandDatabase } from "./data/BandDatabase";
import { BandInfoInputDTO } from "./model/Band";
import { ConcertDatabase } from "./data/ConcertDatabase";
import { concertRouter } from "./routes/concertRouter";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/band", bandRouter)
app.use("/concert", concertRouter)




const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });
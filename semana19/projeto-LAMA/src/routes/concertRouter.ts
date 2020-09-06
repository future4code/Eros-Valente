import express from "express";
import { ConcertController } from "../controller/BandController";


export const concertRouter = express.Router();

const concertController = new ConcertController();

concertRouter.post("/register", concertController.registerConcert);


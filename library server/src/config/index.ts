import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME:string = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD:string = process.env.MONGO_PASSWORD || '';

const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/librarydb`;

const ROUNDS :number=process.env.SERVER_ROUNDS?Number(process.env.SERVER_ROUNDS):10;
const PORT:number=process.env.PORT? Number(process.env.PORT):8000;

export const config={
    mongo:{
        url:MONGO_URL
    },
    server:{
        port:PORT,
        rounds:ROUNDS
    }

}
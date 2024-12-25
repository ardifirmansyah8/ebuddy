import dotenv from "dotenv";

import * as functions from "firebase-functions";

import app from "./core/app";

dotenv.config();

export const api = functions.https.onRequest(app);

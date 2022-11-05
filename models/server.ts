import express, { Application } from "express";
import cors from "cors";

// DB
import db from "../db/connection.db";

// Routes

import authRoutes from "../routes/auth.routes";
import turnsRoutes from "../routes/turns.routes";
import userRoutes from "../routes/user.routes";

export default class Server {
  private app: Application;
  private port: String;
  private paths = {
    user: "/api/user",
    auth: "/api/auth",
    turns:'/api/turns'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("database online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.user, userRoutes);
    this.app.use(this.paths.auth, authRoutes);
    this.app.use(this.paths.turns,turnsRoutes);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server enabled in the port ${this.port}`)
    );
  }
}

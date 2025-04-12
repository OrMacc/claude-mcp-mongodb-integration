#!/usr/bin/env node

import { runServer } from "mongo-mcp";

const config = {
  mongoUri: process.env.MONGO_URI || "mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<DATABASE>?retryWrites=true&w=majority&authSource=admin",
};

runServer(config);

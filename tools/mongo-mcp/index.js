// tools/mongo-mcp/index.js

import { createMongoDBTool } from "mongo-mcp";

// This function starts the MongoDB tool with your config
createMongoDBTool({
  mongoUri: process.env.MONGO_URI, // You can also hardcode the URI here if you prefer
});

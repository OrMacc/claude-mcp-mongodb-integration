# Connect MongoDB to Claude via MCP

**Do not use a production cluster!**

**⚠️ Disclaimer**
> This is a personal project and not officially affiliated with MongoDB Inc.
> It’s intended for educational use only and not recommended for production.
> Use at your own discretion — you're responsible for any risks or consequences.

This project explains how to connect your own MongoDB database to Claude using the Model Context Protocol (MCP). Once connected, Claude will be able to query your database using natural language.
This is not an official MongoDB integration. 

---


## 📦 Prerequisites

Access to a running MongoDB database (e.g., MongoDB Atlas or local):
- [Atlas account](http://bit.ly/4j0xr1I)
- [MongoDB Cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)  -** Do not use a production cluster!**
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass) Easy Desktop UI (Optional) 

Make sure you have the following installed and ready:
- [Node.js](https://nodejs.org/en) - version 18 or higher
- [npm](https://docs.npmjs.com/cli/v8/commands/npm-install)
- [Claude desktor](https://claude.ai/download) - with tool support enabled 



## 🛠 Setup Instructions

### 1. Clone this repository and install the required CLI

```bash
git clone https://github.com/OrMacc/claude-mcp-mongodb-integration
cd claude-mongo-mcp
npm install @smithery/cli
```
The @smithery/cli is used to run the MCP server that connects your MongoDB database to Claude.


⸻


### 2. Set up your Atlas account

Follow the steps in the link below to set up a mongoDB database  
- Dont forget to add a db user. It is required before generating the mongoUri_Node.js in the next step.
- https://www.mongodb.com/docs/guides/atlas/cluster/

**🛑🛑To continue, you must get your Node.js connection string from Atlas - https://www.mongodb.com/docs/guides/atlas/connection-string/
🛑🛑**
<img width="1720" alt="image" src="https://github.com/user-attachments/assets/d957d2b2-787d-48cf-8e44-8e09c44f1551" />

⸻


### 3. Run the MCP server

In your terminal, Replace {mongoUri_Node.js} with the connection string you got above and run:

```bash
npx @smithery/cli run mongo-mcp --config "{\"mongoUri\":\"<mongoUri_Node.js>\"}"
```
- Dont forget to replace {mongoUri_Node.js} with your connection string.

This will start a local server that Claude can connect to in the next step.


⸻

### 4. Update Claude mcp.config.json file

In the root of the project, Update a file named mcp.config.json with the following content and replace mongoUri_Node.js per instructions below:
```bash

{
  "mcpServers": {
    "mongo-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "mongo-mcp",
        "--config",
        "{\"mongoUri\":\"<mongoUri_Node.js>\"}"
      ]
    }
  }
}
```
Replace the {mongoUri_Node.js} part with your Node.js connection sting from mongo atlas https://www.mongodb.com/docs/guides/atlas/connection-string/

<img width="1720" alt="image" src="https://github.com/user-attachments/assets/d957d2b2-787d-48cf-8e44-8e09c44f1551" />


⸻

⚙️ Connect the Tool in Claude
	1.	Open the Claude desktop app
	2.	Go to Settings → Tools
	3.	Click “Connect to a Tool”
	4.	Select mongo-mcp
	5.	If everything is correct, Claude will now have access to your MongoDB database

⸻

🧪 Usage Example

Try prompting Claude with something like:

“Show me all documents in the users collection.”
“How many orders were placed last month in the orders collection?”

⸻

🔒 Security Notes
- 🧪 Use a test environment. This setup is meant for experimentation and learning. We highly recommend using a dedicated test cluster or database — not your production environment.
- 🔐 Control permissions.
⸻


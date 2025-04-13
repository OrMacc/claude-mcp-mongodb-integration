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
 	- Atlas account (For easy registeration - [MongoDB Atlas]([url](http://bit.ly/4j0xr1I))
	- Create a Free or use an exising cluster -** Do not use a production cluster!**
 	- It is reccomended to the Desktop DB UI -[ MongoDB Compass]([url](https://www.mongodb.com/products/tools/compass)) 

Make sure you have the following installed and ready:
- Node.js [(version 18 or higher)]([url](https://nodejs.org/en))
- npm [nom install](https://docs.npmjs.com/cli/v8/commands/npm-install)
- Claude desktop with tool support enabled [Claude desktor ]([url](https://claude.ai/download))


## 🛠 Setup Instructions

### 1. Clone this repository and install the required CLI

```bash
git clone https://github.com/<your-username>/claude-mongo-mcp
cd claude-mongo-mcp
npm install @smithery/cli
```
The @smithery/cli is used to run the MCP server that connects your MongoDB database to Claude.

⸻

### 2. Create the mcp.config.json file

In the root of the project, create a file named mcp.config.json with the following content:
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
        "{\"mongoUri\":\"mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<DATABASE>?retryWrites=true&w=majority&authSource=admin\"}"
      ]
    }
  }
}
```
Replace the placeholders:
	•	<USERNAME> — your MongoDB username
	•	<PASSWORD> — your MongoDB password
	•	<CLUSTER> — your MongoDB cluster address
	•	<DATABASE> — name of the database you want Claude to access

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


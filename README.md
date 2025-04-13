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
- [Set a MongoDB Cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)  -** Do not use a production cluster!**
- [Download MongoDB Compass For Easy Desktop UI (Optional)](https://www.mongodb.com/products/tools/compass) 

Make sure you have the following installed and ready:
- [Node.js](https://nodejs.org/en) - version 18 or higher
- [npm](https://docs.npmjs.com/cli/v8/commands/npm-install)
- [Claude desktor](https://claude.ai/download) 



## 🛠 Setup Instructions

### 1. Install the required @smithery/cli 

```bash
npm install @smithery/cli
```
The @smithery/cli is used to run the MCP server that connects your MongoDB database to Claude.


⸻


### 2. Get your MongoDB_URI (for Node.js) connection string and Connect to MongoDB Compass
- Connect to Compass to easly see the data in your DB.
- Get your MongoDB_URI (for Node.js) connection string in MongoDB Atlas - https://www.mongodb.com/docs/guides/atlas/connection-string/

**🛑🛑To continue, you must get your Node.js connection string from Atlas - https://www.mongodb.com/docs/guides/atlas/connection-string/
🛑🛑**
<img width="1720" alt="image" src="https://github.com/user-attachments/assets/d957d2b2-787d-48cf-8e44-8e09c44f1551" />


⸻

### Update Claude claude_desktop_config.json file

⚙️ Connect the Tool in Claude
	1.	Open the Claude desktop app
	2.	Go to Settings → Developer
	3.	Click “Edit config”
 	4. 	Open the claude_desktop_config.json file and 
  	5. 	Update it with the following content and replace <mongoUri_Node.js> per instructions below:

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
**Replace the <mongoUri_Node.js> part with your  MongoDB_URI (for Node.js) connection sting that you got above.**

<img width="1720" alt="image" src="https://github.com/user-attachments/assets/d957d2b2-787d-48cf-8e44-8e09c44f1551" />

⸻

Relaunch Claude - Sometimes it takes 2-3 time of relaunching to see the MCP tools. 
If everything is correct, you should see an icon of a Hammer and a number (8 tools) next to Claude text box 

Claude will now have access to your MongoDB database


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


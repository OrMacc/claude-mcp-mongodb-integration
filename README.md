# claude-mcp-mongodb-integration

מעולה 🙌
הנה גרסה סופית ומוכנה להעתקה של קובץ README.md בלי לינקים חיצוניים, עם ניסוח בהיר ופשוט:

⸻



# Connect MongoDB to Claude via MCP

This project explains how to connect your own MongoDB database to Claude using the Model Context Protocol (MCP). Once connected, Claude will be able to query your database using natural language.

---

## 📦 Prerequisites

Make sure you have the following installed and ready:

- Node.js (version 18 or higher)
- npm
- Access to a running MongoDB database (e.g., MongoDB Atlas or local)
- The Claude desktop app with tool support enabled

---

## 🛠 Setup Instructions

### 1. Clone this repository and install the required CLI

```bash
git clone https://github.com/<your-username>/claude-mongo-mcp
cd claude-mongo-mcp
npm install @smithery/cli

The @smithery/cli is used to run the MCP server that connects your MongoDB database to Claude.

⸻

2. Create the mcp.config.json file

In the root of the project, create a file named mcp.config.json with the following content:

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
	•	The file mcp.config.json is listed in .gitignore to prevent accidental exposure of credentials.
	•	This tool gives read-only access to your database (depending on user permissions).

⸻

📁 Project Files
	•	mcp.config.json — Configuration file for MCP
	•	.gitignore — Prevents sensitive files from being committed (already includes node_modules, .env, and mcp.config.json)

---

רוצה שאעלה את זה ישירות גם לקובץ ב־GitHub או נמשיך לשלב הבא?

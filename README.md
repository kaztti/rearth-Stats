# Free Minecraft Server Stats Tracker 📊

This is the **only actual free serverless way** to collect and visualize long-term statistics about your Minecraft server. No VPS, no database, no hosting fees required—ever.

## Why use this?
- **100% Free**: Powered by GitHub Actions (free tier) and GitHub Pages.
- **Serverless**: No need to rent a server to track your server.
- **Historical Data**: Keep your player count history forever.

## How to use it

### 1. Fork it
Click the **Fork** button in the top right corner to create your own copy of this repository.

### 2. Set Repository Secrets
Go to your forked repository's **Settings** -> **Secrets and variables** -> **Actions** and create the following **Repository secrets**:

- `PAT_PUSH`. A **Personal Access Token** with read/write permissions for the repo (scopes: `repo`, `workflow`). This is needed so the bot can save data back to the repo.
- `SERVER_TYPE`. `java` or `bedrock`.
- `SERVER_IP`. Your server IP or domain (e.g., `mc.hypixel.net` or `192.168.1.1`).
- `SERVER_PORT`. The port your server runs on (Java default: `25565`, Bedrock default: `19132`).

### 3. Usage
Once configured, the tracker will run automatically every ~10 minutes. 
- You can view the dashboard at `https://<your-username>.github.io/<your-repo-name>/`.
- Make sure to enable **GitHub Pages** in Settings -> Pages (set source to `gh-pages` branch, which will appear after the first successful deploy).

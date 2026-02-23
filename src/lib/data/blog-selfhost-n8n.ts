import { BlogPost } from "./blog";

const selfHostContent = `
## How to Install and Self Host n8n: The Definitive 2026 Guide

If you want **full control over your automation data**, unlimited workflow executions, and zero per-task pricing, learning how to **install and self host n8n** is one of the smartest moves you can make in 2026. Self-hosted n8n gives you an enterprise-grade **workflow automation tool** running on your own infrastructure—no vendor lock-in, no execution caps, and complete data sovereignty.

This step-by-step guide walks you through every stage of setting up a **self-hosted n8n** instance, from choosing a server to securing it with SSL. Whether you're a developer, a startup founder, or an IT manager at a Dubai enterprise, you'll have a production-ready n8n installation by the end of this article.

> **Quick Answer:** To install and self host n8n, you need a Linux VPS (2 GB RAM minimum), Docker and Docker Compose installed, a domain name, and about 30 minutes. The recommended method is Docker Compose with a PostgreSQL database and an Nginx reverse proxy for SSL termination.

---

## Why Self Host n8n Instead of Using the Cloud Version?

Before we dive into the installation steps, let's understand why thousands of businesses—including companies across Dubai and the UAE—are choosing to **self host n8n** rather than use the managed cloud offering.

### Cost Savings at Scale

n8n Cloud charges based on workflow executions. For businesses running hundreds of automations daily, costs add up fast. A self-hosted instance on a $20/month VPS gives you **unlimited executions**—making it dramatically cheaper at scale.

### Complete Data Privacy

For organizations handling sensitive customer data, healthcare records, or financial information, self-hosting means your data never touches third-party servers. This is especially critical for UAE businesses subject to **local data protection regulations**.

### Customization and Control

Self-hosting lets you:

- Install **custom n8n nodes** and community packages
- Control update schedules on your terms
- Integrate with internal services behind your firewall
- Run resource-intensive **AI agent** workflows without cloud limits

### No Execution Limits

Cloud plans cap your monthly executions. With a self-hosted setup, the only limit is your server's hardware. Run as many **n8n workflows** as your CPU and memory can handle.

*Related reading: [The Complete Guide to n8n Automation for Dubai Businesses](/blog/complete-guide-n8n-automation-dubai-businesses/)*

---

## Prerequisites: What You Need Before You Start

Before installing n8n, make sure you have the following ready:

| Requirement | Minimum | Recommended |
|---|---|---|
| **VPS / Server** | 1 vCPU, 2 GB RAM | 2 vCPU, 4 GB RAM |
| **Operating System** | Ubuntu 22.04 LTS | Ubuntu 24.04 LTS |
| **Storage** | 20 GB SSD | 50 GB SSD |
| **Domain Name** | Required for SSL | Subdomain like n8n.yourdomain.com |
| **Docker** | v20.10+ | Latest stable |
| **Docker Compose** | v2.0+ | Latest stable |

**Recommended VPS providers:** Hetzner, DigitalOcean, Vultr, AWS Lightsail, or any UAE-based cloud provider for low-latency Middle East deployments.

[Screenshot: VPS provider dashboard showing server creation]

---

## Step 1: Set Up Your VPS Server

### 1.1 Create a New Server Instance

Log into your VPS provider and spin up a new server with **Ubuntu 24.04 LTS**. Choose a data center close to your users—if you're in Dubai, select a Middle East or European region for low latency.

### 1.2 Connect via SSH

Open your terminal and connect to your server:

~~~bash
ssh root@your-server-ip
~~~

### 1.3 Update the System

~~~bash
apt update && apt upgrade -y
~~~

### 1.4 Create a Non-Root User (Recommended)

~~~bash
adduser n8nuser
usermod -aG sudo n8nuser
su - n8nuser
~~~

[Screenshot: Terminal showing successful SSH connection and system update]

---

## Step 2: Install Docker and Docker Compose

Docker is the recommended way to **install and self host n8n**. It keeps everything containerized, making updates and backups simple.

### 2.1 Install Docker

~~~bash
# Install prerequisites
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Add your user to the docker group
sudo usermod -aG docker ` + "$USER" + `
newgrp docker
~~~

### 2.2 Install Docker Compose

~~~bash
sudo apt install -y docker-compose-plugin

# Verify installation
docker compose version
~~~

### 2.3 Verify Docker Is Running

~~~bash
docker run hello-world
~~~

You should see a "Hello from Docker!" success message.

[Screenshot: Terminal output showing Docker and Docker Compose version numbers]

---

## Step 3: Configure n8n with Docker Compose

This is the core step where we create a **production-ready n8n** setup with PostgreSQL (instead of the default SQLite) and persistent data storage.

### 3.1 Create the Project Directory

~~~bash
mkdir -p ~/n8n-docker && cd ~/n8n-docker
~~~

### 3.2 Create the Docker Compose File

~~~bash
nano docker-compose.yml
~~~

Paste the following configuration:

~~~yaml
version: "3.8"

services:
  n8n-db:
    image: postgres:16-alpine
    container_name: n8n-db
    restart: always
    environment:
      POSTGRES_DB: n8n
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: ` + "${DB_PASSWORD}" + `
    volumes:
      - n8n_db_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U n8n"]
      interval: 10s
      timeout: 5s
      retries: 5

  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=n8n-db
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=` + "${DB_PASSWORD}" + `
      - N8N_HOST=` + "${N8N_DOMAIN}" + `
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://` + "${N8N_DOMAIN}" + `/
      - GENERIC_TIMEZONE=Asia/Dubai
      - N8N_ENCRYPTION_KEY=` + "${ENCRYPTION_KEY}" + `
      - N8N_RUNNERS_ENABLED=true
      - EXECUTIONS_MODE=regular
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      n8n-db:
        condition: service_healthy

volumes:
  n8n_db_data:
  n8n_data:
~~~

### 3.3 Create the Environment File

~~~bash
nano .env
~~~

Add your configuration values:

~~~env
DB_PASSWORD=your_secure_database_password_here
N8N_DOMAIN=n8n.yourdomain.com
ENCRYPTION_KEY=your_random_encryption_key_here
~~~

**Generate a secure encryption key:**

~~~bash
openssl rand -hex 32
~~~

> **Important:** The N8N_ENCRYPTION_KEY is used to encrypt credentials stored in n8n. Never lose this key—without it, all saved credentials become inaccessible.

[Screenshot: Docker Compose file structure in a code editor]

---

## Step 4: Set Up Nginx Reverse Proxy with SSL

To access n8n securely over HTTPS, we'll use **Nginx** as a reverse proxy with a free **Let's Encrypt** SSL certificate.

### 4.1 Install Nginx and Certbot

~~~bash
sudo apt install -y nginx certbot python3-certbot-nginx
~~~

### 4.2 Create the Nginx Configuration

~~~bash
sudo nano /etc/nginx/sites-available/n8n
~~~

~~~nginx
server {
    listen 80;
    server_name n8n.yourdomain.com;

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade ` + "$http_upgrade" + `;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host ` + "$host" + `;
        proxy_set_header X-Real-IP ` + "$remote_addr" + `;
        proxy_set_header X-Forwarded-For ` + "$proxy_add_x_forwarded_for" + `;
        proxy_set_header X-Forwarded-Proto ` + "$scheme" + `;
        chunked_transfer_encoding off;
        proxy_buffering off;
        proxy_cache off;
    }
}
~~~

### 4.3 Enable the Site and Get SSL

~~~bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Get SSL certificate
sudo certbot --nginx -d n8n.yourdomain.com
~~~

Certbot will automatically configure HTTPS and set up auto-renewal.

[Screenshot: Browser showing n8n login page with valid SSL padlock]

---

## Step 5: Launch n8n and Create Your Admin Account

### 5.1 Start the Containers

~~~bash
cd ~/n8n-docker
docker compose up -d
~~~

### 5.2 Check the Logs

~~~bash
docker compose logs -f n8n
~~~

Wait until you see "n8n ready on port 5678". This typically takes 15–30 seconds on a fresh install.

### 5.3 Access the Setup Wizard

Open your browser and navigate to https://n8n.yourdomain.com. You'll see the **n8n setup wizard** where you can:

1. Create your **owner account** (email + password)
2. Optionally opt in to telemetry and error reporting
3. Connect to n8n's community node marketplace

[Screenshot: n8n setup wizard with owner account creation form]

---

## Step 6: Configure n8n for Production Use

A basic installation works, but a **production-ready self-hosted n8n** setup needs a few more tweaks.

### 6.1 Set Up Automated Backups

Create a backup script that runs daily:

~~~bash
nano ~/n8n-backup.sh
~~~

~~~bash
#!/bin/bash
BACKUP_DIR=~/n8n-backups
DATE=` + "$(date +%Y-%m-%d_%H-%M)" + `
mkdir -p ` + "$BACKUP_DIR" + `

# Backup PostgreSQL database
docker exec n8n-db pg_dump -U n8n n8n | gzip > ` + "$BACKUP_DIR" + `/n8n-db-` + "$DATE" + `.sql.gz

# Backup n8n files (credentials, config)
docker cp n8n:/home/node/.n8n ` + "$BACKUP_DIR" + `/n8n-files-` + "$DATE" + `

# Remove backups older than 30 days
find ` + "$BACKUP_DIR" + ` -mtime +30 -delete

echo "Backup completed: ` + "$DATE" + `"
~~~

~~~bash
chmod +x ~/n8n-backup.sh

# Add to crontab - run daily at 2 AM
(crontab -l; echo "0 2 * * * ~/n8n-backup.sh") | crontab -
~~~

### 6.2 Configure Firewall Rules

~~~bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
~~~

### 6.3 Set Up Automatic Updates for n8n

Create an update script:

~~~bash
nano ~/n8n-update.sh
~~~

~~~bash
#!/bin/bash
cd ~/n8n-docker

# Pull latest images
docker compose pull

# Restart with new images
docker compose up -d

# Clean up old images
docker image prune -f

echo "n8n updated successfully"
~~~

---

## Free n8n Workflow Template: Server Health Monitor

Here's a working **n8n workflow** JSON template that monitors your self-hosted n8n server's health and sends alerts via email or Slack if something goes wrong. Import this directly into your new n8n instance.

~~~json
{
  "name": "Server Health Monitor - n8nera Template",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "minutes",
              "minutesInterval": 5
            }
          ]
        }
      },
      "id": "schedule-trigger",
      "name": "Every 5 Minutes",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [250, 300]
    },
    {
      "parameters": {
        "url": "https://n8n.yourdomain.com/healthz",
        "options": {
          "timeout": 10000
        }
      },
      "id": "health-check",
      "name": "Check n8n Health",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [470, 300]
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "leftValue": "",
            "typeValidation": "strict"
          },
          "combinator": "and",
          "conditions": [
            {
              "leftValue": "={{ $json.statusCode }}",
              "rightValue": 200,
              "operator": {
                "type": "number",
                "operation": "notEquals"
              }
            }
          ]
        }
      },
      "id": "if-unhealthy",
      "name": "Is Unhealthy?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [690, 300]
    },
    {
      "parameters": {
        "fromEmail": "alerts@yourdomain.com",
        "toEmail": "admin@yourdomain.com",
        "subject": "⚠️ n8n Server Health Alert",
        "text": "Your self-hosted n8n instance at https://n8n.yourdomain.com is not responding correctly. Please check the server immediately.\n\nTimestamp: {{ $now.toISO() }}\nStatus Code: {{ $json.statusCode }}"
      },
      "id": "send-alert",
      "name": "Send Alert Email",
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 2.1,
      "position": [910, 200]
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "name": "status",
              "value": "healthy",
              "type": "string"
            },
            {
              "name": "checkedAt",
              "value": "={{ $now.toISO() }}",
              "type": "string"
            }
          ]
        }
      },
      "id": "log-healthy",
      "name": "Log Healthy",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [910, 420]
    }
  ],
  "connections": {
    "Every 5 Minutes": {
      "main": [
        [{ "node": "Check n8n Health", "type": "main", "index": 0 }]
      ]
    },
    "Check n8n Health": {
      "main": [
        [{ "node": "Is Unhealthy?", "type": "main", "index": 0 }]
      ]
    },
    "Is Unhealthy?": {
      "main": [
        [{ "node": "Send Alert Email", "type": "main", "index": 0 }],
        [{ "node": "Log Healthy", "type": "main", "index": 0 }]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}
~~~

**To import:** In your n8n dashboard, go to **Workflows → Import from File** and paste the JSON above. Update the domain, email addresses, and SMTP credentials to match your setup.

[Screenshot: n8n workflow editor showing the Server Health Monitor workflow]

---

## Real-World Case Study: Dubai Logistics Company

A mid-size logistics company in Dubai came to **n8nera** needing a self-hosted automation platform. They were spending over **$800/month** on Zapier and Make combined, running into execution limits regularly, and had concerns about customer shipping data being processed on third-party servers.

### What We Did

1. **Deployed self-hosted n8n** on a dedicated Hetzner server in the Finland data center (EU-compliant, low latency to UAE)
2. Built **47 automated workflows** including order tracking, customer notifications via WhatsApp, and warehouse inventory sync
3. Integrated with their existing ERP (SAP Business One), CRM (HubSpot), and shipping APIs (Aramex, DHL)
4. Set up an **AI agent** using OpenAI's GPT-4o for automated customer inquiry classification

### Results After 6 Months

- **Monthly automation cost:** Dropped from $800 to $40 (VPS cost only)
- **Workflow executions:** 380,000+/month with zero throttling
- **Response time:** Customer notifications sent within 3 seconds of status change
- **Data compliance:** Full control, all data on their own infrastructure

*Read more success stories: [CRM Automation Strategies That Increase Sales](/blog/crm-automation-strategies-increase-sales-dubai/)*

---

## Advanced Configuration: Connecting AI Tools to Self-Hosted n8n

One of the biggest advantages of **self-hosted n8n** in 2026 is the seamless integration with AI services. n8n's built-in **AI agent** nodes make it a compelling **LangChain alternative** for building production AI workflows without writing code.

### OpenAI Integration

Connect your **OpenAI** API key in n8n's credentials manager and use nodes like:

- **AI Agent Node** – Build autonomous agents that use tools and make decisions
- **Chat Model Node** – Use GPT-4o, GPT-4o-mini, or o3 for text generation
- **Embeddings Node** – Generate vector embeddings for RAG pipelines

### Google Gemini Integration

Google's **Gemini** models are fully supported as a chat model provider in n8n. Use Gemini 2.0 Flash for fast, cost-effective AI tasks directly in your **n8n workflows**.

### Vector Store & RAG Workflows

Build knowledge-based **AI agents** by combining:

1. Document loaders (PDF, Google Docs, Notion)
2. Text splitters for chunking
3. Embedding models (OpenAI, Cohere)
4. Vector stores (Pinecone, Qdrant, Supabase)
5. Retrieval QA chains for context-aware answers

This is a powerful **no-code automation** approach to building AI-powered assistants—no Python required.

[Screenshot: n8n AI Agent workflow with OpenAI and vector store nodes]

*Explore AI capabilities: [AI Voice Agents Transforming Customer Service](/blog/ai-voice-agents-transforming-customer-service-uae/)*

---

## Troubleshooting Common Self-Hosting Issues

### n8n Won't Start

- Check logs: docker compose logs n8n
- Verify PostgreSQL is healthy: docker compose logs n8n-db
- Ensure port 5678 isn't already in use: sudo lsof -i :5678

### Webhooks Not Working

- Confirm WEBHOOK_URL matches your actual domain
- Verify Nginx is proxying WebSocket connections (check the Upgrade headers)
- Check firewall allows ports 80 and 443

### High Memory Usage

- Set execution pruning: add EXECUTIONS_DATA_PRUNE=true and EXECUTIONS_DATA_MAX_AGE=168 to your environment
- Limit concurrent executions with N8N_CONCURRENCY_PRODUCTION_LIMIT=10

### SSL Certificate Renewal Fails

- Test renewal manually: sudo certbot renew --dry-run
- Ensure port 80 is open for ACME challenge verification

---

## n8n Self-Hosting vs. Cloud: Quick Comparison

| Feature | Self-Hosted n8n | n8n Cloud |
|---|---|---|
| **Monthly Cost** | $5–$40 (VPS) | $24–$300+ |
| **Execution Limits** | Unlimited | Plan-based |
| **Data Location** | Your server | n8n's servers (EU) |
| **Custom Nodes** | ✅ Full support | ⚠️ Limited |
| **AI/Agent Workflows** | ✅ No limits | ⚠️ Execution caps |
| **Maintenance** | You manage | Fully managed |
| **Updates** | Manual/scripted | Automatic |
| **SSL/Domain** | DIY setup | Included |
| **Uptime SLA** | Your responsibility | 99.9% |

**Bottom line:** If you need unlimited executions, full data control, and custom **n8n nodes**, self-hosting is the clear winner. If you prefer zero maintenance and don't mind execution limits, n8n Cloud is a solid choice—or let **n8nera manage your self-hosted instance** for the best of both worlds.

---

## Best Practices for Running Self-Hosted n8n in Production

1. **Always use PostgreSQL** – SQLite can't handle concurrent executions reliably
2. **Set an encryption key** – Protects stored credentials; back it up separately
3. **Enable execution pruning** – Prevents database bloat over time
4. **Use a reverse proxy** – Never expose n8n directly on port 5678
5. **Automate backups** – Database + .n8n directory, stored off-server
6. **Monitor uptime** – Use the health check workflow template above or tools like UptimeRobot
7. **Keep n8n updated** – New releases include security patches, performance improvements, and new **n8n nodes**
8. **Use environment variables** – Never hardcode passwords or API keys in workflows

*Also helpful: [WhatsApp Business Automation Guide for UAE Companies](/blog/whatsapp-business-automation-guide-uae-companies/)*

---

## When to Hire an Expert for n8n Self-Hosting

While this guide covers the technical steps, many businesses prefer working with specialists. Consider professional help from **n8nera** if you need:

- **High-availability setups** with load balancing and failover
- **Multi-region deployments** for global teams
- **Complex AI agent architectures** with multiple LLM providers
- **Compliance-ready configurations** for healthcare, finance, or government
- **Managed hosting** – We handle updates, backups, monitoring, and scaling so you don't have to
- **Custom workflow development** tailored to your specific business processes

We've deployed **self-hosted n8n** for companies across Dubai, Abu Dhabi, Saudi Arabia, Europe, and North America.

[Screenshot: n8nera managed hosting dashboard with server metrics]

---

## FAQ: Self-Hosting n8n in 2026

### Is n8n free to self host?

Yes! n8n is **open-source** under a sustainable use license. You can install and self host n8n completely free. The source code is available on [GitHub](https://github.com/n8n-io/n8n). You only pay for your server infrastructure.

### What are the minimum server requirements for self-hosted n8n?

The minimum is **1 vCPU and 2 GB RAM** for light usage. For production workloads with multiple concurrent workflows and **AI agent** tasks, we recommend at least 2 vCPU, 4 GB RAM, and 50 GB SSD storage.

### Can I use n8n with OpenAI and other AI services?

Absolutely. Self-hosted n8n supports direct integration with **OpenAI**, Google **Gemini**, Anthropic Claude, Azure OpenAI, and many other AI providers. The **AI agent** nodes make it a powerful **no-code automation** platform for building AI workflows—a genuine **LangChain alternative** without writing Python.

### How do I update self-hosted n8n?

With Docker Compose, updating is simple: run docker compose pull && docker compose up -d. Always back up your database before updating. Check the [n8n release notes](https://docs.n8n.io/release-notes/) for breaking changes before major upgrades.

### Is self-hosted n8n secure?

Yes, when properly configured. Use SSL/TLS encryption, strong passwords, firewall rules, and keep your instance updated. n8n supports role-based access control, credential encryption, and audit logging. For additional security guidance, refer to the [official n8n security documentation](https://docs.n8n.io/hosting/security/).

### Can I migrate from n8n Cloud to self-hosted?

Yes. n8n allows you to export all workflows as JSON files and import them into a self-hosted instance. Credentials will need to be re-entered. n8nera can handle the full migration for you seamlessly.

### What's the difference between n8n and Zapier for self-hosting?

Zapier cannot be self-hosted at all—it's cloud-only. n8n is open-source and designed for self-hosting, giving you unlimited executions, custom **n8n nodes**, full data control, and the ability to run **AI agent** workflows without restrictions. It's one of the top reasons businesses choose n8n as their **automation tool** in 2026.

---

## Conclusion: Take Full Control of Your Automation Infrastructure

Self-hosting n8n in 2026 is easier than ever and delivers unmatched value for businesses that need **reliable, scalable workflow automation** without recurring per-execution costs. With Docker, PostgreSQL, and a proper reverse proxy, you can have a production-ready **self-hosted n8n** instance running in under an hour.

Whether you're building simple data sync workflows or complex **AI agent** pipelines with **OpenAI** and **Gemini** integrations, self-hosted n8n gives you the flexibility and power to automate without limits.

**Ready to build powerful automations? [Contact n8nera.tech](https://n8nera.tech/contact/) today for expert n8n services worldwide.** From managed hosting and custom workflow development to enterprise-grade **n8n automation**—we're your trusted partner for everything n8n.

*Get in touch for a free consultation or explore our [services](https://n8nera.tech/services/) to see how we can help your business automate and scale.*
`;

export const selfHostN8nPost: BlogPost = {
    id: "6",
    slug: "how-to-install-self-host-n8n-guide",
    title: "How to Install and Self Host n8n in 2026 (Step-by-Step Guide)",
    excerpt: "Learn how to install and self host n8n on your own server in 2026. This step-by-step guide covers Docker, VPS setup, SSL, reverse proxy, and production-ready configurations for reliable workflow automation.",
    content: selfHostContent,
    author: {
        name: "Ahmed Al-Farsi",
        role: "DevOps & Automation Engineer",
    },
    publishedAt: "2026-02-12",
    updatedAt: "2026-02-12",
    readTime: 18,
    category: "How-to Guides",
    tags: ["n8n", "Self-Hosting", "Docker", "DevOps", "Automation", "AI Agents", "Tutorial"],
    featuredImage: "/images/blog/self-host-n8n-guide.webp",
    metaTitle: "How to Install and Self Host n8n in 2026 (Step-by-Step)",
    metaDescription: "Learn how to install and self host n8n in 2026 with Docker, PostgreSQL & SSL. Step-by-step guide with free workflow template. Get expert help at n8nera.tech.",
    keywords: ["install n8n", "self host n8n", "self-hosted n8n", "n8n Docker", "n8n VPS setup", "n8n automation", "n8n workflow", "no-code automation"],
};

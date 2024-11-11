
# Project Name

A brief description of your project, what it does, and its main purpose.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

---

## Project Overview
This project is a **Next.js** application with a **MongoDB** database, utilizing **Docker** and **Docker Compose** for easy setup and deployment. The app includes components for a learning management system (LMS) and features an API to interact with MongoDB for storing and retrieving course data.

## Technologies Used
- [Next.js](https://nextjs.org/) (React Framework)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Getting Started
These instructions will help you set up and run the project locally.

### Prerequisites
- **Docker** and **Docker Compose** installed on your system
- Node.js and Yarn (if running outside Docker for development)

---

## Environment Variables
The project uses environment variables to configure database connections and API URLs. Add these variables in `.env` files:

- `.env.development` for local development
- `.env.production` for production builds

Here are the main variables:

```plaintext
# .env.development
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_MONGO_URI=mongodb://admin:password123@mongodb:27017/lms

# .env.production
NEXT_PUBLIC_API_URL=https://your-production-api.com
NEXT_PUBLIC_MONGO_URI=mongodb://admin:password123@mongodb:27017/lms
```

**Note:** Replace the default MongoDB username and password (`admin:password123`) with your secure credentials.

---

## Running the Project

### Using Docker Compose
1. **Build and start the containers**:
   ```bash
   docker-compose up --build
   ```

2. **Access the application**:
   - The application will be available at [http://localhost:3000](http://localhost:3000).
   - MongoDB will run on port 27017.

### Without Docker (For Development)
1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn dev
   ```

### Project Structure
- **components/** - Reusable UI components
- **pages/** - Next.js pages and API routes
- **public/** - Static assets (images, icons, etc.)
- **mongo-init/** - MongoDB initialization scripts

---

## Troubleshooting
### Common Issues

- **Docker Build Fails**: Check the Docker logs for specific error messages. Ensure your `.env` files are correctly configured and accessible.
- **MongoDB Authentication**: Make sure your MongoDB URI includes the correct username and password. 

### Helpful Commands
- **Stop Containers**: `docker-compose down`
- **Remove All Containers**: `docker rm -f $(docker ps -aq)`
- **Rebuild Containers**: `docker-compose up --build`

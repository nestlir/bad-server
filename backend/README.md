# WebLarek Backend

Backend service for the WebLarek e-commerce application.

## Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- JWT authentication
- Docker

## Features

- user registration and authentication;
- JWT-based access control;
- product endpoints;
- customer management;
- order workflows;
- validation and centralized error handling;
- upload and static-file handling;
- security middleware and rate limiting.

## Requirements

- Node.js 20+
- npm
- MongoDB instance

## Installation

```bash
cd backend
npm ci
cp .env.example .env
```

Configure the environment variables in `.env`, then start development mode:

```bash
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

## Quality checks

```bash
npm run lint
npm run format
```

The repository also contains a Dockerfile and GitHub Actions workflow used for automated project checks.

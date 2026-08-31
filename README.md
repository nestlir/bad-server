# WebLarek Backend — Secure REST API

Backend service for an e-commerce application with authentication, authorization, products and order workflows.

## Features

- user registration and login;
- JWT-based authentication;
- refresh-token handling with cookies and hashing;
- role separation;
- product endpoints;
- authenticated order workflows;
- validation and centralized error handling;
- rate limiting and security middleware;
- defensive handling of untrusted input.

## Stack

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- JWT
- Docker

## Architecture

```text
HTTP request
    ↓
Express routes/controllers
    ↓
Validation and middleware
    ↓
Models and persistence
    ↓
MongoDB
```

## Run locally

Requirements:

- Node.js 20+
- npm
- MongoDB

```bash
cd backend
npm ci
cp .env.example .env
npm run dev
```

Configure the required environment variables in `backend/.env`.

## Quality checks

```bash
npm run lint
npm run build
npm run format
```

## CI

The repository includes a GitHub Actions workflow that runs the project's external validation suite.

## Deployment

This is a backend API and requires a Node.js runtime plus database configuration. GitHub Pages is therefore not an appropriate deployment target. The included Dockerfile can be used as the basis for deployment to a container-capable hosting platform.

## Project value

The repository is maintained as a backend portfolio case study with particular emphasis on authentication boundaries, input validation and defensive security practices.

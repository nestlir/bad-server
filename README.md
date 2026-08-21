# WebLarek Backend — Secure REST API

> Backend e-commerce service focused on authentication, authorization, orders and defensive programming.

## Overview

A server-side e-commerce API implementing user accounts, token-based authentication, product access and order workflows. The project also focuses on common web-security threats and safe handling of untrusted input.

## Key capabilities

- user registration and login;
- JWT-based authentication;
- refresh-token protection using cookies and hashing;
- role separation: user / administrator;
- product endpoints;
- authenticated order creation and retrieval;
- validation and error handling;
- defensive handling of XSS, NoSQL injection, ReDoS, DDoS-style abuse and path traversal risks.

## Security focus

The project is valuable as a backend case study because security is treated as part of the application design rather than an afterthought. Authentication boundaries, token handling and untrusted input are explicit parts of the implementation.

## API examples

```text
POST /auth/register
POST /auth/login
GET  /product
POST /order
GET  /order/all/me
```

## Stack

**Node.js · TypeScript · REST API · JWT · cookies · hashing**

## Context

Originally created during backend training; presented here as a security-oriented backend case study demonstrating API design and authentication fundamentals.

# Ebuddy Project

Welcome to the **Ebuddy Project**! This project is structured as a monorepo using [TurboRepo](https://turbo.build) to manage multiple packages (frontend, backend, shared libraries, etc.) in a single repository. This allows us to maintain all our code in one place while optimizing build and dependency management.

## Prerequisites

Before getting started, ensure you have the following tools installed:

- [Node.js](https://nodejs.org) (Recommended version: 16.x or higher)
- [npm](https://npmjs.com) or [Yarn](https://yarnpkg.com)

# Getting Started

### Install Dependencies

To install dependencies for the entire monorepo, run:

```bash
npm install
```

Create file service-account.json at apps/backend-repo/src/firebase, paste json from the email to this file

### Run Project

```bash
npm run build
npm run dev
```

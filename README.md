NestJS GraphQL TypeORM Boilerplate
==================================

This project is a boilerplate setup for building a scalable application using **NestJS**, **GraphQL**, and **TypeORM**. It provides the foundational structure for implementing core features and is ready to be extended for your application needs.

Prerequisites
-------------

Before running this project, ensure you have the following installed on your machine:

*   **Node.js** (v16+)
    
*   **npm** or **yarn**
    
*   **PostgreSQL** (or another TypeORM compatible database)
    

Features
--------

*   **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
    
*   **GraphQL**: Enables flexible data querying and mutation with a powerful query language.
    
*   **TypeORM**: An ORM framework that enables easy integration with a variety of databases.
    

Installation
------------

1.  Clone the repository:
```bash
git clone https://github.com/asimkhan0/nest-gql-typeorm-boilerplate
cd nest-gql-typeorm-boilerplate
```
    
2.  Install dependencies

```bash
npm install
#or
yarn install
```
3.  Setup environment variables: Create a .env file in the root directory of the project and add the following:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
```
    
4. Run the application:

```bash
npm run start:dev
```    

Project Structure
-----------------

*   src/
    
    *   app.module.ts: The root module of the application.
        
    *   user/: Example feature module for user management.
        
    *   common/: Shared services, DTOs, and utilities.
        
    *   graphql/: The schema definition for the GraphQL API.
        
    *   entities/: TypeORM entities.
        

# Project To-Do List

This is a structured to-do list for building a basic boilerplate using **NestJS**, **GraphQL**, and **TypeORM**.

### 1. **Basic Setup**

- [x] Install and configure **NestJS** with TypeScript.
- [x] Install **GraphQL** and integrate with NestJS.
- [ ] Install and configure **TypeORM** for database integration.
- [ ] Set up a **PostgreSQL** database (or another supported database).

### 2. **Basic Modules**

- [ ] Create a `User` module with basic CRUD operations.
- [ ] Add a **User Entity** using **TypeORM**.
- [ ] Define GraphQL types and resolvers for the `User` module.
- [ ] Implement basic user authentication (optional).

### 3. **Database Configuration**

- [ ] Set up TypeORM with configuration to connect to the database.
- [ ] Create migrations to manage schema changes.
- [ ] Seed the database with initial data (optional).

### 4. **GraphQL Schema**

- [ ] Define a global GraphQL schema file.
- [ ] Set up query and mutation resolvers for the `User` entity.
- [ ] Add basic error handling for GraphQL queries/mutations.

### 5. **Common Utilities**

- [ ] Implement basic logging using NestJS built-in logger.
- [ ] Add common exception filters and guards.
- [ ] Add middleware for request validation.

### 6. **Basic Authentication (Optional)**

- [ ] Set up authentication with **JWT** or **OAuth**.
- [ ] Add guards for protecting routes.
- [ ] Implement role-based access control.

### 7. **Testing**

- [ ] Write unit tests for each module.
- [ ] Implement e2e tests for core features.

### 8. **Docker Support (Optional)**

- [ ] Add a `Dockerfile` and `docker-compose` to containerize the application.
- [ ] Setup Docker volumes for the database.

### 9. **Documentation & Linting**

- [ ] Add API documentation using **GraphQL Playground** or **Swagger**.
- [ ] Ensure the project follows NestJS's coding conventions.
- [ ] Add a linter to ensure code quality (`eslint`, `prettier`).

    

Running Migrations
------------------

To run migrations after making schema changes:

```bash
npm run typeorm migration:run
```

License
-------

This project is licensed under the MIT License.
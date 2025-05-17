# Express API

This is a simple Express-based API that allows you to manage users with basic operations like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

## Features

- **GET /api/users** - Retrieve all users.
- **POST /api/users** - Create a new user.
- **GET /api/users/:id** - Retrieve a specific user by ID.
- **PUT /api/users/:id** - Replace a user's data completely.
- **PATCH /api/users/:id** - Partially update a user's data.
- **DELETE /api/users/:id** - Delete a user by ID.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/arziiann/Express-API-Implementation.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Express-API-Implementation
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

Once the dependencies are installed, you can start the server:

```bash
npm start
```

This will start the server on `http://localhost:3000` (or another port if specified in the environment).

### Available Endpoints

1. **GET /api/users**

   Retrieve a list of all users.

   **Example request:**

   ```bash
   GET http://localhost:3000/api/users
   ```

   **Response:**

   ```json
   [
     { "id": 1, "username": "Hayk" },
     { "id": 2, "username": "Arsen" },
     { "id": 3, "username": "Kara" }
   ]
   ```

2. **POST /api/users**

   Create a new user.

   **Example request:**

   ```bash
   POST http://localhost:3000/api/users
   Content-Type: application/json

   {
     "username": "NewUser"
   }
   ```

   **Response:**

   ```json
   [
     { "id": 1, "username": "Hayk" },
     { "id": 2, "username": "Arsen" },
     { "id": 3, "username": "Kara" },
     { "id": 4, "username": "NewUser" }
   ]
   ```

3. **GET /api/users/:id**

   Retrieve a specific user by ID.

   **Example request:**

   ```bash
   GET http://localhost:3000/api/users/1
   ```

   **Response:**

   ```json
   { "id": 1, "username": "Hayk" }
   ```

4. **PUT /api/users/:id**

   Replace a user's data completely.

   **Example request:**

   ```bash
   PUT http://localhost:3000/api/users/1
   Content-Type: application/json

   {
     "username": "UpdatedHayk"
   }
   ```

   **Response:**

   ```json
   { "id": 1, "username": "UpdatedHayk" }
   ```

5. **PATCH /api/users/:id**

   Partially update a user's data.

   **Example request:**

   ```bash
   PATCH http://localhost:3000/api/users/1
   Content-Type: application/json

   {
     "username": "PartiallyUpdatedHayk"
   }
   ```

   **Response:**

   ```json
   { "id": 1, "username": "PartiallyUpdatedHayk" }
   ```

6. **DELETE /api/users/:id**

   Delete a user by ID.

   **Example request:**

   ```bash
   DELETE http://localhost:3000/api/users/1
   ```

   **Response:**

   ```json
   { "msg": "User deleted" }
   ```

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.

To install dependencies, run:

```bash
npm install
```

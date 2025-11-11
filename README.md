TriMap Solutions - Farm Animal Management API

A RESTful backend API for managing farm animal profiles for trade and health management.
This system allows users to create, read, update, and delete animal profiles, as well as fetch healthy animals purchased in the last 6 months.



Table of Contents

1. Project Overview
2. Features
3. Technology Stack
4. API Endpoints
5. Installation
6. Usage
7. Sample Data
8. Validation Rules
9. Testing
10. Author


Project Overview

TriMap Solutions wanted a system to manage farm animals for trade and health management.
This API provides a backend solution to:

1. Add new animal profiles
2. Retrieve all or single animal profiles
3. Update or delete animal profiles
4. Filter animals that are healthy and purchased within the last 6 months

Each animal profile includes:

- Unique ID
- Name (biological or breed name)
- Species (cow, buffalo, goat)
- Age in years
- Health status (Healthy, Sick, Recovering)
- Purchase date
- Farm location



Features
- Create new animal profile
- Read all animal profiles
- Read single animal profile by ID
- Update existing animal profile
- Delete animal profile
- Filter healthy animals purchased in the last 6 months



Technology Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman for API testing




Installation

1. Clone the repository:

git clone <repository-url>  
cd trimap-animal-api-assignment

2. Install dependencies:

npm install

3. Create a .env file in the root directory:

MONGO_URI=<your_mongodb_connection_string>  
PORT=4000

4. Start the server:

npm start

Or with nodemon:

nodemon server.js

The server will run at:

http://localhost:3000


Usage
1. Create an Animal

POST http://localhost:4000/api/animals/create  
Content-Type: application/json

{  
 "name": "Nellie",  
 "species": "cow",  
 "age": 4,  
 "healthStatus": "Healthy",  
 "purchaseDate": "2025-07-15T00:00:00.000Z",  
 "farmLocation": "Pune"  
}

2. Get All Animals

GET http://localhost:4000/api/animals/read

3. Get Single Animal

GET http://localhost:4000/api/animals/read/<id>

4. Update an Animal

PATCH http://localhost:4000/api/animals/update/<id>

Body example:

{  
 "farmLocation": "Nagpur",  
 "healthStatus": "Recovering"  
}

5. Delete an Animal

DELETE http://localhost:4000/api/animals/delete/<id>

6. Fetch Healthy Animals Purchased in Last 6 Months

GET http://localhost:4000/api/animals/healthy/species

Sample Data

[
{ "name": "Murrah", "species": "buffalo", "age": 6, "healthStatus": "Healthy", "purchaseDate": "2024-11-20T00:00:00.000Z", "farmLocation": "Nagpur" },
{ "name": "Nellie", "species": "cow", "age": 4, "healthStatus": "Healthy", "purchaseDate": "2025-07-15T00:00:00.000Z", "farmLocation": "Pune" },
{ "name": "Eetal", "species": "goat", "age": 2, "healthStatus": "Healthy", "purchaseDate": "2025-08-05T00:00:00.000Z", "farmLocation": "Sangli" }
]

Validation Rules
- Required fields: name, species, age, healthStatus, purchaseDate, farmLocation
- Species must be one of: cow, buffalo, goat
- Health status must be one of: Healthy, Sick, Recovering
- Age must be between 0 and 100
- Purchase date must be a valid ISO date



Testing
- Use Postman or any API client to test endpoints
- Make sure MongoDB is running
- For /healthy/species, ensure:

  - Animals have Healthy status
  - Purchased in last 6 months from today

Author
Sushil Jawanjal
MCA Student
MERN Stack Developer
Full-Stack Web Developer

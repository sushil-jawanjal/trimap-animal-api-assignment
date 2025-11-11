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


Usage

1.Create an Animal
<img width="1394" height="933" alt="Screenshot 2025-11-11 131641" src="https://github.com/user-attachments/assets/904b65d4-3fee-4c41-8ce7-5cd9b3e301fc" />

2.Get All Animals
<img width="1390" height="818" alt="Screenshot 2025-11-11 143545" src="https://github.com/user-attachments/assets/69a5f72d-36ae-4ffb-a9dc-aaf27b1a3147" />

3.Get Single Animal
<img width="1376" height="942" alt="image" src="https://github.com/user-attachments/assets/804d5d96-0766-4b7a-bf6a-5f331ee0dfad" />

4.Update an Animal
<img width="1371" height="921" alt="image" src="https://github.com/user-attachments/assets/c66e7fed-44ae-4d3f-9081-9ff63732bc6d" />

5.Delete an Animal
<img width="1378" height="874" alt="image" src="https://github.com/user-attachments/assets/73818922-b35f-47d1-b8a6-084d765a9dfa" />

6.Fetch Healthy Animals Purchased in Last 6 Months
<img width="1346" height="928" alt="image" src="https://github.com/user-attachments/assets/579921df-01ca-4ce7-9929-f53dbdbef93b" />


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



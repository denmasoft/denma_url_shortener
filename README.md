# URL Shortener API

General description
---
This project use clean arquitecture and apply 
some patterns such as:
- Repository
- Dependency Injection

Project Structure
---
- Components
	-  Express handlers (Factories, Middlewares and routes)
- Controllers
	- Converts the request data into a model and passes it to the use case.
- Models
	- Domain model objects such as Entities
- Remote_models
	- MongoDB related models and schemas
- Repositories
	- Data access objects interfaces (It would be better using Typescript)
- Repositories_interfaces
	- Repository implementations (No interface pattern in JS)
- Services
	- .
- Routes
	- All routes are imported here.
- use_cases
	- Application business rules 		

Prerequisites
---
- Node.js
- npm

Instructions
---
1. Clone project: 
	git clone https://github.com/denmasoft/denma_url_shortener.git
2. cd denma_url_shortener
3. npm install
4. npm start 
5. Install and open Postman, import json file "denmaUrlShortener.postman_collection.json" which is in the root directory of the project

Automated Build
---
Deploy to heroku from github.
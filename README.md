📝 Blog API - RESTful API with Node.js, Express, and PostgreSQL

This project is a simple RESTful API built with Node.js, Express, and PostgreSQL using Sequelize as an ORM. The API allows you to manage blog posts with basic CRUD operations (Create, Read, Update, Delete).

Features

	•	GET /api/posts: Retrieve all blog posts.
	•	GET /api/posts/:id: Retrieve a specific blog post by ID.
	•	POST /api/posts: Create a new blog post.
	•	PUT /api/posts/:id: Update an existing blog post.
	•	DELETE /api/posts/:id: Delete a blog post.

Setup

	1.	Clone the repository:
   git clone https://github.com/ltejadavic/blog-api.git
   cd blog-api

  2.	Install dependencies:
   npm install
	3.	Configure your PostgreSQL database in config/config.json.

	4.	Run the migrations to create the database tables:
   npx sequelize-cli db:migrate
   
	5.	Start the server:
   node server.js

Testing

You can test the API using tools like Postman or curl with the following endpoints:

	•	GET http://localhost:3000/api/posts
	•	GET http://localhost:3000/api/posts/:id
	•	POST http://localhost:3000/api/posts
	•	PUT http://localhost:3000/api/posts/:id
	•	DELETE http://localhost:3000/api/posts/:id

Technologies Used

	•	Node.js
	•	Express
	•	PostgreSQL
	•	Sequelize ORM

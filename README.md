# blogging-platform-api
learning project for RESTful apis

1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/soumilmalhotra/blogging-platform-api.git
cd blogging-platform-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create a .env File
In the root directory, create a .env file with your MongoDB URI:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
4. Run the Server
bash
Copy
Edit
npm start
Or if you're using nodemon for auto-reload:

bash
Copy
Edit
npx nodemon index.js
The server runs on:
http://localhost:8000

📦 Available API Routes
1. Get All Blogs
http
Copy
Edit
GET /api/blogs
Response: Array of all blogs

2. Get a Specific Blog by ID
http
Copy
Edit
GET /api/blogs/:id
Response: Single blog object
Error: 404 if not found

3. Create a New Blog
http
Copy
Edit
POST /api/blogs
Content-Type: application/json
Body:

json
Copy
Edit
{
  "title": "My First Blog",
  "content": "This is the content.",
  "category": "Tech",
  "tags": ["javascript", "web"]
}
Response: 201 Created with the created blog object

4. Delete a Blog by ID
h
Copy
Edit
DELETE /api/blogs/:id
Response: 200 OK with confirmation
Error: 404 if blog not found

5. Update a Blog by ID
🔧 This route is defined but not yet implemented:

http
Copy
Edit
PUT /api/blogs/:id
✅ To implement:
Accept updated blog fields in the request body

Replace or modify the blog document by ID

Let me know if you'd like me to help you implement it!



https://roadmap.sh/projects/blogging-platform-api
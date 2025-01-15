# Backend Quiz 1-46 - live netlify düzenle

A backend project designed to create and manage quizzes. This project focuses on building a functional backend architecture for quiz-related operations.

## Features

- User authentication and authorization
- Quiz creation and management
- Question and answer handling
- Scoring and result tracking
- RESTful API integration
- Database operations for storing quizzes and user data

## Technologies Used

- **Backend Framework:** Node.js with Express
- **Database:** MongoDB (Mongoose for schema management)
- **Authentication:** JSON Web Tokens (JWT)
- **API Testing:** Postman
- **Environment Management:** dotenv

## Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/beratgdlk/backend-quiz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-quiz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```env
     PORT=3000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Start the server:

   ```bash
   npm start
   ```

6. Access the API at `http://localhost:3000`.

## API Endpoints

### User Routes

- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - User login

### Quiz Routes

- **GET** `/api/quizzes` - Get all quizzes
- **POST** `/api/quizzes` - Create a new quiz
- **GET** `/api/quizzes/:id` - Get a specific quiz
- **PUT** `/api/quizzes/:id` - Update a quiz
- **DELETE** `/api/quizzes/:id` - Delete a quiz

### Question Routes

- **POST** `/api/quizzes/:quizId/questions` - Add questions to a quiz
- **GET** `/api/quizzes/:quizId/questions` - Get all questions of a quiz

## Folder Structure

```
backend-quiz/
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
├── middleware/
├── .env
├── server.js
├── package.json
└── README.md
```

- **controllers/**: Contains business logic for different features.
- **models/**: Mongoose schemas and models.
- **routes/**: Defines application routes.
- **utils/**: Utility functions and helpers.
- **config/**: Configuration files.
- **middleware/**: Middleware functions for authentication and error handling.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For inquiries or feedback, contact:
- **Name:** Berat G.
- **GitHub:** [beratgdlk](https://github.com/beratgdlk)
- **Email:** beratgdlk@gmail.com

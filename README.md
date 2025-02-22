
# Digital News App

## Description
The Digital News App is a Next.js application that serves as a digital news platform, providing users with access to various news articles and posts. Digital news application website developed in Next Js and MongoDB

## Technologies Used
- Next.js
- React
- TypeScript
- CSS
- Mongoose (for database interactions)

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd digital-news-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To run the application in development mode, use:
```bash
npm run dev
```
To build the application for production, use:
```bash
npm run build
```
To start the production server, use:
```bash
npm start
```

## Components Overview
- **Header**: Contains navigation, a search form, and mobile compatibility.
- **Posts**: Displays a list of posts fetched from an API, including trending posts and individual post details.
- **Hero**: A prominent section on the homepage.

## API Endpoints
The application fetches posts from the following API endpoints:
- `/api/postitems`: Retrieves all post items.
- `/api/postitems/[id]`: Retrieves a single post item by ID.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.
=======

# Amigo

Amigo is an admin panel website for the Spanish school **AMIGO**. It allows owner of the WebSite to manage content which is displayed on the school website, including teachers, prices, feedback, and CEO/company information.

## Features

- Admin authentication with JWT (login, verification, refresh, and logout flow)
- Teacher management
- Price and course/package management
- Feedback management
- CEO/company information management
- Image upload support
- Protected admin routes
- Client-side state management with Redux
- REST API built with NestJS

## Screenshots

### Login Page

![alt text](<docs/screenshots/Screenshot 2026-05-14 at 19.37.01.png>)

![alt text](<docs/screenshots/image.png>)

### Teachers Page

![alt text](<docs/screenshots/Screenshot 2026-05-14 at 19.34.08.png>)

### Teacher Update Page

![alt text](<docs/screenshots/image-3.png>)

### Price Page

![alt text](<docs/screenshots/image-1.png>)

### Adding price form

![alt text](<docs/screenshots/image-2.png>)



## Tech Stack

### Client

- React
- TypeScript
- Redux / Redux Toolkit
- React Router
- Axios
- CSS Modules

### Server

- NestJS
- TypeScript
- PostgreSQL
- Sequelize / Sequelize TypeScript
- JWT
- Cookie-based refresh token handling
- Cloudinary
- Nodemailer

## Project Structure

```txt
amigo/
  client/        React admin panel
  server/        NestJS API server
  README.md      Project documentation
```

## Requirements

Before running the project, make sure you have installed:

- Node.js
- npm
- PostgreSQL

You also need access to:

- A PostgreSQL database
- SMTP credentials for email sending
- Cloudinary credentials for image uploads

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd amigo
```

Install client dependencies:

```bash
cd client
npm install
```

Install server dependencies:

```bash
cd ../server
npm install
```

## Environment Variables

The server uses environment files based on `NODE_ENV`.

For development, create or update:

```txt
server/.env.development.local
```

Required variables:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

ACCESS_SECRET=your_access_token_secret
REFRESH_SECRET=your_refresh_token_secret

SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password

API_URL=http://localhost:3000

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Note: Keep real secrets private. Do not commit production passwords, token secrets, SMTP credentials, or Cloudinary API secrets.

## Running the Project

Start the server:

```bash
cd server
npm run start:dev
```

The server runs on:

```txt
http://localhost:3000
```

Start the client in another terminal:

```bash
cd client
npm start
```

The client runs on:

```txt
http://localhost:3001
```

## API Examples

Base API URL:

```txt
http://localhost:3000
```

Protected endpoints require an access token in the `Authorization` header:

```txt
Authorization: Bearer <accessToken>
```

### Auth

#### Login

```txt
POST /auth/login
```

```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

#### Verify Login Code

```txt
POST /auth/login-verify
```

```json
{
  "email": "admin@example.com",
  "code": "123456"
}
```

#### Refresh Token

```txt
POST /auth/refresh
```

Refresh token is sent through cookies.

#### Logout

```txt
POST /auth/logout
```

### Teachers / Professors

Teacher data is handled by the `professor` API module.

#### Get All Teachers

```txt
GET /professor
```

#### Get One Teacher

```txt
GET /professor/:id
```

#### Update Teacher

```txt
PUT /professor/:id
```

```json
{
  "name": "Maria Garcia",
  "description": "Updated teacher description",
  "subDescription": "Updated short description",
  "videoUrl": "https://example.com/video",
  "superPower": ["Grammar", "Speaking practice"],
  "favouriteWord": "aprender",
  "forStudent": "Beginners"
}
```

#### Delete Teacher

```txt
DELETE /professor/:id
```

### Prices

#### Get All Prices

```txt
GET /price
```

#### Create Price

```txt
POST /price
```

```json
{
  "amount": 35,
  "title": "Individual Lesson",
  "description": "One-to-one Spanish lesson",
  "type": "individual"
}
```

Allowed `type` values:

```txt
individual
pair
special
```

#### Update Price

```txt
PUT /price/:id
```

```json
{
  "amount": 40,
  "title": "Individual Lesson",
  "description": "Updated lesson description",
  "type": "individual"
}
```

#### Delete Price

```txt
DELETE /price/:id
```

### CEO / Company Information

#### Get CEO Information

```txt
GET /ceo/:id
```

#### Update CEO Information

```txt
PUT /ceo/:id
```

```json
{
  "name": "Admin Name",
  "email": "admin@example.com",
  "description": "Updated information about the owner or company.",
  "telegram": "@amigo_school",
  "instagram": "https://instagram.com/amigo_school",
  "image": "https://example.com/image.jpg"
}
```

## Available Scripts

### Client

```bash
npm start      # Start the React development server
npm run build  # Build the client for production
npm test       # Run client tests
```

### Server

```bash
npm run start       # Start the NestJS server
npm run start:dev   # Start the server in watch mode
npm run build       # Build the server
npm run start:prod  # Run the built server
npm run lint        # Run ESLint
npm run format      # Format source files with Prettier
npm run test        # Run unit tests
npm run test:cov    # Run tests with coverage
```

## Main Routes

### Client Routes

- `/login` - public login page
- `/admin/teachers` - teacher management
- `/admin/feedback` - feedback management
- `/admin/price` - price management
- `/admin/ceo` - CEO/company information management

### Server Modules

- `auth` - login, verification, refresh tokens, logout
- `professor` - teacher/professor data
- `price` - price data
- `feedback` - feedback data
- `ceo` - CEO/company data
- `image` - image upload handling

## Authentication

The admin panel uses JWT authentication. Access tokens are sent in the `Authorization` header, and refresh tokens are handled with cookies.

If the access token expires, the client tries to refresh it automatically by calling the server refresh endpoint.

## Development Notes

- The API URL used by the client is currently set to `http://localhost:3000`.
- The server allows CORS requests from `http://localhost:3001`.
- The client development server runs on port `3001`.
- The server runs on port `3000` by default.

## Build

Build the client:

```bash
cd client
npm run build
```

Build the server:

```bash
cd server
npm run build
```

## License

This project is private and was created for the Spanish school **AMIGO**.

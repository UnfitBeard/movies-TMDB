# Movies App - Debounced Search, Trending, Favorites(React + ExpressJS + MongoDb + NodeJS)

### Application Screenshot

This is a quick look at the main screen of the application.

![App Screenshot of the Main Dashboard](public/appscreenshot.png)

## Project Structure

```
movies-TMDB/
├── Movies-TMDB-Backend/          # Express.js Backend API
│   ├── src/
│   │   ├── Config/
│   │   │   ├── arcjet.ts         # Security configuration
│   │   │   ├── database.ts       # MongoDB connection
│   │   │   └── logger.ts         # Winston logger setup
│   │   ├── Controllers/          # Route controllers
│   │   ├── Middleware/
│   │   │   └── security.middleware.ts  # Arcjet security middleware
│   │   ├── Routes/               # API routes
│   │   ├── Schemas/              # Mongoose schemas
│   │   ├── Utils/
│   │   │   └── Types/
│   │   │       ├── express.d.ts  # Express type definitions
│   │   │       └── UserRequest.ts # Custom request types
│   │   ├── app.ts                # Express app configuration
│   │   ├── index.ts              # Application entry point
│   │   └── server.ts             # Server initialization
│   ├── dist/                     # Compiled JavaScript (generated)
│   ├── logs/                     # Application logs (generated)
│   ├── .env                      # Environment variables
│   ├── .dockerignore             # Docker ignore file
│   ├── Dockerfile                # Docker configuration for backend
│   ├── package.json              # Backend dependencies
│   └── tsconfig.json             # TypeScript configuration
│
├── src/                          # React Frontend
│   ├── components/
│   │   ├── MovieCard.jsx         # Movie card component
│   │   ├── Search.jsx            # Search component
│   │   └── Spinner.jsx           # Loading spinner
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── appwrite.js               # Appwrite configuration
│   ├── index.css                 # Global styles
│   └── main.jsx                  # React entry point
│
├── public/                       # Static assets
│   ├── appscreenshot.png
│   ├── hero-bg.png
│   ├── hero-img.png
│   ├── logo.svg
│   ├── search.svg
│   └── star.svg
│
├── .env.example                  # Example environment variables
├── .gitignore                    # Git ignore file
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point
├── package.json                  # Frontend dependencies
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation
```

# Frontend

## Features

• Debounced Search to reduce API calls - useDebounced + useEffects.
• Trending saved searches
• React 19 with modern hooks
• Vite for fast development and building
• TailwindCSS for styling
• Appwrite integration

## Why Debouncing + caching matters for product UX and cost

# Movies TMDB Backend

A secure Express.js backend API for a movies application, built with TypeScript and featuring advanced security middleware powered by Arcjet.

## Features

- 🔒 **Security**: Arcjet integration with bot detection, rate limiting, and shield protection
- 📝 **Logging**: Winston logger with file and console transports
- 🛡️ **Middleware**: CORS, Helmet, Cookie Parser, Morgan
- 🚀 **TypeScript**: Full TypeScript support with ES modules
- ⚡ **Hot Reload**: Development mode with nodemon


## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. **Clone the repository**

   ```bash
   cd Movies-TMDB-Backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the backend root directory:

   ```env
   PORT=4000
   NODE_ENV=development
   LOG_LEVEL=info

   # MongoDB Connection
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/movies_app?appName=Cluster0
   # Or for local MongoDB:
   # MONGO_URI=mongodb://localhost:27017/movies_app

   # Arcjet Security
   ARCJET_KEY=your_arcjet_key_here

   # API Keys
   GEMINI_API_KEY=your_gemini_api_key
   LANGSMITH_API_KEY=your_langsmith_api_key
   LANGSMITH_TRACING_ENABLED=true
   LANGSMITH_TRACING_SAMPLE_RATE=1.0

   # Authentication
   JWT_ACCESS_SECRET=your_access_secret
   JWT_REFRESH_SECRET=your_refresh_secret
   DEVICE_JWT_SECRET=your_device_secret
   ACCESS_TTL=15m
   REFRESH_TTL=30d
   DEVICE_TTL=90d

   # Redis
   REDIS_URL=redis://localhost:6379

   # GitHub OAuth
   GITHUB_CLIENT_SECRET=your_github_secret
   GITHUB_CLIENT_ID=your_github_client_id
   ```

4. **Create logs directory** (if not exists)
   ```bash
   mkdir -p logs
   ```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with hot reload using nodemon. The server will automatically restart when you make changes to TypeScript files.

### Build

```bash
npm run build
```

Compiles TypeScript code to JavaScript in the `dist/` directory using the TypeScript compiler (tsc).

### Production

```bash
npm start
```

Runs the compiled JavaScript from the `dist/` directory. **Note:** You must run `npm run build` before starting the production server.

## API Endpoints

### Health Check

```
GET /health
```

Returns server health status, timestamp, and uptime.

**Response:**

```json
{
  "status": "OK",
  "timestamp": "2025-10-29T12:00:00.000Z",
  "uptime": 123.456
}
```

### Root

```
GET /
```

Simple welcome message.

**Response:**

```
Hello from movies app
```

### API Root

```
GET /api
```

Confirms the API is running.

**Response:**

```
Movies API is running
```

## Security Features

### Arcjet Protection

The application uses Arcjet for comprehensive security:

- **Shield**: Protects against common attacks (SQL injection, XSS, etc.)
- **Bot Detection**: Blocks automated requests while allowing legitimate bots (search engines, link previews)
- **Rate Limiting**: Role-based rate limits:
  - **Admin**: 20 requests/minute
  - **User**: 10 requests/minute
  - **Guest**: 5 requests/minute

### Additional Security

- **Helmet**: Sets security-related HTTP headers
- **CORS**: Configurable cross-origin resource sharing
- **Cookie Parser**: Secure cookie handling

## Logging

Winston logger with multiple transports:

- **Console**: Development mode only, colorized output
- **File Logging**:
  - `logs/error.log`: Error level and above
  - `logs/combined.log`: All log levels

## TypeScript Configuration

- **Target**: ES2020
- **Module**: ESNext (ES Modules)
- **Strict Mode**: Enabled
- **Output**: `dist/` directory
- **Source**: `src/` directory

## Troubleshooting

### Build Issues

If you encounter module not found errors:

1. Ensure you've run `npm run build`
2. Check that the `dist/` directory exists
3. Verify `tsconfig.json` does not have `"noEmit": true`

### Missing Logs Directory

If the server fails to start due to missing logs directory:

```bash
mkdir -p logs
```

### Port Already in Use

If port 4000 is already in use, change the `PORT` in your `.env` file:

```env
PORT=5000
```

## Dependencies

### Main Dependencies

- **express**: Web framework
- **dotenv**: Environment variable management
- **cors**: CORS middleware
- **helmet**: Security headers
- **cookie-parser**: Cookie parsing
- **morgan**: HTTP request logger
- **winston**: Logging library
- **@arcjet/node**: Security platform

### Dev Dependencies

- **typescript**: TypeScript compiler
- **ts-node**: TypeScript execution
- **nodemon**: Hot reload development
- **@types/\***: TypeScript type definitions

## Docker Deployment

### Backend Docker Setup

The backend includes a multi-stage Dockerfile for both development and production environments.

#### Building the Docker Image

```bash
cd Movies-TMDB-Backend
docker build -t movies-app .
```

#### Running with Docker

**Option 1: Using environment file (Recommended)**
```bash
docker run -p 4000:4000 --env-file .env movies-app
```

**Option 2: Passing environment variables directly**
```bash
docker run -p 4000:4000 \
  -e MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/movies_app" \
  -e ARCJET_KEY="your_arcjet_key" \
  -e NODE_ENV="production" \
  movies-app
```

**Option 3: Running in development mode**
```bash
docker build --target development -t movies-app-dev .
docker run -p 4000:4000 --env-file .env -v $(pwd)/src:/app/src movies-app-dev
```

#### Docker Stages

The Dockerfile includes three stages:

1. **base**: Base configuration with production dependencies
2. **development**: Includes dev dependencies and hot reload with nodemon
3. **production**: Optimized production build with compiled TypeScript

#### Important Notes

- The `.env` file is **not** copied into the Docker image for security reasons
- Always use `--env-file` or `-e` flags to pass environment variables
- The MongoDB connection string must start with `mongodb://` or `mongodb+srv://`
- Port 4000 is exposed by default (configurable via PORT environment variable)

### Docker Troubleshooting

**Issue**: Database connection failed
```
error: Database connection failed: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"
```
**Solution**: Make sure to pass environment variables using `--env-file .env` flag

**Issue**: dotenv injecting env (0) from .env
**Solution**: The `.env` file inside the container is not being read. Use `--env-file` to load variables from host.

## Development Workflow

### Local Development (Without Docker)

1. Make changes to TypeScript files in `src/`
2. Run `npm run dev` for hot reload during development
3. Test your changes
4. Run `npm run build` to compile
5. Run `npm start` to test production build

### Docker Development

1. Build development image: `docker build --target development -t movies-app-dev .`
2. Run with volume mount for hot reload: `docker run -p 4000:4000 --env-file .env -v $(pwd)/src:/app/src movies-app-dev`
3. Make changes and they'll be reflected automatically

## License

ISC

## Author

Your Name

---

**Note:** Remember to keep your `ARCJET_KEY` and other sensitive information secure. Never commit `.env` files to version control.

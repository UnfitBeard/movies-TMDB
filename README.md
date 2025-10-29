# Movies App - Debounced Search, Trending, Favorites(React + ExpressJS + MongoDb + NodeJS)

### Application Screenshot

This is a quick look at the main screen of the application.

![App Screenshot of the Main Dashboard](public/appscreenshot.png)

# Frontend

## Features

• Debounced Search to reduce API calls - useDebounced + useEffects.
• Trending saved searches

## Why Debouncing + caching matters for product UX and cost

# Movies TMDB Backend

A secure Express.js backend API for a movies application, built with TypeScript and featuring advanced security middleware powered by Arcjet.

## Features

- 🔒 **Security**: Arcjet integration with bot detection, rate limiting, and shield protection
- 📝 **Logging**: Winston logger with file and console transports
- 🛡️ **Middleware**: CORS, Helmet, Cookie Parser, Morgan
- 🚀 **TypeScript**: Full TypeScript support with ES modules
- ⚡ **Hot Reload**: Development mode with nodemon

## File Structure

```
Movies-TMDB-Backend/
├── src/
│   ├── Config/
│   │   ├── arcjet.ts          # Arcjet security configuration
│   │   └── logger.ts          # Winston logger setup
│   ├── Controllers/           # Route controllers (empty)
│   ├── Middleware/
│   │   └── security.middlware.ts  # Arcjet security middleware
│   ├── Routes/                # API routes (empty)
│   ├── Utils/
│   │   └── Types/
│   │       ├── express.d.ts   # Express type definitions
│   │       └── UserRequest.ts # Custom request types
│   ├── Components/            # Reusable components (empty)
│   ├── app.ts                 # Express app configuration
│   ├── index.ts               # Application entry point
│   └── server.ts              # Server initialization
├── dist/                      # Compiled JavaScript (generated)
├── logs/                      # Application logs (generated)
│   ├── error.log
│   └── combined.log
├── node_modules/              # Dependencies
├── .env                       # Environment variables
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
└── tsconfig.json              # TypeScript configuration
```

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

   Create a `.env` file in the root directory:

   ```env
   PORT=4000
   NODE_ENV=development
   LOG_LEVEL=info

   # Arcjet key - Get yours at https://app.arcjet.com
   ARCJET_KEY=your_arcjet_key_here
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

## Development Workflow

1. Make changes to TypeScript files in `src/`
2. Run `npm run dev` for hot reload during development
3. Test your changes
4. Run `npm run build` to compile
5. Run `npm start` to test production build

## License

ISC

## Author

Your Name

---

**Note:** Remember to keep your `ARCJET_KEY` and other sensitive information secure. Never commit `.env` files to version control.

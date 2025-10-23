# LTU MOODLE LMS Components Application

A comprehensive Next.js web application designed to create and export interactive HTML5 components for deployment on MOODLE Learning Management System (LMS), featuring an advanced escape room builder with database integration.

## Student Information
- **Student Name:** Pasan Jayarathna
- **Student Number:** 21963056
- **Course:** CSE3CWA - Cloud Web-Based Application
- **Institution:** La Trobe University (LTU)
- **Assignment:** Assignment 2 - MOODLE LMS Components with Database Integration

## Project Overview

This application provides a comprehensive HTML5 component generator specifically designed for MOODLE LMS deployment, featuring both interactive tab components and an advanced escape room builder with full database integration, API endpoints, and comprehensive testing.

## Current Features

### ✅ Core Components

- **Interactive Tabs Component** - Dynamic tab creation with custom titles and content
- **Escape Room Builder** - Advanced escape room creation with multiple questions
- **HTML5 Code Generator** - Complete HTML5 document generation with inline CSS
- **Database Integration** - Full CRUD operations with Prisma ORM
- **REST API Endpoints** - Complete API for puzzles and escape rooms
- **Custom Color Configuration** - Primary, secondary, and background color pickers
- **Export to HTML/JS** - Download functionality for generated code
- **MOODLE LMS Integration** - Designed specifically for MOODLE deployment
- **Responsive Design** - Works on all screen sizes
- **Dark/Light Theme Support** - Full theme switching functionality

### 🗄️ Database Features

- **SQLite Database** - Local development database with Prisma ORM
- **Puzzle Management** - Full CRUD operations for puzzle entities
- **Escape Room Builder** - Create and manage escape rooms with questions
- **Data Persistence** - Automatic saving to database and local storage
- **Migration Support** - Database schema versioning and updates
- **Type Safety** - Full TypeScript integration with Prisma

### 🧪 Testing & Quality

- **Playwright E2E Tests** - Comprehensive end-to-end testing
- **API Testing** - Full CRUD operation testing
- **Database Testing** - Safe database reset and testing
- **Build Verification** - Production build testing
- **Linting** - ESLint integration for code quality
- **TypeScript** - Full type safety throughout the application

### 🎨 Theme System
- **Dynamic Theme Toggle** - Sun/moon emoji toggle switch
- **CSS Variables** - Consistent theming across all components
- **Persistent Preferences** - Theme choice saved in local storage
- **Smooth Transitions** - Animated theme switching

### 📱 User Interface
- **Modern Header** - Black header with navigation and hamburger menu
- **Responsive Navigation** - Mobile-friendly hamburger menu
- **Clean Footer** - Black footer with student information
- **Interactive Elements** - Hover effects and smooth animations

## Technology Stack

- **Frontend Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS Variables
- **Build Tool:** Turbopack
- **Package Manager:** npm
- **Database:** SQLite with Prisma ORM
- **API:** Next.js API Routes with REST endpoints
- **Testing:** Playwright for E2E testing
- **State Management:** React Context API
- **Theme System:** Custom CSS Variables
- **Validation:** Zod for schema validation

## Features

### Core Functionality
- **Component Generator** - Create custom tab components
- **Escape Room Builder** - Advanced escape room creation with questions
- **Database Operations** - Full CRUD operations for all entities
- **API Endpoints** - RESTful API for all operations
- **Real-time Preview** - See changes as you type
- **Code Export** - Generate complete HTML5 documents
- **Copy to Clipboard** - Easy code copying functionality
- **Download HTML** - Direct file download capability
- **Data Persistence** - Automatic saving to database and local storage

### API Endpoints
- **GET /api/puzzles** - List all puzzles
- **POST /api/puzzles** - Create new puzzle
- **GET /api/puzzles/[id]** - Get specific puzzle
- **PUT /api/puzzles/[id]** - Update puzzle
- **DELETE /api/puzzles/[id]** - Delete puzzle
- **GET /api/escape-rooms** - List all escape rooms
- **POST /api/escape-rooms** - Create new escape room
- **GET /api/escape-rooms/[id]** - Get specific escape room
- **PUT /api/escape-rooms/[id]** - Update escape room
- **DELETE /api/escape-rooms/[id]** - Delete escape room

### User Experience
- **Intuitive Interface** - Clean, modern design
- **Theme Switching** - Light/dark mode support
- **Responsive Design** - Works on desktop and mobile
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized with Next.js 15
- **Error Handling** - Graceful error handling throughout
- **Loading States** - User-friendly loading indicators

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- SQLite (included with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CWA_Assignment2
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Database Setup

The application uses SQLite with Prisma ORM. The database will be automatically created when you first run the application.

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# View database in Prisma Studio (optional)
npx prisma studio
```

### Building for Production

```bash
npm run build
npm start
```

### Running Tests

```bash
# Run end-to-end tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Run linting
npm run lint
```

## Usage

### Creating Tab Components

1. **Navigate to Tabs Page** - Click "View Tabs" from the home page
2. **Configure Component** - Set component type and title
3. **Add Custom Tabs** - Create multiple tabs with custom content
4. **Customize Colors** - Use color pickers for primary, secondary, and background colors
5. **Generate Code** - Click "Generate Code" to create HTML5 output
6. **Export** - Copy code or download HTML file
7. **Deploy** - Paste into MOODLE LMS HTML editor

### Creating Escape Rooms

1. **Navigate to Escape Room Builder** - Click "🚪 Escape Room" from the navigation
2. **Create New Room** - Click "Create New Escape Room" button
3. **Configure Room Details** - Set room name, description, and timer
4. **Add Questions** - Create multiple questions with challenges and hints
5. **Save to Database** - Use the "Save to Database" button to persist data
6. **Manage Questions** - Edit, delete, or reorder questions as needed
7. **Export Data** - Export all escape room data for backup

### API Usage

The application provides RESTful API endpoints for programmatic access:

```bash
# Get all puzzles
curl http://localhost:3000/api/puzzles

# Create a new puzzle
curl -X POST http://localhost:3000/api/puzzles \
  -H "Content-Type: application/json" \
  -d '{"title":"New Puzzle","description":"Puzzle description","timeLimitSeconds":300}'

# Get specific puzzle
curl http://localhost:3000/api/puzzles/1

# Update puzzle
curl -X PUT http://localhost:3000/api/puzzles/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Puzzle"}'

# Delete puzzle
curl -X DELETE http://localhost:3000/api/puzzles/1
```

### Theme Switching

- **Toggle Theme** - Use the sun/moon toggle in the header
- **Automatic Save** - Theme preference is remembered
- **Smooth Transitions** - All elements animate between themes

## Project Structure

```
CWA_Assignment2/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── puzzles/       # Puzzle API endpoints
│   │   └── escape-rooms/  # Escape room API endpoints
│   ├── about/             # About page
│   ├── components/        # Tabs component generator
│   ├── coding-races/      # Coding races page
│   ├── court-room/        # Court room page
│   ├── escape-room/       # Escape room builder page
│   ├── pre-lab/           # Pre-lab questions page
│   ├── puzzles/           # Puzzles listing page
│   ├── components/        # Reusable components
│   │   ├── Footer.tsx     # Footer component
│   │   ├── header.tsx     # Header with navigation
│   │   └── CookieConsent.tsx # Cookie consent component
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── utils/             # Utility functions
│   │   ├── cookies.ts     # Local storage utilities
│   │   └── escapeRoomApi.ts # API utility functions
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── lib/                    # Library files
│   └── prisma.ts          # Prisma client configuration
├── prisma/                # Database schema and migrations
│   └── schema.prisma      # Database schema
├── tests/                 # Test files
│   ├── api.puzzles.create-list.spec.ts
│   ├── api.puzzles.update-delete.spec.ts
│   └── reset-db.ts        # Database reset utility
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── prisma.config.ts       # Prisma configuration
└── README.md              # Project documentation
```

## MOODLE LMS Integration

### How to Deploy Components

1. **Generate Code** - Use the component generator to create your tabs
2. **Copy HTML** - Use the "Copy Code" button to copy the complete HTML
3. **Paste in MOODLE** - Open your MOODLE page in HTML source editor
4. **Paste Code** - Insert the copied HTML code
5. **Save and Test** - Save the page and test the component

### Generated Code Features

- **Self-contained** - All CSS is inline, no external dependencies
- **MOODLE Compatible** - Works within MOODLE's HTML editor
- **Responsive** - Adapts to different screen sizes
- **Accessible** - Includes proper ARIA labels and keyboard navigation
- **Cross-browser** - Works in all modern browsers

## Development Features

### Theme System Implementation
- **CSS Variables** - Defined in `globals.css` for consistent theming
- **Context API** - React Context for global theme state
- **Local Storage** - Persistent theme preferences
- **Hydration Safe** - Prevents SSR/CSR mismatches

### Component Architecture
- **Modular Design** - Reusable components with TypeScript interfaces
- **State Management** - Local state for component configuration
- **Event Handling** - Proper React event handlers
- **Error Handling** - Graceful error handling and fallbacks

## Deployment

The application can be deployed to various platforms:

- **Vercel:** Recommended for Next.js applications
- **Netlify:** Alternative deployment option
- **Self-hosted:** Any Node.js hosting environment

## Database Schema

The application uses the following database schema:

### Puzzle Model
```prisma
model Puzzle {
  id               Int      @id @default(autoincrement())
  title            String
  description      String
  timeLimitSeconds Int?
  isActive         Boolean  @default(true)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}
```

### Escape Room Model
```prisma
model EscapeRoom {
  id          String   @id
  name        String
  description String
  timerMinutes Int     @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  questions   Question[]
}

model Question {
  id           String     @id
  escapeRoomId String
  name         String
  description  String
  challenge    String
  hint         String
  answer       String
  codeExample  String
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
  escapeRoom   EscapeRoom @relation(fields: [escapeRoomId], references: [id], onDelete: Cascade)
}
```

## Testing

The application includes comprehensive testing:

### E2E Tests
- **API Testing** - Full CRUD operations for puzzles
- **Database Testing** - Safe database reset between tests
- **Integration Testing** - End-to-end workflow testing

### Test Commands
```bash
# Run all tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Run linting
npm run lint
```

## Future Enhancements

### Planned Features
- **Additional Components** - Accordion, Modal, Carousel components
- **Advanced Styling** - More customization options
- **Template Library** - Pre-built component templates
- **User Accounts** - Save and share component configurations
- **Collaboration** - Team-based component development
- **Real-time Collaboration** - Live editing with multiple users
- **Advanced Analytics** - Usage tracking and insights

## Contributing

This is an assignment project for CSE5006. For educational purposes only.

## License

This project is created for educational purposes as part of the CSE5006 course at La Trobe University.

## Contact

For questions about this project, please refer to your course instructor or teaching materials.

---

**Last Updated:** October 2025
**Version:** 2.0.0
**Status:** Production Ready with Database Integration

## Changelog

### Version 2.0.0 (October 2025)
- ✅ Added Escape Room Builder with full CRUD operations
- ✅ Integrated SQLite database with Prisma ORM
- ✅ Implemented RESTful API endpoints
- ✅ Added comprehensive Playwright E2E testing
- ✅ Enhanced data persistence with local storage backup
- ✅ Improved error handling and user experience
- ✅ Added database schema and migrations
- ✅ Implemented Zod validation for API endpoints
- ✅ Enhanced project structure and documentation

### Version 1.0.0 (August 2025)
- ✅ Initial release with tab component generator
- ✅ Theme switching functionality
- ✅ HTML5 code export
- ✅ MOODLE LMS integration
- ✅ Responsive design

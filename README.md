# LTU MOODLE LMS Components Application

A Next.js web application designed to create and export interactive HTML5 components for deployment on MOODLE Learning Management System (LMS).

## Student Information
- **Student Name:** Pasan Jayarathna
- **Student Number:** 21963056
- **Course:** CSE5006 - Web Application Development
- **Institution:** La Trobe University (LTU)
- **Assignment:** Assignment 1 - MOODLE LMS Components

## Project Overview

This application provides a comprehensive HTML5 component generator specifically designed for MOODLE LMS deployment. The main focus is on creating interactive tab components with customizable styling and seamless export functionality.

## Current Features

### ✅ Implemented Components

- **Interactive Tabs Component** - Dynamic tab creation with custom titles and content
- **HTML5 Code Generator** - Complete HTML5 document generation with inline CSS
- **Custom Color Configuration** - Primary, secondary, and background color pickers
- **Export to HTML/JS** - Download functionality for generated code
- **MOODLE LMS Integration** - Designed specifically for MOODLE deployment
- **Responsive Design** - Works on all screen sizes
- **Dark/Light Theme Support** - Full theme switching functionality

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
- **State Management:** React Context API
- **Theme System:** Custom CSS Variables

## Features

### Core Functionality
- **Component Generator** - Create custom tab components
- **Real-time Preview** - See changes as you type
- **Code Export** - Generate complete HTML5 documents
- **Copy to Clipboard** - Easy code copying functionality
- **Download HTML** - Direct file download capability

### User Experience
- **Intuitive Interface** - Clean, modern design
- **Theme Switching** - Light/dark mode support
- **Responsive Design** - Works on desktop and mobile
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized with Next.js 15

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CWA_Assignment1-1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
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

### Theme Switching

- **Toggle Theme** - Use the sun/moon toggle in the header
- **Automatic Save** - Theme preference is remembered
- **Smooth Transitions** - All elements animate between themes

## Project Structure

```
CWA_Assignment1-1/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── components/        # Tabs component generator
│   ├── coding-races/      # Coding races page
│   ├── court-room/        # Court room page
│   ├── escape-room/       # Escape room page
│   ├── pre-lab/           # Pre-lab questions page
│   ├── components/        # Reusable components
│   │   ├── Footer.tsx     # Footer component
│   │   ├── header.tsx     # Header with navigation
│   │   ├── ThemeToggle.tsx # Theme toggle switch
│   │   └── VideoTutorial.tsx # Video tutorial component
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── utils/             # Utility functions
│   │   └── cookies.ts     # Local storage utilities
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
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

## Future Enhancements

### Planned Features
- **Additional Components** - Accordion, Modal, Carousel components
- **Advanced Styling** - More customization options
- **Template Library** - Pre-built component templates
- **User Accounts** - Save and share component configurations
- **Collaboration** - Team-based component development

## Contributing

This is an assignment project for CSE5006. For educational purposes only.

## License

This project is created for educational purposes as part of the CSE5006 course at La Trobe University.

## Contact

For questions about this project, please refer to your course instructor or teaching materials.

---

**Last Updated:** December 2024
**Version:** 1.0.0
**Status:** Active Development

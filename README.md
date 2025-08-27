# LTU MOODLE LMS Components Application

A Next.js web application designed to create and export interactive HTML5 components for deployment on MOODLE Learning Management System (LMS).

## Student Information
- **Student Name:** Pasan Jayarathna
- **Student Number:** 21963056
- **Course:** CSE5006 - Web Application Development
- **Institution:** La Trobe University (LTU)
- **Assignment:** Assignment 1 - MOODLE LMS Components

## Project Overview

This application provides a comprehensive set of interactive HTML5 components that can be easily deployed on MOODLE LMS. The components are designed to enhance the learning experience with modern web technologies.

## Available Components

The application includes the following HTML5 components:

- **Carousel** - Interactive image carousel with navigation controls
- **Tabs** - Content organization with tabbed interface
- **Accordion** - Collapsible content sections
- **Modal/Popup** - Overlay dialog boxes for user interaction
- **Dropdown** - Expandable menu components
- **Tooltip** - Hover information displays
- **Progress Bar** - Visual progress indicators
- **Range Slider** - Interactive input sliders
- **Date Picker** - Date selection components
- **Alerts** - User notification components
- **Lightbox** - Image gallery overlays
- **Canvas** - HTML5 canvas elements
- **CSS Animations** - Rotating and animated elements
- **Mermaid** - Diagram and flowchart support

## Technology Stack

- **Frontend Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Turbopack
- **Package Manager:** npm

## Features

- Modern, responsive design
- Component library with code examples
- Copy-to-clipboard functionality
- Export-ready HTML and CSS code
- MOODLE LMS compatibility
- Cross-browser support
- Mobile-responsive components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd assignment1
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

1. **Browse Components:** Navigate through the available interactive components
2. **Customize:** Modify component properties and styling as needed
3. **Preview:** Test components in real-time before deployment
4. **Export:** Generate HTML and JavaScript code for MOODLE LMS
5. **Deploy:** Copy the generated code into your MOODLE course

## Project Structure

```
assignment1/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── components/        # Components showcase page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Deployment

The application can be deployed to various platforms:

- **Vercel:** Recommended for Next.js applications
- **Netlify:** Alternative deployment option
- **Self-hosted:** Any Node.js hosting environment

## MOODLE LMS Integration

To use components in MOODLE:

1. Copy the HTML code from the component page
2. Paste it into your MOODLE page using HTML source editor
3. Add the CSS code to your MOODLE theme or page
4. Include any required JavaScript functionality
5. Test the component in your MOODLE environment

## Contributing

This is an assignment project for CSE5006. For educational purposes only.

## License

This project is created for educational purposes as part of the CSE5006 course at La Trobe University.

## Contact

For questions about this project, please refer to your course instructor or teaching materials.

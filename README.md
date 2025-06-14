# DeMont Selected Program Page

A responsive web application built with React and Tailwind CSS that recreates the "Selected Program" page from the DeMont Institute of Management & Technology website.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd demont-selected-program
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📋 Project Overview

### Focus Areas

1. **Pixel-Perfect Desktop Implementation**: Carefully recreated the desktop layout matching the Figma prototype, including:
   - Navigation header with dropdown menus
   - Hero section with program details
   - Program cards with hover effects
   - Partner logos section
   - Footer with contact information

2. **Responsive Design**: Implemented mobile-first responsive design using Tailwind's breakpoint system:
   - Mobile navigation with hamburger menu
   - Stacked layouts for program cards on smaller screens
   - Optimized spacing and typography for mobile devices
   - Touch-friendly interactive elements

3. **Interactions & Animations**: Added smooth transitions and hover effects:
   - Card hover states with shadow effects
   - Button hover animations
   - Smooth dropdown menu transitions
   - Mobile menu slide-in animation

4. **Component Architecture**: Built modular, reusable components:
   - `Header` - Navigation with responsive menu
   - `ProgramCard` - Reusable card component for programs
   - `PartnerLogos` - Partner logo showcase
   - `Footer` - Contact information and links

### Technical Decisions

- **Vite**: Chosen for its fast development experience and minimal configuration
- **Tailwind CSS**: Used for rapid styling with excellent responsive utilities
- **Component Structure**: Organized components in a flat structure for simplicity
- **Custom Hooks**: Created `useResponsive` hook for handling mobile/desktop logic

### Assumptions Made

1. **Color Scheme**: Extracted colors from the Figma prototype:
   - Primary Blue: `#1e3a5f` (navy blue)
   - Accent Orange: `#f5a623`
   - Text colors and grays as shown in design

2. **Mobile Navigation**: Since mobile design wasn't provided, I implemented a standard hamburger menu pattern

3. **Content**: Used placeholder text where actual content wasn't clearly visible in the Figma prototype

4. **Partner Logos**: Used placeholder logos as the actual logos weren't provided

### Challenges & Solutions

1. **Dropdown Menus**: Implemented custom dropdown behavior with proper keyboard navigation and accessibility
2. **Responsive Images**: Ensured all images scale properly across devices
3. **Mobile Menu**: Created a slide-out mobile menu that doesn't affect desktop layout

### Figma Inconsistencies Noted

1. Some text content in the cards appears to be cut off in the prototype
2. Hover states weren't clearly defined for all interactive elements
3. The exact spacing measurements weren't always consistent between similar elements

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design Decisions

- Used Tailwind's default spacing scale for consistency
- Implemented a 12-column grid system for the desktop layout
- Added subtle animations to enhance user experience without being distracting
- Ensured all interactive elements have clear focus states for accessibility

## 📂 Project Structure

```
demont-selected-program/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProgramCard.jsx
│   │   ├── PartnerLogos.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useResponsive.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚦 Future Improvements

- Add unit tests for components
- Implement internationalization (i18n)
- Add loading states for dynamic content
- Optimize images with lazy loading
- Add more detailed accessibility features

## 📄 License

This project is created for demonstration purposes.
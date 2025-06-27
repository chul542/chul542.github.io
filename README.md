# Mincheol's Portfolio - React Version

This is a React + TypeScript + Vite version of Mincheol's portfolio website, converted from the original HTML/CSS/JavaScript version.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Component-Based Structure**: Reusable components for better maintainability
- **Responsive Design**: Bootstrap-based responsive layout
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **Type Safety**: Full TypeScript support
- **Performance Optimized**: Vite for fast development and building

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Bootstrap 5, Custom CSS
- **Animations**: AOS (Animate On Scroll)
- **Routing**: React Router DOM
- **Icons**: Ionicons, Flaticon, Icomoon

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── SectionHeader.tsx
│   │   └── ContactInfo.tsx
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── TechStack.tsx     # Tech stack section
│   ├── WorkExperience.tsx # Work experience section
│   ├── ResearchExperience.tsx # Research experience section
│   ├── Education.tsx     # Education section
│   ├── LanguageSkills.tsx # Language skills section
│   ├── OtherExperience.tsx # Other experience section
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer component
│   └── Loader.tsx        # Loading spinner
├── css/                  # CSS files
├── App.tsx              # Main app component
└── main.tsx             # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clark-react
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Component Structure

The project uses a modular component structure:

- **Common Components**: Reusable components in `src/components/common/`
- **Page Components**: Main section components
- **Layout Components**: Navbar, Footer, Loader

### Styling

- Bootstrap 5 for responsive grid and components
- Custom CSS files in `src/css/`
- Icon fonts: Ionicons, Flaticon, Icomoon

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
Main colors are defined in the CSS variables in `src/css/style.css`

### Content
Update the content in each component file to match your information

### Styling
Modify the CSS files in `src/css/` to customize the appearance

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For any questions or issues, please contact:
- Email: mincheol.galaxy@gmail.com
- Website: chul542.github.io 
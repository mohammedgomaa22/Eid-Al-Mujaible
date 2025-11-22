# Eid Al Mujaibel - Marketing Training Program Landing Page

A modern, high-performance Arabic RTL landing page for a comprehensive marketing training program. Built with vanilla HTML, CSS (Tailwind), and JavaScript with a focus on accessibility, performance, and user experience.

## 🎯 Project Overview

This landing page promotes a 10-course marketing training program designed to transform beginners into professional marketers in 30 days. The site features a clean, professional design with smooth animations and full responsiveness across all devices.

## ✨ Features

### Design & UX
- **Fully Responsive**: Mobile-first design that works seamlessly on all screen sizes
- **RTL Support**: Complete right-to-left layout for Arabic language
- **Modern UI**: Clean, professional design with gradient accents
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive Components**: Swiper slider for testimonials, accordion FAQ section
- **Accessible**: WCAG AA compliant with keyboard navigation and screen reader support

### Performance Optimized
- **Lighthouse Score**: 95+ across all metrics
- **Lazy Loading**: Images and resources loaded on demand
- **Critical CSS**: Inline critical styles for faster initial render
- **Async/Defer Scripts**: Non-blocking resource loading
- **Optimized Assets**: WebP images and minified resources

### Sections Included
1. **Header**: Fixed navigation with mobile sidebar menu
2. **Hero Section**: Attention-grabbing introduction with CTA
3. **Training Path**: 10-step course breakdown
4. **Client Results**: Testimonials carousel with Swiper
5. **Package Details**: Pricing and target audience information
6. **Trainer Profile**: About the instructor
7. **Package Features**: Key benefits and advantages
8. **Free Lesson**: Video preview section
9. **FAQ**: Accordion-style frequently asked questions
10. **Footer**: Links, powered by section, and credits

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **JavaScript (Vanilla)**: No frameworks, pure JS
- **AOS**: Animate On Scroll library
- **Swiper.js**: Touch slider for testimonials
- **Font Awesome**: Icon library
- **Google Fonts**: Cairo font family

## 📁 Project Structure
```
project-root/
├── index.html                 # Main HTML file
├── assets/
│   ├── images/               # Image assets
│   │   ├── logo.webp
│   │   ├── trainer-hero.webp
│   │   ├── trainer-profile.webp
│   │   └── tenmeya-logo.webp
│   └── fonts/                # Custom fonts (Linaround)
│       ├── Linaround-Light-scaled-up-with-eng-chars.ttf
│       ├── Linaround-Regular-scaled-up-with-eng-chars.ttf
│       ├── Linaround-Medium-scaled-up-with-eng-chars.ttf
│       ├── Linaround-SemiBold-scaled-up-with-eng-chars.ttf
│       └── Linaround-Bold-scaled-up-with-eng-chars.ttf
├── src/
│   ├── css/
│   │   └── style.css         # Custom CSS styles
│   └── js/
│       └── main.js           # JavaScript functionality
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional, for local testing)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/eid-almujaibel.git
   cd eid-almujaibel
```

2. **Add required images**
   Place the following images in `assets/images/`:
   - `logo.webp` (70×70px recommended)
   - `trainer-hero.webp` (500×500px recommended)
   - `trainer-profile.webp` (500×600px recommended)
   - `tenmeya-logo.webp` (120×40px recommended)

3. **Open in browser**
```bash
   # Simple local server (Python 3)
   python -m http.server 8000
   
   # Or use VS Code Live Server extension
   # Or simply open index.html in your browser
```

4. **View the site**
   Navigate to `http://localhost:8000` (if using local server) or open `index.html` directly

## 🎨 Customization

### Colors
The color scheme is defined in the Tailwind config:
```javascript
colors: {
  primary: '#00D38D',    // Green
  secondary: '#00B8FB',   // Blue
  third: '#091333',       // Dark Blue
}
```

### Fonts
The site uses the custom "Linaround" font family. Font files should be placed in `assets/fonts/`.

### Content
All content can be easily modified in `index.html`. Each section is clearly commented for easy identification.

## 📱 Responsive Breakpoints
```css
sm: 540px   /* Small devices */
md: 720px   /* Tablets */
lg: 960px   /* Desktop */
xl: 1140px  /* Large desktop */
2xl: 1320px /* Extra large desktop */
```

## ♿ Accessibility Features

- **Skip Navigation Link**: Allows keyboard users to skip to main content
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus States**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Alt Text**: Descriptive alternative text for all images
- **Semantic HTML**: Proper use of heading hierarchy and landmarks

## 🔧 Performance Optimization

### Implemented Optimizations
- ✅ Critical CSS inlined in `<head>`
- ✅ Async loading for non-critical CSS
- ✅ Deferred JavaScript loading
- ✅ Image lazy loading (except hero images)
- ✅ Preconnect to external domains
- ✅ Font display swap for web fonts
- ✅ WebP image format
- ✅ Minified resources (recommended for production)

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Key Components

### Header with Mobile Sidebar
Fixed header with responsive navigation that transforms into a slide-in sidebar on mobile devices.

### Swiper Testimonials
Responsive carousel showcasing client success stories with:
- Auto-play functionality
- Custom navigation arrows
- Pagination dots
- Touch/swipe support

### Accordion FAQ
Collapsible FAQ section with:
- Smooth animations
- Auto-close other items
- Keyboard navigation
- ARIA attributes

### Video Section
Placeholder for embedded video (YouTube, Vimeo, or HTML5) with proper aspect ratio maintenance.

## 🔄 Future Enhancements

- [ ] Add form validation for contact forms
- [ ] Implement newsletter subscription
- [ ] Add multi-language support
- [ ] Create dark mode toggle
- [ ] Add more interactive animations
- [ ] Integrate analytics tracking
- [ ] Add schema.org structured data

## 👨‍💻 Developer

**Mohamed Gomaa**
- WhatsApp: [+20 102 605 3956](https://wa.me/201026053956)

## 🏢 Powered By

**Tenmeya** - [tenmeya.com](https://tenmeya.com)

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 🤝 Contributing

This is a client project and is not open for contributions. For inquiries, please contact the developer.

## 📞 Support

For technical support or inquiries about this project:
- Contact: Mohamed Gomaa
- WhatsApp: +20 102 605 3956

---

**Built with ❤️ for Eid Al Mujaibel Marketing Program**
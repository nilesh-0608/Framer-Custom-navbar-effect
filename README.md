# 🚀 CustomNavbarEffects

A professional, lightweight JavaScript library that provides smooth scroll-based animations for navbar elements. Built with modern ES6+ features and optimized for performance.

## 🌐 Live Demo & Repository

**🔗 [View Live Demo](https://active-statuses-866899.framer.app/)**

**📁 [GitHub Repository](https://github.com/nilesh-0608/Framer-Custom-navbar-effect)**

Experience the smooth navbar animations in action on our live demo site and explore the source code on GitHub.

## ✨ Features

- 🎯 **Scroll Direction Detection** - Intelligently detects scroll direction
- ⚡ **Performance Optimized** - Uses passive event listeners and element caching
- 🎨 **Smooth Animations** - CSS transitions with customizable duration
- 📱 **Responsive Design** - Automatically handles window resize events
- 🛡️ **Error Handling** - Comprehensive error handling and validation
- 🔧 **Configurable** - Easy customization of selectors and behavior
- 📚 **Well Documented** - Complete JSDoc documentation
- 🧹 **Memory Safe** - Proper cleanup methods to prevent memory leaks

## 🎬 Screenshots

### Structure in Framer for navbar - Name should be same as Image
![Structure in Framer for navbar](https://raw.githubusercontent.com/nilesh-0608/Framer-Custom-navbar-effect/refs/heads/main/custom-navbar-structure.png)


## 🚀 Quick Start

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>CustomNavbarEffects Demo</title>
</head>
<body>
    <!-- Your navbar HTML with proper Framer component names -->
    <nav data-framer-name="Main Navbar">
        <div data-framer-name="Side padding (Color)"></div>
        <div data-framer-name="Navbar Main Section">
            <div data-framer-name="Logo">Your Logo</div>
            <div data-framer-name="Nav Items">
                <div data-framer-name="Nav Menu">Home</div>
                <div data-framer-name="Nav Menu">About</div>
                <div data-framer-name="Nav Menu">Services</div>
                <div data-framer-name="Nav Menu">Contact</div>
            </div>
            <div data-framer-name="CTA Container">
                <div data-framer-name="Primary Button">Get Started</div>
                <div data-framer-name="Hamburger">☰</div>
            </div>
        </div>
        <div data-framer-name="Side padding (Color)"></div>
    </nav>

    <!-- Add the script at the end of body tag -->
    <script>
        // Copy and paste the CustomNavbarEffects class code here
        // The script will auto-initialize
        // window.CustomNavbarEffects is available globally
    </script>
</body>
</html>
```

### Advanced Configuration

```javascript
// Custom configuration
const navbarEffects = new CustomNavbarEffects({
    containerSelector: '[data-framer-name="Main Navbar"]',
    navbarMainSectionSelector: '[data-framer-name="Navbar Main Section"]',
    navbarItemsSectionSelector: '[data-framer-name="Nav Items"]',
    scrollThreshold: 20,           // Minimum scroll distance to trigger
    transitionDuration: 300        // Animation duration in ms
});

// Update configuration at runtime
navbarEffects.updateConfig({
    scrollThreshold: 15,
    transitionDuration: 250
});

// Get current state
const state = navbarEffects.getScrollState();
console.log('Is scrolling up:', state.isScrollingUp);

// Clean up when done
navbarEffects.destroy();
```

## 📋 Requirements

### HTML Structure

Your navbar must have the following data attributes that match your Framer component names:

```html
<nav data-framer-name="Main Navbar">
    <div data-framer-name="Side padding (Color)"></div>
    <div data-framer-name="Navbar Main Section">
        <div data-framer-name="Logo">Your Logo</div>
        <div data-framer-name="Nav Items">
            <div data-framer-name="Nav Menu">Menu Item 1</div>
            <div data-framer-name="Nav Menu">Menu Item 2</div>
            <div data-framer-name="Nav Menu">Menu Item 3</div>
            <div data-framer-name="Nav Menu">Menu Item 4</div>
        </div>
        <div data-framer-name="CTA Container">
            <div data-framer-name="Primary Button">Button</div>
            <div data-framer-name="Hamburger">☰</div>
        </div>
    </div>
    <div data-framer-name="Side padding (Color)"></div>
</nav>
```

### Required Elements

- `[data-framer-name="Main Navbar"]` - Main container
- `[data-framer-name="Navbar Main Section"]` - Main section wrapper
- `[data-framer-name="Nav Items"]` - Navigation items container
- `[data-framer-name="Side padding (Color)"]` - Side padding elements (left and right)

### Optional Elements

- `[data-framer-name="CTA Container"]` - CTA button container
- `[data-framer-name="Logo"]` - Logo container
- `[data-framer-name="Nav Menu"]` - Individual navigation menu items
- `[data-framer-name="Primary Button"]` - Primary button in CTA container
- `[data-framer-name="Hamburger"]` - Hamburger menu icon

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `containerSelector` | string | `'[data-framer-name="Main Navbar"]'` | Main navbar container selector |
| `navbarMainSectionSelector` | string | `'[data-framer-name="Navbar Main Section"]'` | Main section selector |
| `navbarItemsSectionSelector` | string | `'[data-framer-name="Nav Items"]'` | Nav items container selector |
| `ctaBtnContainerSelector` | string | `'[data-framer-name="CTA Container"]'` | CTA container selector |
| `logoContainerSelector` | string | `'[data-framer-name="Logo"]'` | Logo container selector |
| `scrollThreshold` | number | `10` | Minimum scroll distance to trigger effects |
| `transitionDuration` | number | `200` | Animation duration in milliseconds |

## 🎯 API Reference

### Constructor

```javascript
new CustomNavbarEffects(options)
```

### Methods

#### `updateConfig(newConfig)`
Update configuration options at runtime.

```javascript
navbarEffects.updateConfig({
    scrollThreshold: 20,
    transitionDuration: 300
});
```

#### `getScrollState()`
Get current scroll state information.

```javascript
const state = navbarEffects.getScrollState();
// Returns: { lastScrollY: 0, isScrollingUp: false, isInitialized: true }
```

#### `getConfig()`
Get current configuration.

```javascript
const config = navbarEffects.getConfig();
// Returns: { containerSelector: '...', scrollThreshold: 10, ... }
```

#### `destroy()`
Clean up event listeners and reset state.

```javascript
navbarEffects.destroy();
```

## 🎨 CSS Classes

The library adds the following CSS classes to the navbar container:

- `.scroll-up` - Applied when scrolling up (navbar visible)
- `.scroll-down` - Applied when scrolling down (navbar hidden)

You can style these classes for additional visual effects:

```css
[data-framer-name="Main Navbar"].scroll-up {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

[data-framer-name="Main Navbar"].scroll-down {
    transform: translateY(-100%);
}
```

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📦 Installation

### Step 1: Copy the Script

Copy the entire `CustomNavbarEffects` class code from the source file.

### Step 2: Add to Your HTML

Add the script at the end of your `<body>` tag:

```html
<body>
    <!-- Your HTML content -->
    <nav data-framer-name="Main Navbar">
        <!-- Your navbar content -->
    </nav>

    <!-- Add the script at the end of body tag -->
    <script>
        // Paste the CustomNavbarEffects class code here
        // The script will auto-initialize
    </script>
</body>
```

### Step 3: Verify Setup

The script will automatically initialize and be available as `window.CustomNavbarEffects`.

## 🛠️ Development

### Project Structure

```
Framer-Custom-navbar-effect/
├── README.md                     # This documentation
└── test.html                    # Main implementation file
```

### Usage in Framer

1. **Clone the repository**: `git clone https://github.com/nilesh-0608/Framer-Custom-navbar-effect.git`
2. **Copy the script** from `test.html`
3. **Add to your Framer project** in the custom code section
4. **Ensure proper HTML structure** with required data attributes
5. **Test the functionality** by scrolling on your page

### Customization

You can modify the script directly in your HTML file or create a separate JavaScript file and include it.

## 🤝 Contributing

1. Fork the repository: [Fork Framer-Custom-navbar-effect](https://github.com/nilesh-0608/Framer-Custom-navbar-effect/fork)
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes to the script
4. Test your changes thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request: [Create Pull Request](https://github.com/nilesh-0608/Framer-Custom-navbar-effect/compare)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 🐛 Issues: [GitHub Issues](https://github.com/nilesh-0608/Framer-Custom-navbar-effect/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/nilesh-0608/Framer-Custom-navbar-effect/discussions)
- 📧 Contact: [GitHub Profile](https://github.com/nilesh-0608)

## 🙏 Acknowledgments

- Built for modern web applications
- Optimized for Framer-based projects
- Inspired by modern UX patterns

---

**Made with ❤️ for better web experiences**

[🔗 Live Demo](https://active-statuses-866899.framer.app/) | [📁 GitHub Repository](https://github.com/nilesh-0608/Framer-Custom-navbar-effect) | [🐛 Report Bug](https://github.com/nilesh-0608/Framer-Custom-navbar-effect/issues)

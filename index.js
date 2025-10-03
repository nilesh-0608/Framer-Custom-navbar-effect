
/**
 * CustomNavbarEffects - Professional navbar scroll effects implementation
 * Provides smooth scroll-based animations for navbar elements
 */
class CustomNavbarEffects {
  /**
   * @param {Object} options - Configuration options
   * @param {string} options.containerSelector - Main navbar container selector
   * @param {string} options.ctaBtnContainerSelector - CTA button container selector
   * @param {string} options.logoContainerSelector - Logo container selector
   * @param {string} options.navbarMainSectionSelector - Main navbar section selector
   * @param {string} options.navbarItemsSectionSelector - Nav items section selector
   * @param {number} options.scrollThreshold - Minimum scroll distance to trigger effects
   * @param {number} options.transitionDuration - Animation duration in milliseconds
   */
  constructor(options = {}) {
    this.config = {
      containerSelector: '[data-framer-name="Main Navbar"]',
      ctaBtnContainerSelector: '[data-framer-name="CTA Container"]',
      logoContainerSelector: '[data-framer-name="Logo"]',
      navbarMainSectionSelector: '[data-framer-name="Navbar Main Section"]',
      navbarItemsSectionSelector: '[data-framer-name="Nav Items"]',
      scrollThreshold: 10,
      transitionDuration: 200,
      ...options
    };

    this.elements = {};
    this.dimensions = {};
    this.scrollState = {
      lastScrollY: 0,
      isScrollingUp: false,
      isInitialized: false
    };

    this.boundScrollHandler = this.handleScroll.bind(this);
    this.boundResizeHandler = this.handleResize.bind(this);
    this.boundLoadHandler = this.handleLoad.bind(this);

    this.init();
  }

  /**
   * Initialize the navbar effects
   * @private
   */
  init() {
    try {
      this.cacheElements();
      this.setupTransitions();
      this.bindEvents();
      this.updateDimensions();
      this.scrollState.isInitialized = true;
    } catch (error) {
      console.error('CustomNavbarEffects initialization failed:', error);
    }
  }

  /**
   * Cache DOM elements for performance
   * @private
   */
  cacheElements() {
    this.elements = {
      container: document.querySelector(this.config.containerSelector),
      ctaBtnContainer: document.querySelector(this.config.ctaBtnContainerSelector),
      logoContainer: document.querySelector(this.config.logoContainerSelector),
      navbarMainSection: document.querySelector(this.config.navbarMainSectionSelector),
      navbarItemsSection: document.querySelector(this.config.navbarItemsSectionSelector)
    };

    // Validate required elements
    const requiredElements = ['container', 'navbarMainSection', 'navbarItemsSection'];
    const missingElements = requiredElements.filter(key => !this.elements[key]);
    
    if (missingElements.length > 0) {
      throw new Error(`Required elements not found: ${missingElements.join(', ')}`);
    }

    // Get parent container children for left/right empty elements
    const parentChildren = this.elements.navbarMainSection.parentElement.children;
    this.elements.leftEmpty = parentChildren.item(0);
    this.elements.rightEmpty = parentChildren.item(2);
  }

  /**
   * Setup CSS transitions for smooth animations
   * @private
   */
  setupTransitions() {
    const transitionStyle = `opacity ${this.config.transitionDuration}ms ease-in-out`;
    const widthTransitionStyle = `width ${this.config.transitionDuration}ms ease-in-out`;

    if (this.elements.navbarItemsSection) {
      this.elements.navbarItemsSection.style.transition = transitionStyle;
    }
    
    if (this.elements.leftEmpty) {
      this.elements.leftEmpty.style.transition = widthTransitionStyle;
    }
    
    if (this.elements.rightEmpty) {
      this.elements.rightEmpty.style.transition = widthTransitionStyle;
    }
  }

  /**
   * Bind event listeners
   * @private
   */
  bindEvents() {
    window.addEventListener('scroll', this.boundScrollHandler, { passive: true });
    window.addEventListener('resize', this.boundResizeHandler, { passive: true });
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this.boundLoadHandler);
    } else {
      this.handleLoad();
    }
  }

  /**
   * Update element dimensions
   * @private
   */
  updateDimensions() {
    if (this.elements.leftEmpty) {
      this.dimensions.leftEmptyWidth = this.elements.leftEmpty.offsetWidth;
      this.elements.leftEmpty.style.width = `${this.dimensions.leftEmptyWidth}px`;
    }
    
    if (this.elements.rightEmpty) {
      this.dimensions.rightEmptyWidth = this.elements.rightEmpty.offsetWidth;
      this.elements.rightEmpty.style.width = `${this.dimensions.rightEmptyWidth}px`;
    }
  }

  /**
   * Handle scroll events
   * @private
   */
  handleScroll() {
    if (!this.scrollState.isInitialized) return;

    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - this.scrollState.lastScrollY);
    
    // Only trigger if scroll distance exceeds threshold
    if (scrollDelta < this.config.scrollThreshold) return;

    const isScrollingUp = currentScrollY < this.scrollState.lastScrollY;
    
    // Always update state on first scroll or when direction changes
    this.updateNavbarState(isScrollingUp);

    this.scrollState.lastScrollY = currentScrollY;
  }

  /**
   * Update navbar visual state based on scroll direction
   * @param {boolean} isScrollingUp - Whether user is scrolling up
   * @private
   */
  updateNavbarState(isScrollingUp) {
    if (isScrollingUp) {
      this.showNavbar();
    } else {
      this.hideNavbar();
    }
  }

  /**
   * Show navbar elements
   * @private
   */
  showNavbar() {
    this.elements.container.classList.remove('scroll-down');
    this.elements.container.classList.add('scroll-up');
    
    if (this.elements.navbarItemsSection) {
      this.elements.navbarItemsSection.style.opacity = '1';
    }
    
    if (this.elements.leftEmpty && this.dimensions.leftEmptyWidth) {
      this.elements.leftEmpty.style.width = `${this.dimensions.leftEmptyWidth}px`;
    }
    
    if (this.elements.rightEmpty && this.dimensions.rightEmptyWidth) {
      this.elements.rightEmpty.style.width = `${this.dimensions.rightEmptyWidth}px`;
    }
  }

  /**
   * Hide navbar elements
   * @private
   */
  hideNavbar() {
    this.elements.container.classList.remove('scroll-up');
    this.elements.container.classList.add('scroll-down');
    
    if (this.elements.navbarItemsSection) {
      this.elements.navbarItemsSection.style.opacity = '0';
    }
    
    if (this.elements.leftEmpty) {
      this.elements.leftEmpty.style.width = '0px';
    }
    
    if (this.elements.rightEmpty) {
      this.elements.rightEmpty.style.width = '0px';
    }
  }

  /**
   * Handle window resize events
   * @private
   */
  handleResize() {
    this.updateDimensions();
  }

  /**
   * Handle page load events
   * @private
   */
  handleLoad() {
    this.updateDimensions();
    // Initialize scroll state with current position
    this.scrollState.lastScrollY = window.scrollY;
  }

  /**
   * Update configuration options
   * @param {Object} newConfig - New configuration options
   * @public
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    
    if (newConfig.transitionDuration) {
      this.setupTransitions();
    }
  }

  /**
   * Destroy the navbar effects and clean up event listeners
   * @public
   */
  destroy() {
    window.removeEventListener('scroll', this.boundScrollHandler);
    window.removeEventListener('resize', this.boundResizeHandler);
    document.removeEventListener('DOMContentLoaded', this.boundLoadHandler);
    
    this.scrollState.isInitialized = false;
  }

  /**
   * Get current scroll state
   * @returns {Object} Current scroll state information
   * @public
   */
  getScrollState() {
    return { ...this.scrollState };
  }

  /**
   * Get current configuration
   * @returns {Object} Current configuration
   * @public
   */
  getConfig() {
    return { ...this.config };
  }
}

// Initialize the navbar effects
window.CustomNavbarEffects = new CustomNavbarEffects();
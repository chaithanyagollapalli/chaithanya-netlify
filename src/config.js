module.exports = {
  email: 'chaitanyagcg.01@gmail.com',

  logo:
    'M 27.777 2.186 L 25.874 7.544 A 25.05 25.05 0 0 0 24.019 6.734 Q 23.003 6.342 22.067 6.098 A 13.921 13.921 0 0 0 19.958 5.729 A 18.365 18.365 0 0 0 18.119 5.64 A 11.715 11.715 0 0 0 13.839 6.419 A 11.262 11.262 0 0 0 13.501 6.557 A 10.388 10.388 0 0 0 9.8 9.2 Q 8.249 10.928 7.368 13.395 A 14.747 14.747 0 0 0 6.655 16.394 A 19.802 19.802 0 0 0 6.486 19.035 A 18.095 18.095 0 0 0 6.827 22.606 A 15.507 15.507 0 0 0 7.297 24.393 Q 8.108 26.861 9.588 28.729 Q 11.069 30.597 13.113 31.655 A 9.532 9.532 0 0 0 16.761 32.675 A 11.559 11.559 0 0 0 17.696 32.712 A 21.577 21.577 0 0 0 19.596 32.633 Q 21.089 32.501 22.278 32.148 A 17.692 17.692 0 0 0 24.236 31.432 Q 25.202 31.017 26.23 30.46 A 29.244 29.244 0 0 0 26.367 30.386 L 28.341 35.744 A 22.371 22.371 0 0 1 24.396 37.365 A 25.51 25.51 0 0 1 23.406 37.647 A 20.481 20.481 0 0 1 20.533 38.176 Q 19.096 38.341 17.488 38.351 A 33.503 33.503 0 0 1 17.273 38.352 A 19.026 19.026 0 0 1 13.104 37.912 A 15.701 15.701 0 0 1 10.152 36.942 Q 6.98 35.532 4.724 32.994 A 17.372 17.372 0 0 1 1.777 28.322 A 20.624 20.624 0 0 1 1.234 26.931 Q 0 23.406 0 19.176 Q 0 15.228 1.234 11.738 A 18.308 18.308 0 0 1 4.23 6.306 A 17.381 17.381 0 0 1 4.794 5.64 A 16.944 16.944 0 0 1 10.399 1.516 A 16.439 16.439 0 0 1 15.53 0.12 A 20.367 20.367 0 0 1 17.766 0 A 30.059 30.059 0 0 1 20.293 0.1 Q 21.513 0.204 22.575 0.413 A 16.324 16.324 0 0 1 23.265 0.564 Q 25.592 1.128 27.777 2.186 Z',
  
  logo_alphabet_g_position: 'translate(33.000000, 30.000000)',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/chaithanyagollapalli',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chaithanyaguptha/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Education',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

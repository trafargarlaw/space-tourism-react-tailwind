module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "lg:bg-/-desktop",
    "bg-/-mobile",
    "sm:bg-/-tablet",
    "lg:bg-/destination-desktop",
    "sm:bg-/destination-tablet",
    "bg-/destination-mobile",
    "lg:bg-/crew-desktop",
    "sm:bg-/crew-tablet",
    "bg-/crew-mobile",
    "lg:bg-/technology-desktop",
    "sm:bg-/technology-tablet",
    "bg-/technology-mobile",
    "bg-[url('/images/technology/image-space-capsule-landscape.jpg')]",
    "lg:bg-[url('/images/technology/image-space-capsule-portrait.jpg')]",
    "bg-[url('/images/technology/image-launch-vehicle-landscape.jpg')]",
    "lg:bg-[url('/images/technology/image-launch-vehicle-portrait.jpg')]",
    "bg-[url('/images/technology/image-spaceport-landscape.jpg.jpg')]",
    "lg:bg-[url('/images/technology/image-spaceport-portrait.jpg')]",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: "#0B0D17",
        primaryLightBlue: "#D0D6F9",
      },
      backgroundImage: {
        "/-desktop": "url('/images/home/background-home-desktop.jpg')",
        "/-mobile": "url('/images/home/background-home-mobile.jpg')",
        "/-tablet": "url('/images/home/background-home-tablet.jpg')",
        "/destination-desktop":
          "url('/images/destination/background-destination-desktop.jpg')",
        "/destination-tablet":
          "url('/images/destination/background-destination-tablet.jpg')",
        "/destination-mobile":
          "url('/images/destination/background-destination-mobile.jpg')",
        "/crew-desktop": "url('/images/crew/background-crew-desktop.jpg')",
        "/crew-tablet": "url('/images/crew/background-crew-tablet.jpg')",
        "/crew-mobile": "url('/images/crew/background-crew-mobile.jpg')",
        "/technology-desktop":
          "url('/images/technology/background-technology-desktop.jpg')",
        "/technology-tablet":
          "url('/images/technology/background-technology-tablet.jpg')",
        "/technology-mobile":
          "url('/images/technology/background-technology-mobile.jpg')",
      },
      fontSize: {
        space: "clamp(5rem, 3.4595rem + 6.5728vw, 9.375rem)",
        "planet-name": "clamp(3.5rem, 2.5317rem + 4.1315vw, 6.25rem)",
        "planet-description":
          "clamp(0.9375rem, 0.8715rem + 0.2817vw, 1.125rem)",
        "sub-heading": "clamp(1rem, 0.7359rem + 1.1268vw, 1.75rem);",
        Explore: "clamp(1.25rem, 0.9859rem + 1.1268vw, 2rem)",
        "astronaute-name": "clamp(1.625rem, 0.9648rem + 2.8169vw, 3.5rem)",
        "astronaute-title": "clamp(1rem, 0.6479rem + 1.5023vw, 2rem)",
      },
    },

    fontFamily: {
      heading: "Bellefair, serif",
      body: `Barlow Condensed, sans-serif`,
      barlow: `Barlow, sans-serif`,
    },
    boxShadow: {
      explore: "0 0 0 88px #9797971A",
    },
  },
  plugins: [],
};

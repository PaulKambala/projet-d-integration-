// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**", // Autorise toutes les images provenant de ce domaine
        },
      ],
    },
  };
  
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: " #285366",
        Griclair:" #333333",
        grisvif:" #E5E7EB",
       GrandTitre: " #311B92",
       orangeclaire:" #FFA500",
       orangefonce:"	#FF8C00"
      },
    },
  },
  plugins: [],
}


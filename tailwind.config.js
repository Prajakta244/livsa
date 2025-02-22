/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	backgroundImage: {
  		primaryGrad: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(46,196,182,1) 100%, rgba(2,0,36,1) 100%)'
  	},
  	extend: {
  		colors: {
  			primary: '#2EC4B6',
  			primary_lightest: '#DFF8F6',
  			primary_lighter: '#A6ECE7',
  			primary_light: '#6AD9CF',
  			primary_dark: '#28A399',
  			primary_darker: '#217F78',
  			primary_darkest: '#185C56'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens:{
			'1084':'1084px',
			'1220':'1220px'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  compilerOptions: {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
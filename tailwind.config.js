module.exports = {  
  content: [   
        "./pages/**/*.{js,ts,jsx,tsx}",   
        "./components/**/*.{js,ts,jsx,tsx}", 
        "./pages/components/**/*.{js,ts,jsx,tsx}", 
         ],
  theme: {
         extend: {
                fontFamily: {
                  'sans': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
                  'serif': ['Plus Jakarta Display', 'ui-serif', 'Georgia'],
                  'mono': ['Plus Jakarta Mono', 'ui-monospace', 'SFMono-Regular'],
                },

         },
         },  
  plugins: [
       require('tailwind-scrollbar-hide'),
  ], 
}


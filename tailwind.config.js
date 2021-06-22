module.exports = {
  theme: {
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '992px',
      'lg': '1200px'
    },
    colors: {
      background: '#f7f8f9',
      white: '#ffffff',
      darkblue: '#0a163a',
      lightbluebackground: '#f0f6ff',
      lightbluetext: '#72a9ff',
      lightgrey: '#f1f3f4',
      darkgrey: '#c0c9d9',
      blue: '#2178ff',
      lightblue: '#6ca3f8',
      orange: '#febf68',
      inputgrey: '#dadfe5',
      green: '#b9e986',
      red: '#d73f49',
      inputlabel: '#929bb5',
      blueline: '#90bafa',
      pink: '#ff507b',
      aqua: '#69f6fe',
      lightgreen: '#adff2f',
      darkgreen: '#27d827',
      purple: '#ee8ffa',
      bluegrey: '#424a67',
      greybackground: '#f9fafa',
      greybackgroundtext: '#8c95b1',
      quizincorrectpink: '#e3787e',
      quizcorrectgreen: '#cdefaa',
      quizunattempted: '#72e3ca',
      slategrey: '#708090',
      backgroundblue: '#c5dbf2',
      darkblue: '#1a202c'
    }
  },
  plugins: [
    require('tailwindcss-gradients')({
      variants: ['responsive'],
      directions: {
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      gradients: {
        'blue': ['#6ca3f8', '#297cfd'],
        'orange': ['#f65335', '#fd8f18']
      }
    })
  ],
}

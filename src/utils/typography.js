import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Domine',
      styles: ['400', '600'],
    },
    {
      name: 'Maven Pro',
      styles: ['400'],
    }
  ],
  headerFontFamily: ['Domine', 'serif'],
  bodyFontFamily: ['Maven Pro', 'sans-serif'],
  headerWeight: "600",
  bodyWeight: "400"
});

export default typography;

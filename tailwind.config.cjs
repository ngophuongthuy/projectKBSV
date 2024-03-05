const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        border_header:'#212121',
        text_header:'#5F5F5F',
        bg_header_buttom: '#696868',
        text_tab:'#FFFFFF',
        text_filter: '#D8D8D8',
        text_filter2: '#FBAF17',
        bg_filter: '#151515',
        bg_filter2: '#FBAF17',
        text_border1:'#939090',
        text_border2: '#D8D8D8',
        bg_border_filter: '#2E2E2E',
        color_yellow: '#FBAF17',
        bg_black:'#000000',
        bg_sidebar_table: '#151515',
        bg_table: '#212121',
        // bg_table2: '#FBAF17',
        text_table_laber: '#D8D8D8',
        border_checkbox: '#5F5F5F',
        text_buttom: '#533700',
        bg_buttom: '#252525',
        text_footer_sidebar:'#939090',
        hr : '#212121',
        bg_dialog: '#2E2E2E',
        bg_dialog2: '#212121',
        hr_dialog: '#3D3D3D',
        otp: '#2E2E2E',
        otp_input: '#151515' ,
        otp_border: '#939090',
        text_laber:'#939090',
        text: '#D8D8D8',
        checkbox_otp: '#8C949E',
        text_buttom_otp:'#FFFFFF',
        bg_buttom_acp:'#5F5F5F',
      }
    }
  },
  plugins: [
    createThemes(({ light, dark }) => ({
      light: light({
        primary: "white",
        secondary: "black",
      }),
      dark: dark({
        primary: "black",
        secondary: "white"
      }),
      oled: dark({
        primary: "gray",
        secondary: "white"
      })
    }))
  ]
};

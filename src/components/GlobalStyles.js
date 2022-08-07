import 'modern-normalize';
const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu',  sans-serif;
    height: '100vh';
    display: 'flex';
    font-size:'20px';
  }

  div{
    box-shadow: 0 4px 2px -2px gray;
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
  }

 a{
    text-decoration:none;
  }

  ul {
  list-style: none;
}
li{
  margin-right: 15px;
  margin-bottom: 10px;
}
`;
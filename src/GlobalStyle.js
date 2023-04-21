import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #AED7FC;
    color: #171717;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', 
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2 {
    color: #141414;
    text-align: center;
    font-family: 'Poppins', url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
  }
  h2{
    font-size: 40px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  ul {
    padding-inline-start: 0;
  }
`;
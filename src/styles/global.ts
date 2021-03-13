import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

:root {
  --white:${props => props.theme.color.white};
  --background:${props => props.theme.color.background};
  --gray-line:${props => props.theme.color.grayLine};
  --text:${props => props.theme.color.text};
  --text-highlight:${props => props.theme.color.textHighlight};
  --title:${props => props.theme.color.title};
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  body {
    background: var(--background);
    color: var(--title); 
  }
  body,
  input,
  textarea,
  button {
    font: 400 1rem "Inter", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
`
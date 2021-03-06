import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    title: string;

    color:{
      white: string;
      background: string;
  
      grayLine: string;
  
      text: string;
      textHighlight: string;
      title: string;
    }
  }
}
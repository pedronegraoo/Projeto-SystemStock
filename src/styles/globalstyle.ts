import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
      --backgroundColor: #131613;
      --backgroundColorFooter: #424C42;
      --backgroundColorLight: #f6f6f6;
      
      --color-black: #000;
      --color-white: #fff;
      --color-OffWhite: #ffffffde;
      --color-blue: #0AA9FF;
      --color-red: #EE4450;
      --color-green: #198754;
      --color-yellow: #ffc107;
      --color-card: #60695c;
      --color-input: #2E382E;

      --color-table: #2E382E;
      --color-toptable: #1C221C;

      
      --font-Anta: "Anta";
      --font-Oswald: "Oswald";
      --font-Barlow: "Barlow";
    }


    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /* color: #fff; */
    }
    
`;

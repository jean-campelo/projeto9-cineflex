import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;

    --color-header: #C3CFD9;
    --color-primary: #E8833A;
    --color-background-app: #FFFFFF;
    --color-background-top: #C3CFD9;
    --box-shadow-poster: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);

    --color-font: #293845;
    --font-primary: 'Roboto';

    --color-selected: #8DD7CF;
    --border-selected: 1px solid #1AAE9E;

    --color-spare: #C3CFD9;
    --border-spare: 1px solid #7B8B99;

    --color-occupied: #FBE192;
    --border-occupied: 1px solid #F7C52B;

    --color-message-sucess: #247A6B;
}
`;

export default GlobalStyles;
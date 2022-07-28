import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;

    --color-top-bar: #C3CFD9;
    --color-button: #E8833A;
    --color-background: #FFFFFF;
    --color-font: #293845;

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
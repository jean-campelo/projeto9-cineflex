import styled from "styled-components";

export default function Header () {
    return (
        <TopBar>
        CINEFLEX
        </TopBar>
    )
}

const TopBar = styled.main`
    width: 100vw;
    height: 66px;
    background-color: var(--color-background-top);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-size: 34px;
    position: fixed;
    top: 0;
    left: 0;
`
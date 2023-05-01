import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    html{
        min-height: 100%;
        background: var(--primary);
        scroll-behavior: smooth;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        color: var(--black);

        transition: all .15s ease-in-out;
    }
    :root{
        ${props => {
            const theme = props.theme;

            let append = '';
            Object.entries(theme).forEach(([prop, value]) => {
                append += `--${prop}:  ${value};`;
            });

            return append;
        }}
    }
`;
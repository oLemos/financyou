import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /*
        Utilizaremos a medida "rem" no lugar de "px". Pois a medida "rem", leva em conta o tamanho da fonte padrão do projeto.
        Agora, aqui no arquivo global iremos utilizar porcentagem, pois caso o usuário esteja utilizando opções de acessibilidade diferentes do padrão,
        como deixar os elementos maiores ou menores, a porcentagem seguirá esta opção do usuário.
    */
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    // Estes elementos por padrão não pegam a fonte da tag "body". Por isso estamos passando para todos eles aqui.
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    // Estilizando os modais por aqui porque existem poucos e todos com a mesma base
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{
        position: relative;

        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;

        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

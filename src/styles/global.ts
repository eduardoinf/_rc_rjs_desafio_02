import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }


    :focus-visible {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    }

    body {
      background: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['gray-900']};
      position: relative;
      overflow: none;
    }

    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      max-width: 70rem;
      margin: 0 auto;
      padding: 0 10px;
    }
`

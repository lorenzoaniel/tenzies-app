import { css } from 'styled-components';
 
const ButtonAnimation = () => css`
    &:hover{
        animation-name: buttonHover;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }

    &:active, &:visited{
        animation-name: buttonPress;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }

    @keyframes buttonPress{
        25%{
            transform: translateY(-0.05rem);
            box-shadow: 0rem 0.3rem 0.125rem 0rem rgba(0, 0, 0, 0.15) inset;
            filter: brightness(100%);
        }
        50%{
            transform: translateY(0rem);
            box-shadow: 0rem 0.4rem 0.125rem 0.05rem rgba(0, 0, 0, 0.20) inset;
            filter: brightness(95%);
        }
        75%{
            transform: translateY(0.05rem);
            box-shadow: 0rem 0.4rem 0.125rem 0.1rem rgba(0, 0, 0, 0.25) inset;
            filter: brightness(90%);
        }
        100%{
            transform: translateY(0.1rem);
            box-shadow: 0rem 0.3rem 0.125rem 0.15rem rgba(0, 0, 0, 0.30) inset;
            filter: brightness(85%);
        } 
    }

    @keyframes buttonHover{
        25%{
            transform: translateY(0rem);
            box-shadow: 0rem 0.3rem 0.125rem 0rem rgba(0, 0, 0, 0.15);
            filter: brightness(100%);
        }
        50%{
            transform: translateY(-0.02rem);
            box-shadow: 0rem 0.4rem 0.125rem 0.05rem rgba(0, 0, 0, 0.20);
            filter: brightness(105%);
        }
        75%{
            transform: translateY(-0.05rem);
            box-shadow: 0rem 0.4rem 0.125rem 0.1rem rgba(0, 0, 0, 0.25);
            filter: brightness(110%);
        }
        100%{
            transform: translateY(-0.1rem);
            box-shadow: 0rem 0.3rem 0.125rem 0.15rem rgba(0, 0, 0, 0.30);
            filter: brightness(115%);
        }
    }
`;

export default ButtonAnimation;
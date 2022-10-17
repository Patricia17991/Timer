import styled, { css } from 'styled-components';


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainer {
    variant: ButtonVariant;
}


const buttonVariants = {
    primary: 'puple',
    secondary : 'orange',
    danger: 'red',
    success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainer>`
     width: 100px;
     height: 40px;


    ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }}
`

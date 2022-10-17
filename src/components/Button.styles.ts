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
     border-radius: 4px;
     border: 0;
     margin: 8px;

     background-color: ${props => props.theme.primary};
     color: ${props => props.theme.blue};

   /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }}*/
`

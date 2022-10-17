import styled from 'styled-components';


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainer {
    variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainer>`
     width: 100px;
     height: 40px;
`

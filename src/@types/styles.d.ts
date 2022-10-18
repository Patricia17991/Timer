import 'styled-component';
import {defaultTheme} from '../styles/themes/default';


type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}//sobrescrevendo tipagens de uma bibloteca

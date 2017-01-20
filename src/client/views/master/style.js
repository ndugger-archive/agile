import Styled from 'styled-components';
import { Link } from 'react-router';

import * as Palette from '../../ui/palette';

export const App = Styled.section`
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${ Palette.grey };
    background: #EEE;
`;

export const Header = Styled.header`
    border-top: 28px solid ${ Palette.darkgrey };
`;

export const Nav = Styled.nav`
    display: flex;
    width: 100%;
    height: 52px;
    background: ${ Palette.grey };
`;

export const LogoLink = Styled(Link)`
    width: 88px;
    height: 52px;
    margin-right: 12px;
    background: ${ Palette.primary };
`;

export const PageLink = Styled(Link)`
    position: relative;
    height: 52px;
    margin: 0 12px;
    padding: 0 16px;
    line-height: 52px;
    font-weight: 100;
    font-size: 18px;
    text-decoration: none;
    color: ${ props => props[ 'data-active' ] ? Palette.primary : 'white' };

    &:hover {
        color: ${ Palette.primary };
    }

    &::before {
        content: '';
        position: absolute;
        right: 16px;
        bottom: 14px;
        left: 16px;
        display: block;
        border-bottom: 1px solid ${ props => props[ 'data-active' ] ? Palette.primary : 'transparent' };
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        margin-left: -12px;
        border-top: 8px solid ${ props => props[ 'data-active' ] ? Palette.grey : 'transparent' };
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
    }
`;

export const Page = Styled.main`
    padding: 20px 32px;
`;

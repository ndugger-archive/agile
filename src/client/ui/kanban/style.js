import Styled from 'styled-components';

import * as Palette from '../palette';

export const Kanban = Styled.section`
    display: flex;
`;

export const Column = Styled.div`
    flex: 1 1;
    padding: 10px 20px;
    font-size: 16px;
    color:${ Palette.grey };
    background: white;
    background-clip: padding-box;
    border-left: 5px solid transparent;

    &:first-of-type {
        background: none;
    }
`;

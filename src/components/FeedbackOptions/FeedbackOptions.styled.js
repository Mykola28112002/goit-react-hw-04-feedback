import styled from 'styled-components';

export const Button = styled.button`
    margin-top: ${p => p.theme.space[4]}px;
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    border: none;
    padding: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.space[5]}px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
`
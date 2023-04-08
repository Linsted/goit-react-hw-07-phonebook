import styled from '@emotion/styled'

export const Item = styled.li`
    display: flex;
    gap: 10px;
`

export const Button = styled.button`
     width: 100px;
     padding: 0px;

    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    cursor: pointer;
    :hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);}
`
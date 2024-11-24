import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 104px;
    color: ${(props) => props.theme["background"]};;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const ShowLocation = styled.p`
    background-color: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 6px;
    font-family: ${props => props.theme.Roboto};
    font-size: ${props => props.theme["Roboto-Title-S"]};
    padding: 8px;

    img{
        width: 19px;
    }
`
export const Cart = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["yellow-light"]};
    cursor: pointer;
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`
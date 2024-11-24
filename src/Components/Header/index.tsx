import { Cart, CartContainer, Container, ShowLocation } from "./styles";
import Icon from "../../Assets/Header/icon.svg"
import locationIcon from "../../Assets/Header/locationIcon.svg"
import CartIcon from "../../Assets/Header/cart_icon.svg"

export function Header(){
    return (
        <Container>
            <img src={Icon} alt="Icone" />

            <CartContainer>
                    <ShowLocation>
                        <img src={locationIcon} alt="" />
                        Porto Alegre, RS
                    </ShowLocation>
        
                    <Cart>
                        <img src={CartIcon} alt="Carrinho" />
                    </Cart>
            </CartContainer>
        </Container>
    )
}
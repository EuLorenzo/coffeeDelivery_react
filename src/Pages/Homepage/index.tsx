import { BackgroundContainer, Benefits, BenefitsContainer, ImageContainer, LandPageInfos, LandPageSection } from "./styles";
import CoffeeCup from "../../Assets/Homepage/coffee.png"
import CartIcon from "../../Assets/Homepage/Icons/cartIcon.svg"
import BoxIcon from "../../Assets/Homepage/Icons/boxIcon.svg"
import WatchIcon from "../../Assets/Homepage/Icons/watchIcon.svg"
import CoffeeIcon from "../../Assets/Homepage/Icons/coffeeIcon.svg"

export function HomePage(){
    return (
        <BackgroundContainer>
                <LandPageSection>
                    <LandPageInfos>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
    
                        <BenefitsContainer>
                            <Benefits>
                                <img src={CartIcon} alt="Cart" />
                                Compra simples e segura
                            </Benefits>
    
                            <Benefits>
                                <img src={BoxIcon} alt="Cart" />
                                Embalagem mantém o café intacto
                            </Benefits>
    
                            <Benefits>
                                <img src={WatchIcon} alt="Cart" />
                                Entrega rápida e rastreada
                            </Benefits>
    
                            <Benefits>
                                <img src={CoffeeIcon} alt="Cart" />
                                O café chega fresquinho até você
                            </Benefits>
    
                        </BenefitsContainer>
                    </LandPageInfos>    
                    <ImageContainer>
                        <img src={CoffeeCup} alt="" />
                    </ImageContainer>
                </LandPageSection>
        </BackgroundContainer>
    )
}
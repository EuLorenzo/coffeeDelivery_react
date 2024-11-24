import styled from "styled-components";
import LandPageBackground from "../../Assets/Homepage/background.png"

export const Container = styled.main`
    width: 1440px;
    margin: auto;
`

export const BackgroundContainer = styled.div`
    background-image: url(${LandPageBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
`

export const LandPageSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
    width: 1440px;
    margin: auto;
    height: 544px;
`

export const LandPageInfos = styled.div`
    width: 600px;

    h1{
        color: ${props => props.theme["base-title"]};
        line-height: 130%;
        font-size: ${props => props.theme["Baloo-Title-XL"]};
        margin-bottom: 16px;
    }

    h2{
        font-family: ${props => props.theme["Roboto"]};
        font-size: ${props => props.theme["Roboto-Title-L"]};
        font-weight: 400;
    }
`

export const BenefitsContainer = styled.div`
    margin-top: 66px;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 20px;
`

export const Benefits = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    font-family: ${props => props.theme.Roboto};
    font-size: ${props => props.theme["Roboto-Title-M"]};
    color: ${props => props.theme["base-text"]};
`

export const ImageContainer = styled.div`
    width: 476px;

    img{
        width: 100%;
    }
`

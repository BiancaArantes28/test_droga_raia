import React from 'react';
import styled from 'styled-components';
import CardComponent from '../../components/cards/CardComponent';

import DesktopResponsiveImg from '../../assets/imgs/desktop-responsive-design.png';
import TableResponsive from '../../assets/imgs/tablets-responsive-design.png';
import MobileResponsive from '../../assets/imgs/mobile-responsive-design.png';

const Section = styled.section`
    height: 350px;
    padding: 2.5%;
    width: 95%;
    @media screen and (max-width: 960px) {
        height: 425px;
        padding: 3.125%;
        width: 93.75%;
    }
    @media screen and (max-width: 768px) {
        background-color: #FCDA92;
        height: 380px;
        padding: 3.90625%;
        width: 92.1875%;
    }
    @media screen and (max-width: 480px) {
        background-color: #9C8CB9;
        margin: 0;
        padding: 0;
        width: 100%;
    }
`;

const ContainersComponent = () => {
    let contentDesktopResponsive = <React.Fragment>Quando pressionado o botão  <strong>Leia mais...</strong>  o restante da informação deverá aparecer em scroll down.</React.Fragment>
    let contentTabletResponsive = <React.Fragment>Quando pressionado o botão <strong>Leia mais...</strong> informação deverá aparecer completa em um popup na tela.</React.Fragment>
    let contentMobileResponsive = <React.Fragment>Quando pressionado o botão  <strong>Leia mais...</strong>  modifique o tema do site para blackfriday a seu gosto.</React.Fragment>
    
    return (
        <Section>
            <CardComponent 
                color={"#FE9481"} 
                margin
                img={DesktopResponsiveImg}
                title={"Site Responsivo DESKTOP"}
                content={contentDesktopResponsive}
                colorLink={"#FE9381"}
                link={"Leia mais..."}
                width={"238px"}
                height={"115px"}
                alt={"Criar Site Responsivo para Desktop"}
            />
            <CardComponent 
                color={"#FCDA92"} 
                margin={true}
                img={TableResponsive}
                title={"Site Responsivo TABLET"}
                content={contentTabletResponsive}
                colorLink={"#FCDA92"}
                link={"Leia mais..."}
                width={"241px"}
                height={"125px"}
                alt={"Criar Site Responsivo para Tablet"}
            />
            <CardComponent 
                color={"#9C8CB9"} 
                margin={false}
                img={MobileResponsive}
                title={"Site Responsivo MOBILE"}
                content={contentMobileResponsive}
                colorLink={"#9C8CB9"}
                link={"alterar tema"}
                width={"194px"}
                height={"125px"}
                alt={"Criar Site Responsivo para Mobile"}
            />
        </Section>
    );
}

export default ContainersComponent;
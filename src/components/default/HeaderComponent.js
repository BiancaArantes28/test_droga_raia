import React from 'react';
import styled from 'styled-components';
import MenuComponent from './MenuComponent';
import TitleComponent from '../texts/TitleComponent';

import logo from '../../assets/imgs/logo.png';

const Header = styled.header`
    border-bottom: 1px solid #E0E0E0;
    height: 90px;
    width: 100%;
    @media screen and (max-width: 768px) {
        height: 90px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        border-bottom: none;
        height: auto;
        text-align: center;
    }
`;

const Link = styled.a`
    &:link, &:visited{
        color: #FE9380;
        font-weight: 400;
        text-decoration: none;
    }
    @media screen and (max-width: 768px) {
        color: #FBCA61;
    }
    @media screen and (max-width: 480px) {
        color: #9C8CB9;
    }
`;

const HeaderLink = styled(Link)`
    display: block;
    float: left;
    height: 139px;
    text-indent: -9999;
    width: 58.333333333333%;
    @media screen and (max-width: 960px) {
        width: 37.5%;
    }
    @media screen and (max-width: 768px) {
        background-position: 57% 0;
        height: 126px;
        margin-bottom: 15px;
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        background-position: 50% 0;
        display: inherit;
        height: 126px;
        width: 100%;
    }
`;

const Img = styled.img`
    max-width: 100%;
    border: 0;
`;

const HeaderComponent = () => {
    return (
        <Header>
            <TitleComponent
                title={<HeaderLink title="Como Criar um SITE RESPONSIVO com HTML5 e CSS3"><Img src={logo} /></HeaderLink>}
            />
            <MenuComponent />
        </Header>
    );
}

export default HeaderComponent;
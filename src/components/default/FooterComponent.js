import React from 'react';
import styled from 'styled-components';
import FooterMenuComponent from './FooterMenuComponent';

import LogoSmall from '../../assets/imgs/logo_small.png';

const Footer = styled.footer`
    clear: both;
    height: 50px;
    padding: 10px 0;
    width: 100%;
`;

const Small = styled.small`
    font-size: 80%;
`;

const Developer = styled(Small)`
    float: right;
    @media screen and (max-width: 480px) {
        float: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }
`;

const DeveloperFigure = styled.figure`
    width: 100%;
    margin: 10px 0 0;
    @media screen and (max-width: 480px) {
        width: inherit;
    }
`;

const Copyright = styled(Small)`
    float: left;
    margin-left: 2.5%;
    @media screen and (max-width: 480px) {
        float: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }
`;

const TextCopyright = styled.p`
    font-weight: 300;
    letter-spacing: -0.05555555556em;
`;

const Link = styled.a`
    @media screen and (max-width: 768px) {
        &:link, &:visited {
            color: #FBCA61;
        }
        
    }
    @media screen and (max-width: 480px) {
        &:link, &:visited {
            color: #9C8CB9;
        }
    }
`;

const FooterComponent = () => {
    return (
        <Footer>
            <Copyright>
                <TextCopyright>RD 2017. Todos os direitos reservados</TextCopyright>
            </Copyright>
            <FooterMenuComponent />
            <Developer>
                <DeveloperFigure>
                    <a href="http://www.carloshps.com.br/blog" title="Desenvolvido por CarlosHPS Webdesigner">
                        <img src={LogoSmall} width="45" height="32" />
                    </a>
                </DeveloperFigure>
            </Developer>
        </Footer>
    );
}

export default FooterComponent;
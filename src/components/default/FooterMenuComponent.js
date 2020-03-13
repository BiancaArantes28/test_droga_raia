import React from 'react';
import styled from 'styled-components';

import Farmasil from '../../assets/imgs/logo_farmasil.png';
import DrogaRaia from '../../assets/imgs/logo_drogaraia.png';
import Drogasil from '../../assets/imgs/logo_drogasil.png';
import FourBio from '../../assets/imgs/logo_4bio.png';
import Univers from '../../assets/imgs/logo_univers.png';

const Ul = styled.ul`
    list-style: none;
    margin: 8px 0 0 30px;
    float: left;
`;

const Li = styled.li`
    display: inline-block;
    margin-left: 5px;
`;

const NavaLink = styled.a`
    &:link, &:visited {
        color: #FE9380;
        font-weight: 400;
        text-decoration: none;
        background: 0 0;
    }
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

const Img = styled.img`
    max-width: 100%;
    border: 0;
`;

const FooterMenuComponent = () => {
    return (
        <Ul>
            <Li>
                <NavaLink href="https://www.drogaraia.com.br/" target="_blank">
                    <Img src={DrogaRaia} alt="Droga Raia" />
                </NavaLink>
            </Li>
            <Li>
                <NavaLink href="https://www.drogasil.com.br/" target="_blank">
                    <Img src={Drogasil} alt="Drogasil" />
                </NavaLink>
            </Li>
            <Li>
                <NavaLink href="http://www.farmasil.com.br/" target="_blank">
                    <Img src={Farmasil} alt="Farmasil" />
                </NavaLink>
            </Li>
            <Li>
                <NavaLink href="https://univers-pbm.com.br/beneficioMedicamentos/" target="_blank">
                    <Img src={Univers} alt="Univers" />
                </NavaLink>
            </Li>
            <Li>
                <NavaLink href="http://www.4bio.com.br/" target="_blank">
                    <Img src={FourBio} alt="4 Bio" />
                </NavaLink>
            </Li>
        </Ul>
    );
}

export default FooterMenuComponent;
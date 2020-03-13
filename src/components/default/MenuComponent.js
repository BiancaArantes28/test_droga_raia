import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    float: right;
    text-align: right;
    width: 41.6666666666667%;
    @media screen and (max-width: 960px) {
        width: 62.5%;
    }
    @media screen and (max-width: 768px) {
        float: none;
        text-align: center;
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        clear: both;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    @media screen and (max-width: 480px) {
        margin: 0;
        padding: 0;
    }
`;

const Li = styled.li`
    display: inline;
    @media screen and (max-width: 480px) {
        background-color: #9C8CB9;
        display: block;
    }
`;

const NavLink = styled.a`
    margin-right: 2.5%;
    &:link, &:visited {
        color: #007f56;
        font-size: 1.2222222222em;
        font-weight: 300;
        letter-spacing: -0.0909090909em;
        line-height: 1.18181818182em;
        display: inline-block;
        text-decoration: none;
    }
    &:hover{
        color: #FE9380;
        text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
        &:link, &:visited {
            color: #FBCA61;
        }
    }
    @media screen and (max-width: 480px) {
        height: 40px;
        margin: 0 auto;
        padding-top: 3px;
        text-align: center;
        text-shadow: none;
        width: 100%;
        &:link, &:visited {
            color: #9C8CB9;
        }
        &:link {
            color: #fff;
            font-size: 1.3888888889em;
        }
        &:visited {
            background-color: #745F9A;
            color: #fff;
            text-decoration: none;
        }
    }

`;

const MenuComponent = () => {
    return (
        <Nav>
            <Ul>
                <Li><NavLink href="#">HTML5</NavLink></Li>
                <Li><NavLink href="#">CSS3</NavLink></Li>
                <Li><NavLink href="#">JAVASCRIPT</NavLink></Li>
                <Li><NavLink href="#">REACT</NavLink></Li>
                <Li><NavLink href="#">REDUX</NavLink></Li>
            </Ul>
        </Nav>
    );
}

export default MenuComponent;
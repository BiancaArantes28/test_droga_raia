import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: ${props => props.color};
    margin-right: ${props => props.margin && "2.631578947368421%"};
    float: left;
    position: relative;
    text-align: center;
    width: 31.57894736842105%;
    @media screen and (max-width: 960px) {
        width: 31.45833333333333%;
    }
    @media screen and (max-width: 768px) {
        width: 31.25%;
    }
    @media screen and (max-width: 480px) {
        float: none;
        height: 160px;
        width: 100%;
    }
`;

const Figure = styled.figure`
    margin: 15px auto 0px auto;
    width: 69.44444444444444%;
    @media screen and (max-width: 960px) {
        width: 66.22516556291391%;
    }
    @media screen and (max-width: 768px) {
        width: 62.25%;
    }
    @media screen and (max-width: 480px) {
        float: left;
        height: 160px;
        margin: 0;
        padding: 0;
        width: 53.125%;
    }
`;

const H3 = styled.h3`
    color: #fff;
    font-size: 1.77777777778em;
    font-weight: 300;
    letter-spacing: -0.0625em;
    margin-bottom: 30px;
    text-shadow: none;
    line-height: 1.1875em;
    @media screen and (max-width: 1200px) {
        font-size: 1.55555555556em;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.6666666667em;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.6666666667em;
    }
    @media screen and (max-width: 480px) {
        float: left;
        margin-top: 40px;
        width: 46.875%;
    }
`;

const Text = styled.p`
    background-color: #fff;
    float: left;
    height: 112px;
    padding: 1.9444444444444445%;
    position: absolute;
    text-align: justify;
    top: 225px;
    font-weight: 300;
    letter-spacing: -0.05555555556em;
    @media screen and (max-width: 1200px) {
        height: 170px;
        top: 217px;
    }
    @media screen and (max-width: 960px) {
        font-size: 0.8333333333em;
        top: 230px;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.7777777778em;
        height: 140px;
        line-height: 1.1428571428em;
        padding: 2.9166666667%;
        top: 215px;
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

const SpanBtn = styled.span`
    font-size: 1.1111111111em;
    font-weight: 400;
    letter-spacing: -0.1em;
    height: 27px;
    margin-top: 30px;
    position: absolute;
    right: 1px;
    text-align: center;
    text-shadow: none;
    width: 33.33333333333333%;
`;

const BtnLink = styled.a`
    background-color: ${props => props.colorLink};
    color: #fff;
    padding: 2px 3.333333333333333%;
`;

const Img = styled.img`
    max-width: 100%;
    border: 0;
    @media screen and (max-width: 960px) {
        height: 100px;
    }
    @media screen and (max-width: 768px) {
        height: 80px;
    }
    @media screen and (max-width: 480px) {
        height: 125px;
        margin-top: 15px;
        width: 86.2745098040%;
    }
`;

const CardComponent = (props) => {
    return (
        <Card color={props.color} margin={props.margin}>
            <Figure>
                <Img src={props.img} width={props.width} height={props.height} alt={props.alt} />
            </Figure>
            <H3>{props.title}</H3>
            <Text>
                {props.content}
                <SpanBtn>
                    <BtnLink title={props.link} colorLink={props.colorLink}>{props.link}</BtnLink>
                </SpanBtn>
            </Text>
        </Card>
    );
}

export default CardComponent;
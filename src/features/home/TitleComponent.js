import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h2`
    color: #007f56;
    font-size: 3.3333333333em;
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1em;
    
    @media screen and (max-width: 960px) {
        font-size: 2.6666666667em;
    }
    @media screen and (max-width: 768px) {
        color: #FBCA61;
        font-size: 2.2222222222em;
    }
    @media screen and (max-width: 480px) {
        color: #9C8CB9;
        font-size: 1.4444444444em;
        letter-spacing: -0.0769230769230769em;
        margin-bottom: 15px;
        margin: .67em 0;
    }
`;

const Section = styled.section`
    height: 320px;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 960px) {
        height: 250px;
    }
    @media screen and (max-width: 768px) {
        height: 200px;
    }
    @media screen and (max-width: 480px) {
        height: 130px;
        margin-top: 25px;
    }
`;

const Span = styled.span`
    font-size: 1em;
    font-weight: 300;
    letter-spacing: -0.0333333333em;
    line-height: 1em;
`;

const Subtitle = styled.h3`
    margin: 0 auto;
    width: 75%;
    font-size: 1.7777777778em;
    font-weight: 300;
    letter-spacing: -0.0625em;
    line-height: 1.1875em;
    @media screen and (max-width: 1200px) {
        font-size: 1.66666666667em;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.5em;
        width: 88.54166666666667%;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.1111111111em;
    }
    @media screen and (max-width: 480px) {
        font-size: 0.7777777778em;
    }
`;

const RadiusSpan = styled.span`
    background: ${props => props.background};
    width: 15px;
    border-radius: 100%;
    height: 15px;
    display: inline-block;
    margin-bottom: 5px;
`;

const TitleComponent = () => {
    return (
        <Section>
            <MainTitle>
                <Span>Crie este site</Span> responsivo <Span>com</Span> REACT <Span>utilizando</Span> styled-components
            </MainTitle>
            <Subtitle>
                A fonte utilizada é a Open Sans de 300 a 800. <br/>
                exemplo: "Open Sans", Helvetica, sans-serif, arial; <br/>
                Já as cores são: <br/>
                <RadiusSpan background={"#007f56"} />#007f56, <RadiusSpan background={"#868686"} />#868686, <RadiusSpan background={"#FE9381"} />#FE9481, <RadiusSpan background={"#FCDA92"} />#FCDA92 e <RadiusSpan background={"#9C8CB9"} />#9C8CB9
            </Subtitle>
        </Section>
    );
}

export default TitleComponent;
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #007f56;
    font-size: 3.3333333333em;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1em;
`;

const TitleComponent = (props) => {
    return (
        <Title>{props.title}</Title>
    );
}

export default TitleComponent;
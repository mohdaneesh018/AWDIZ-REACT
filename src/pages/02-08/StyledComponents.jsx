import React from 'react'
import styled from 'styled-components';

const StyledComponents = () => {
    const Wrapper = styled.div`
    background-color: lightblue;
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    `;
    const Title = styled.h1`
    color: red;
    `;
  return (
    <Wrapper>
        <Title>StyledComponents</Title>    
    </Wrapper>
  );
}

export default StyledComponents; 
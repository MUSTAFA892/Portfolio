import React from 'react'
import styled from 'styled-components'




const Logo = styled.h1`
  display: inline-block;
  color: #c569f0;
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 2rem;
  top: 0.5rem; 
  z-index: 3;

  @media (max-width: 768px) {
    left: 1rem;
    top: 1rem;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    left: 0.8rem;
    top: 1rem;
    font-size: 2.5rem;
  }
`;


const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          MT
        </Logo>
    )
}

export default LogoComponent
import React from 'react'
import styled from 'styled-components'




const Logo = styled.h1`
display: inline-block;
color: #c569f0;
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          MT
        </Logo>
    )
}

export default LogoComponent
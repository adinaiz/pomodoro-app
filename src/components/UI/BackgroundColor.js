import React from 'react'
import styled from 'styled-components'

export const BackgroundColor = (props) => {
   return <Background {...props} />
}

const Background = styled.div`
   height: 100%;
   width: 100%;
   z-index: -10;
   position: absolute;
   top: 0;
   left: 0;
   background-color: ${({ bgColor }) => bgColor || 'red'};
   transition: background-color ease-in 0.4s;
`
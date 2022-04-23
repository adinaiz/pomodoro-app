import React from "react";
import styled from "styled-components";

export const ProgressBar = ({percent}) => {
    return (
    <Container>
        <Progress percent={percent}/>
    </Container>
    )
}

const Container = styled.div`
/* background-color: rgba(0, 0, 0, 0.1); */
  /* height: 0.0625rem;
  margin-bottom: 2.5rem;     */
  width: 620px;
   height: 1px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 5px auto;
   margin-bottom: 40px;
`

const Progress = styled.div`
  height: 0.1875rem;
  border-radius: 6.25rem;
  background-color: red;
  transform: translateY(-0.0625rem);
  width: ${({ percent }) => `${percent}%`};
`
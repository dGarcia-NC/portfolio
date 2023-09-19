import styled from "styled-components";

export const GradientLine = styled.div`
  height: 1px;
  background-color: #E6E6E6;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    #fcfdfd 0%,
    #eae8e8 21%,
    #c0c0c0 51%,
    #7c7c7e 100%
  );
`

export const GradientLineLR = styled.div`
  height: 1px;
  background-color: #E6E6E6;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    #e1e1e1 0%,
    #ebeaea 21%,
    #e7e6e6 51%,
    #ffffff 100%
  );
`

export const GradientTD = styled.div`
  border: 1px solid;
  border-top: 0;
  border-bottom: 0;
  border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(226, 226, 226, 1) 48%, rgba(255, 255, 255, 0) 100%);
  border-image-slice: 1;
`

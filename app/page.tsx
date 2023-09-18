'use client'
import styled from "styled-components"
import LeftNavBar from "./components/SideBar"

const MainComponent = styled.div`
  min-height: 100vh;
  border: 4px;
  border: 4px solid #ab420e;
`

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border: 4px solid #ecee6e;
  align-items: center;
`

export default function Home() {
  return (
    <MainComponent>
      <Wrapper>
        <LeftNavBar />
        <div>Profile Component</div>
        <div>Detail Component</div>
      </Wrapper>
    </MainComponent>
  )
}

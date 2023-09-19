'use client'
import styled from "styled-components"
import LeftNavBar from "./components/SideBar"
import UserCard from "./components/User/UserCard"
import InfoCard from "./components/Info/InfoCard"

const MainComponent = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 680px;
  width: 80%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  align-items: center;
`

export default function Home() {
  return (
    <MainComponent>
      <Wrapper>
        <LeftNavBar />
        <UserCard />
        <InfoCard />
      </Wrapper>
    </MainComponent>
  )
}

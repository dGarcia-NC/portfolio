import styled from "styled-components"
import Person from "./Person"
import InfoCard from "../Info/InfoCard"


const Shadow = styled.div`
  height: 600px;
  width: 480px;
  margin-left: 10px;
  position: relative;
  box-shadow: -15px -15px 0px 5px rgba(170, 211, 117, 0.20);
  z-index: 0;
  border-radius: 2px;
`

export default function User() {
  return (
    <Shadow>
      <Person />
    </Shadow>
  )
}

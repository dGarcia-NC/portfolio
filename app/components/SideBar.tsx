import styled from "styled-components"
import { GradientLine } from "@/utils/GradientLine"
import { dataForSideBar } from "@/data"
import Item from "./SideBar/Item"

const SideBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 120px;
  /* border: 4px solid #BF4F74; */
  height: 65%;
  border-radius: 5px;
`

export default function LeftNavBar() {
  const dataLength = dataForSideBar.length - 1
  return (
    <SideBar>
      {dataForSideBar.map((data, index) => (
        <>
          <Item
            key={`${index}-${data.label}`}
            d={data.d}
            label={data.label}
            dataLength={dataLength}
            numLength={index}
          />
          {index < dataLength ? <GradientLine key={`gradient-${dataLength}`} /> : null}
        </>
      ))}
    </SideBar>
  )
}

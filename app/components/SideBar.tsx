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
  width: 90px;
  height: 65%;
  border-radius: 5px;
  margin-left: 10px;
  z-index: 1;
`

export default function LeftNavBar() {
  const dataLength = dataForSideBar.length - 1
  return (
    <SideBar className="text-[#323232]">
      {dataForSideBar.map((data, index) => (
        <>
          <Item
            key={`${index}-${data.label}`}
            d={data.d}
            label={data.label}
          />
          {index < dataLength ? <GradientLine key={`gradient-${dataLength}`} /> : null}
        </>
      ))}
    </SideBar>
  )
}

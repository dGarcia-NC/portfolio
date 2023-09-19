import { GradientLineLR } from "@/utils/GradientLine"
import styled from "styled-components"

const SpacedItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Facts() {
  return (
    <div className="p-7 w-1/2">
      <SpacedItems>
        <div className="bg-[#78CC6D] w-[75px] rounded-sm h-5 flex items-center justify-center text-white">
          Residence:
        </div>
        <div className="flex items-center">California, USA</div>
      </SpacedItems>
      <div className="mt-2"><GradientLineLR /></div>

      <SpacedItems className="mt-2">
        <div className="bg-[#78CC6D] w-[100px] rounded-sm h-5 flex items-center justify-center text-white">
          Years in Tech:
        </div>
        <div className="flex items-center">6+</div>
      </SpacedItems>
      <div className="mt-2"><GradientLineLR /></div>

      <SpacedItems className="mt-2">
        <div className="bg-[#78CC6D] w-[80px] rounded-sm h-5 flex items-center justify-center text-white">
          Availability:
        </div>
        <div className="flex items-center">Open To Work</div>
      </SpacedItems>
    </div>
  )
}

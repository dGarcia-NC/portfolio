import { SideBarItem } from "@/utils/SideBarItem";
import { GradientLine } from "@/utils/GradientLine"


export default function Item({
  d,
  label,
  dataLength,
  numLength,
  }: {
    d: string,
    label: string,
    dataLength: number,
    numLength: number,
  }
  ) {
  return (
      <SideBarItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={d}
          />
        </svg>
        {label}
      </SideBarItem>
  )
}

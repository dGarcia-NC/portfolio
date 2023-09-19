import { SideBarItem } from "@/utils/SideBarItem";

export default function Item({
  d,
  label,
}: {
  d: string,
  label: string,
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

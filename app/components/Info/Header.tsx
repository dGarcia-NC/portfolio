export default function InfoHeader({header}: {header: string}) {
  return (
    <div className="h-12 mt-6 flex items-center">
      <div className="ml-5 text-xl">{header}</div>
    </div>
  )
}

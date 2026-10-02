interface StepsPathProps {
  d: string
  width: number
  height: number
  startX: number
  startY: number
  trackColor: string
}

export default function StepsPath({ d, width, height, startX, startY, trackColor }: StepsPathProps) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="absolute top-0 left-0 hidden xl:block"
      width={width}
      height={height}
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke={trackColor} strokeWidth="2" />
      <path
        d={d}
        fill="none"
        stroke="#bb945b"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <circle cx={startX} cy={startY} r="6" fill="#bb945b" />
    </svg>
  )
}

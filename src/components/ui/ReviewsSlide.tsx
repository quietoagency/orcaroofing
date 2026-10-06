type Props = {
  review: string
  name: string
}

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#bb945b" aria-hidden="true">
          <path d="m12 2.5 2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSlide({ review, name }: Props) {
  return (
    <div className="flex min-h-85 w-80 flex-col gap-5 border border-sand bg-[#f6f2ec] p-8 xl:w-105">
      <div className="flex items-center justify-between">
        <Stars />
        <svg width="40" height="32" viewBox="0 0 40 32" fill="#e5dacc" aria-hidden="true">
          <path d="M0 32V19C0 8 6 1.5 16 0l1.5 4.5C11 6.5 8.5 10 8.5 15H16v17zm22 0V19c0-11 6-17.5 16-19l1.5 4.5C33 6.5 30.5 10 30.5 15H38v17z" />
        </svg>
      </div>
      <p className="grow text-base leading-6.75 text-[#222]">{review}</p>
      <div className="border-t border-sand pt-4">
        <span className="text-xl leading-5 font-semibold text-black">{name}</span>
      </div>
    </div>
  )
}

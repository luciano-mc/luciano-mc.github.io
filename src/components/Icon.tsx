
export type IconProps = {
  src: string,
  title: string,
  className?: string,
}

function Icon({src, title, className} : IconProps) {
  return (
    <img src={src} alt={title} className={className} />
  )
}

export default Icon
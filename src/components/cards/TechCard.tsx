import Icon from "@/components/Icon";

type CardProps = {
  icon: string,
  title: string,
  className?: string,
}

function TechCard({icon, title} : CardProps) {
  return (
    <div className="bg-background p-10 rounded-sm">
      <Icon src={icon} title={title} className="w-20 h-20 mb-2" />
      <span className="font-semibold">{title}</span> 
    </div>
  )
}

export default TechCard
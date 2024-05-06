import Icon from '@/components/Icon';
import type { IconType } from '@/assets/Icons';
import { useTranslation } from 'react-i18next';

function ProjectCard({project} : any) {
  const { link, img, title, description, technologies } = project;
  const { t } = useTranslation();

  return (
  <div className="min-h-[400px] max-w-[380px] relative group overflow-hidden">
    <picture>
      <a href={link} target="_blank">
        <img src={img} alt={title} title={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </a>
    </picture>
    <div className="absolute top-0 left-0 w-full h-full bg-secondary bg-opacity-60 text-background opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm mb-4">{t(`projects.${title}`) || description}</p>
        <div className="flex gap-2 justify-center h-5 mb-4">
          {technologies?.map((tech: IconType, index:number) => (
            <Icon src={tech?.icon} title={tech?.title} key={index} />
          ))}
        </div>
        <a href={link} target="_blank" className="inline-block focus:outline-none focus:outline-secondary" aria-label={title} title={title} >
          <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.5 20.5L12 12M12 12V16M12 12H8" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard
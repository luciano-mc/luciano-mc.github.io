import ProjectCard from '@/components/cards/ProjectCard';
import ProjectsList from '@/assets/projects/Projects';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-20 text-center" id="projects">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-secondary">{t('projects.title')}</h2>
        <p className="mb-10">{t('projects.description')}</p>
        <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProjectsList.map((project: any, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
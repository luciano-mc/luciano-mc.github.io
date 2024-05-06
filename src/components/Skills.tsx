import TechCard from '@/components/cards/TechCard';
import { React, Tailwind, Javascript, Git, Node, Mongo, Sass, Css, Html } from '@/assets/Icons';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="bg-secondaryBackground py-20 text-center 2xl:px-40 2xl:-mx-80">
      <div className="flex flex-col gap-4">
        <h3 className="tracking-widest font-bold text-secondary">{t('skills.title')}</h3>
        <h2 className="text-3xl font-semibold">{t('skills.subtitle')}</h2>
        <p className="text-balance">{t('skills.description')}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 my-10">
        <TechCard icon={React.icon} title={React.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Tailwind.icon} title={Tailwind.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Javascript.icon} title={Javascript.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Git.icon} title={Git.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Node.icon} title={Node.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Mongo.icon} title={Mongo.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Sass.icon} title={Sass.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Css.icon} title={Css.title} className="w-20 h-20 mb-2" />
        <TechCard icon={Html.icon} title={Html.title} className="w-20 h-20 mb-2" />
      </div>
    </section>
  )
}

export default Skills;
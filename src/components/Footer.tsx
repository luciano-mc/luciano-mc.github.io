import { useTranslation } from 'react-i18next';

function  Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background p-5 text-center">
      <div className="flex flex-col">
        <p>{t('footer')}</p>
        <p className="text-secondary font-semibold">Luciano</p>
      </div>
    </footer>
  )
}

export default Footer;
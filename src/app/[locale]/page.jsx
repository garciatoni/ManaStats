import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/navigation';
import styles from "./page.module.scss";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div className={styles.page}>

      
      <main className={styles.main}>
        <h1>{t('title')}</h1>
      </main> 

      <footer className={styles.footer}>
        ñkñkl
      </footer> 

    </div>
  );
}
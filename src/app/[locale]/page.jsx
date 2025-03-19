"use client"

import { Link } from '../../i18n/navigation';
import styles from "./page.module.scss";
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useUserStore } from "../../store/userStore.js";

export default function HomePage() {
  const t = useTranslations();
  const user = useUserStore((state) => state.user)
  const checkAuth = useUserStore((state) => state.checkAuth);


  useEffect(() => {
    checkAuth(); // 🔥 Verifica si el usuario sigue autenticado
  }, []);

  return (
    <div className={styles.page}>

      <main className={styles.main}>
        {user && user.username}
      </main>

      <footer className={styles.footer}>
        Test
      </footer>

    </div>
  );
}
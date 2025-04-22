'use client'

import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations('Home')
  return (
    <main>
      {t('greetings')}
    </main>
  );
}

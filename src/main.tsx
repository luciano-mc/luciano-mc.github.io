import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import { ThemeContextProvider } from '@/context/ThemeContext.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/language/i18';
import '@/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)

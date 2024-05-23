import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import PDFViewer from './components/PDFViewer';

function getLanguageFromURL() {
  // Obtener el idioma de la URL (por ejemplo, /es o /en)
  const path = window.location.pathname;
  const language = path.substring(1); // Eliminar la barra inicial
  return language;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    setLanguage(getLanguageFromURL()); // Obtener el idioma al cargar la aplicación
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen">
      {loading ? <Preloader /> : <PDFViewer language={language} />}
    </div>
  );
}

export default App;

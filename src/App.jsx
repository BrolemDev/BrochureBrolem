import  { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import PDFViewer from './components/PDFViewer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen">
      {loading ? <Preloader /> : <PDFViewer />}
    </div>
  );
}

export default App;
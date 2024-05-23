import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Preloader from './components/Preloader';
import PDFViewer from './components/PDFViewer';
import { updateMetaTags } from './utils/updateMetaTags';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    const language = path.substring(1);
    updateMetaTags(language);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="h-screen w-screen">
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/en" element={<PDFViewer language="en" />} />
            <Route path="/ko" element={<PDFViewer language="ko" />} />
            <Route path="/*" element={<Navigate to="/en" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}


export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="h-screen w-screen">
        {loading ? <Preloader /> : (
          <Routes>
            <Route path="/en" element={<PDFViewer language="en" />} />
            <Route path="/ko" element={<PDFViewer language="ko" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

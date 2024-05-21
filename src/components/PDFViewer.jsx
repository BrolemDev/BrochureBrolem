// src/components/PDFViewer.js
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../ByteBeatJan2024.pdf';
import 'tailwindcss/tailwind.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  return (
    <div className="w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-y-auto min-h-screen">
      {loading ? (
        <div className="loader">Cargando...</div>
      ) : (
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {[...Array(numPages).keys()].map((pNum) => (
            <div key={pNum} className="w-full flex justify-center mt-4">
              <Page
                pageNumber={pNum + 1}
                width={Math.min(window.innerWidth * 0.9, 1000)}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </Document>
      )}
    </div>
  );
};

export default PDFViewer;

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Pdf.css';

function Pdf(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js';
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    })

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
      
    function previousPage() {
        changePage(-1);
    }
    
    function nextPage() {
        changePage(1);
    }

    return (
        <div className="main">
            { numPages > 1
                ? <button type="button" disabled={pageNumber <= 1} onClick={previousPage} className="btn btn-primary" id="prevButton">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                : null
            }
            <div className="pdf">
                <div className="page">Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</div>
                <Document className="document"
                    file={props.url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    >
                    <Page className="page" pageNumber={pageNumber} />
                </Document>
            </div>
            { numPages > 1
                ? <button type="button" disabled={pageNumber >= numPages} onClick={nextPage} className="btn btn-primary" id="nextButton">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                : null
            }
            <button type="button" className="btn-close" aria-label="Close" id="close" onClick={props.pdfClickHandler}></button>
        </div>
    );
}

export default Pdf;

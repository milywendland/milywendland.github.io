import { Document, Page } from 'react-pdf'
import milyresume from '../utils/milyresume.pdf'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
  // let file = milyresume

  return (
    <div className="resume-wrapper">
      <h2>Resume</h2>
      <div className="resume-button"></div>
      <div className="resume">
        <Document
          file={milyresume}
          onLoadError={console.error}
          style={{ width: '60vw', height: 'auto' }}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}

export default Resume

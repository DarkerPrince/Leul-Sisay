import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from './assets/skills/resume.pdf'

import {GoCloudDownload} from 'react-icons/go'

export default function ResumeShowPage() {
  
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const downloadResumePDF = () => {
    fetch(resume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Leule_resume.pdf';
            alink.click();
        })
    });
  }





  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(numPages)
    setNumPages(numPages);
  }
  console.log("Here are some difficulties on the page of the temps " , numPages)

  return (
    <div>
        <div onClick={downloadResumePDF} className=' animate-bounce fixed flex right-12 bottom-12 h-16 w-16 items-center justify-center rounded-full bg-leulePrime z-30'>
        <GoCloudDownload className='text-2xl text-white'/>
        </div>
    <div className='flex h-full items-center justify-center '>
      <Document file={resume}  onLoadSuccess={onDocumentLoadSuccess} className=" " onLoadError={console.error}>
         <Page  scale={2} pageNumber={pageNumber} renderTextLayer={false}  renderMode="canva" className=""/>
      </Document>
    </div>
    </div>
  );
}
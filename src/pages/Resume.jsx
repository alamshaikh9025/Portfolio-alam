import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '/alamresume.pdf'; 
import alamresume from './alamresume.pdf'

  const Resume = () => {
    return(
        <section className='relative flex lg:flex-row flex-col max-container'>
             <iframe src={alamresume} frameBorder="0" className='pdfview'> </iframe>
         </section>
            
    );
};
export default Resume;
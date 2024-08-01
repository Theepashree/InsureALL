// import React, { useEffect, useState } from 'react';
//    import axios from 'axios';
//    import { useParams } from 'react-router-dom';

//    const ViewDocuments = () => {
//        const [documents, setDocuments] = useState({});
//        const { id } = useParams(); // Get the policy ID from URL

//        useEffect(() => {
//            fetchDocuments();
//        }, []);

//        const fetchDocuments = async () => {
//            try {
//                const response = await axios.get(`/api/appliedPolicies/${id}/documents`);
//                setDocuments(response.data);
//            } catch (error) {
//                console.error('Error fetching documents', error);
//            }
//        };

//        return (
//            <div>
//                <h2>Documents for Policy ID: {id}</h2>
//                <div>
//                    <h3>Income Certificate</h3>
//                    <img src={`data:image/jpeg;base64,${documents.incomeCertificate}`} alt="Income Certificate" />
//                </div>
//                <div>
//                    <h3>Self-Cancelled Cheque</h3>
//                    <img src={`data:image/jpeg;base64,${documents.selfCancelledCheque}`} alt="Self-Cancelled Cheque" />
//                </div>
//                <div>
//                    <h3>Communication Address Proof</h3>
//                    <img src={`data:image/jpeg;base64,${documents.communicationAddressProof}`} alt="Communication Address Proof" />
//                </div>
//                <div>
//                    <h3>Birth Certificate</h3>
//                    <img src={`data:image/jpeg;base64,${documents.birthCertificate}`} alt="Birth Certificate" />
//                </div>
//                <div>
//                    <h3>Photo</h3>
//                    <img src={`data:image/jpeg;base64,${documents.photo}`} alt="Photo" />
//                </div>
//                <div>
//                    <h3>Signature</h3>
//                    <img src={`data:image/jpeg;base64,${documents.signature}`} alt="Signature" />
//                </div>
//            </div>
//        );
//    };

//    export default ViewDocuments;









// import React, { useEffect, useState } from 'react';
//    import axios from 'axios';
//    import { Document, Page } from 'react-pdf'; // You need to install `react-pdf` if not already

//    const ViewDocuments = ({ policyId }) => {
//        const [documents, setDocuments] = useState({});
//        const [pdfs, setPdfs] = useState({});
//        const [error, setError] = useState('');

//        useEffect(() => {
//            fetchDocuments();
//        }, []);

//        const fetchDocuments = async () => {
//            try {
//                const response = await axios.get(`/api/appliedPolicies/${policyId}/documents`);
//                const data = response.data;
//                setDocuments(data);

//                // Check for PDF documents and convert them to Blob URLs
//                const pdfBlobUrls = {};
//                for (const [key, base64] of Object.entries(data)) {
//                     console.log("c1");
//                    if (key.endsWith('pdf')) {
//                     console.log("c2");
//                        const byteCharacters = atob(base64);
//                        const byteNumbers = new Array(byteCharacters.length);
//                        for (let i = 0; i < byteCharacters.length; i++) {
//                            byteNumbers[i] = byteCharacters.charCodeAt(i);
//                        }
//                        const byteArray = new Uint8Array(byteNumbers);
//                        const blob = new Blob([byteArray], { type: 'application/pdf' });
//                        const blobUrl = URL.createObjectURL(blob);
//                        pdfBlobUrls[key] = blobUrl;
//                    }
//                }
//                setPdfs(pdfBlobUrls);
//            } catch (error) {
//                setError('Error fetching documents');
//                console.error('Error fetching documents', error);
//            }
//        };

//        return (
//            <div>
//                <h2>View Documents</h2>
//                {error && <p>{error}</p>}
//                {Object.entries(documents).map(([key, value]) => {
//                    if (key.endsWith('pdf')) {
//                        return (
//                            <div key={key}>
//                                <h3>{key}</h3>
//                                {pdfs[key] && (
//                                    <iframe
//                                        src={pdfs[key]}
//                                        style={{ width: '100%', height: '600px' }}
//                                        title={key}
//                                    />
//                                )}
//                            </div>
//                        );
//                    }
//                    return (
//                        <div key={key}>
//                            <h3>{key}</h3>
//                            <img
//                                src={`data:image/jpeg;base64,${value}`}
//                                alt={key}
//                                style={{ maxWidth: '100%' }}
//                            />
//                        </div>
//                    );
//                })}
//            </div>
//        );
//    };

//    export default ViewDocuments;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// // import { Document, Page } from 'react-pdf'; 

// const ViewDocuments = () => {
//     const [documents, setDocuments] = useState({});
//     const [pdfs, setPdfs] = useState({});
//     const [error, setError] = useState('');
//     const { id } = useParams();

//     useEffect(() => {
//         if (id) {
//             console.log(id);
//             fetchDocuments();
//         } else {
//             setError('Policy ID is missing');
//         }
//     }, [id]);

//     const fetchDocuments = async () => {
//         try {
//             const response = await axios.get(`/api/appliedPolicies/${id}/documents`);
//             const data = response.data;
//             setDocuments(data);

//             // Convert PDF documents to Blob URLs
//             const pdfBlobUrls = {};
//             for (const [key, base64] of Object.entries(data)) {
//                 if (key.endsWith('pdf')) {
//                     const byteCharacters = atob(base64);
//                     const byteNumbers = new Array(byteCharacters.length);
//                     for (let i = 0; i < byteCharacters.length; i++) {
//                         byteNumbers[i] = byteCharacters.charCodeAt(i);
//                     }
//                     const byteArray = new Uint8Array(byteNumbers);
//                     const blob = new Blob([byteArray], { type: 'application/pdf' });
//                     const blobUrl = URL.createObjectURL(blob);
//                     pdfBlobUrls[key] = blobUrl;
//                 }
//             }
//             setPdfs(pdfBlobUrls);
//         } catch (error) {
//             setError('Error fetching documents');
//             console.error('Error fetching documents', error);
//         }
//     };

//     return (
//         <div>
//             <h2>View Documents</h2>
//             {error && <p>{error}</p>}
//             {Object.entries(documents).map(([key, value]) => {
//                 if (key.endsWith('pdf')) {
//                     return (
//                         <div key={key}>
//                             <h3>{key}</h3>
//                             {pdfs[key] && (
//                                 <iframe
//                                     src={pdfs[key]}
//                                     style={{ width: '100%', height: '600px' }}
//                                     title={key}
//                                 />
//                             )}
//                         </div>
//                     );
//                 }
//                 return (
//                     <div key={key}>
//                         <h3>{key}</h3>
//                         <img
//                             src={`data:image/jpeg;base64,${value}`}
//                             alt={key}
//                             style={{ maxWidth: '100%' }}
//                         />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default ViewDocuments;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminSidePage from './SideBar';

const ViewDocuments = () => {
  const [documents, setDocuments] = useState({});
  const [pdfs, setPdfs] = useState({});
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchDocuments();
    } else {
      setError('Policy ID is missing');
    }
  }, [id]);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`/api/appliedPolicies/${id}/documents`);
      const data = response.data;
      setDocuments(data);

      const pdfBlobUrls = {};
      for (const [key, base64] of Object.entries(data)) {
        if (key.endsWith('pdf')) {
          const byteCharacters = atob(base64);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'application/pdf' });
          const blobUrl = URL.createObjectURL(blob);
          pdfBlobUrls[key] = blobUrl;
        }
      }
      setPdfs(pdfBlobUrls);
    } catch (error) {
      setError('Error fetching documents');
      console.error('Error fetching documents', error);
    }
  };

  const handleDocumentClick = (key) => {
    setSelectedDocument(key);
  };

  const handleCloseModal = () => {
    setSelectedDocument(null);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
      <AdminSidePage/>
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">VIEW DOCUMENTS</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-2 w-80">
        {Object.keys(documents).map((key) => (
          <button
            key={key}
            onClick={() => handleDocumentClick(key)}
            className="bg-blue-500 text-white px-4 py-2 rounded block w-full text-left"
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2">{selectedDocument.toUpperCase()}</h3>
            {selectedDocument.endsWith('pdf') ? (
              pdfs[selectedDocument] && (
                <iframe
                  src={pdfs[selectedDocument]}
                  style={{ width: '100%', height: '600px' }}
                  title={selectedDocument}
                />
              )
            ) : (
              <img
                src={`data:image/jpeg;base64,${documents[selectedDocument]}`}
                alt={selectedDocument}
                style={{ maxWidth: '100%' }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDocuments;



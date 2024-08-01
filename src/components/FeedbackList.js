// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminPage from './AdminPage';
// import '../styles/AdminPage.css';

// function FeedbackList() {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

//   const fetchFeedbacks = async () => {
//     try {
//       const response = await axios.get('/api/feedback');
//       setFeedbacks(response.data);
//     } catch (error) {
//       console.error('Error fetching feedbacks', error);
//     }
//   };

//   const deleteFeedback = async (id) => {
//     try {
//       await axios.delete(`/api/feedback/${id}`);
//       fetchFeedbacks();
//     } catch (error) {
//       console.error('Error deleting feedback', error);
//     }
//   };

//   return (
//     <div>
//       <AdminPage/>
//       <h1>Feedback List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Customer Name</th>
//             <th>Comments</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.map((feedback) => (
//             <tr key={feedback.feedbackId}>
//               <td>{feedback.customerName}</td>
//               <td>{feedback.comments}</td>
//               <td>
//                 <button onClick={() => deleteFeedback(feedback.feedbackId)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FeedbackList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPage from './AdminPage';
import '../styles/AdminPage.css';
import AdminSidePage from './SideBar';

axios.defaults.baseURL = 'http://localhost:8080';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('/api/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks', error);
    }
  };

  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`/api/feedback/${id}`);
      fetchFeedbacks();
    } catch (error) {
      console.error('Error deleting feedback', error);
    }
  };

  return (
    <div className="flex">
      <AdminSidePage />
      <div className="flex-1 flex items-center justify-center p-10 ml-[220px] view-feedback">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">FEEDBACK LIST</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-3 text-left">Customer Name</th>
                  <th className="p-3 text-center">Comments</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((feedback) => (
                  <tr key={feedback.feedbackId} className="border-b border-gray-200 bg-gray-100">
                    <td className="p-3">{feedback.customerName}</td>
                    <td className="p-3">{feedback.comments}</td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteFeedback(feedback.feedbackId)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackList;
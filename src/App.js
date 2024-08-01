// import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import AdminPage from './components/AdminPage';
// import InsurancePlans from './components/InsurancePlans';
// import ApprovedInsurance from './components/ApprovedInsurance';
// import PendingApprovals from './components/PendingApprovals';
// import ViewClients from './components/ViewClients';
// import FeedbackList from './components/FeedbackList';
// import CustomerPage from './components/CustomerPage';
// import ViewPolicies from './components/ViewPolicies';
// import PolicyDetails from './components/PolicyDetails';
// import CustomerDetails from './components/CustomerDetails';
// import ApplyPolicyDetails from './components/ApplyPolicyDetails';
// // import UploadDocuments from './components/UploadDocuments';
// import ViewDocuments from './components/ViewDocuments'; 
// import PremiumCalculator from './components/PremiumCalculator'
// import GiveFeedback from './components/GiveFeedback'
// import UploadDocuments from './components/UploadDocuments';


// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/admin" element={<AdminPage />} />
//                 <Route path="/customer" element={<CustomerPage />} />
//                 <Route path="/admin/insurance-plans" element={<InsurancePlans />} />
//                 <Route path="/admin/approved-insurance" element={<ApprovedInsurance />} />
//                 <Route path="/admin/view-clients" element={<ViewClients/>} />
//                 <Route path="/admin/pending-approvals" element={<PendingApprovals />} />
//                 <Route path="/admin/view-feedback" element={<FeedbackList />} />
//                 <Route path="/customer/view-policy" element={<ViewPolicies />} />
//                 <Route path="/customer/policies/:planType" element={<PolicyDetails />} />
//                 {/* <Route path="/policies/:planType" element={<PolicyDetails />} /> */}
//                 <Route path="/customer/apply/:policyId" element={<CustomerDetails />} />
//                 <Route path="/customer/apply-policy/:policyId" element={<ApplyPolicyDetails />} />

//                 {/* <Route path="/customer/upload-documents" element={<UploadDocuments />} /> */}
//                 <Route path="/admin/view-documents/:id" element={<ViewDocuments />} />

//                 <Route path="/customer/premium-calculator" element={<PremiumCalculator />} />
//                 <Route path="/customer/give-feedback" element={<GiveFeedback />} />
//                 <Route path="/customer/upload-documents/:policyId" element={<UploadDocuments />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

//now
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import AdminPage from './components/AdminPage';
// import InsurancePlans from './components/InsurancePlans';
// import ApprovedInsurance from './components/ApprovedInsurance';
// import PendingApprovals from './components/PendingApprovals';
// import ViewClients from './components/ViewClients';
// import FeedbackList from './components/FeedbackList';
// import CustomerPage from './components/CustomerPage';
// import ViewPolicies from './components/ViewPolicies';
// import PolicyDetails from './components/PolicyDetails';
// import CustomerDetails from './components/CustomerDetails';
// import ApplyPolicyDetails from './components/ApplyPolicyDetails';
// import UploadDocuments from './components/UploadDocuments';
// import ViewDocuments from './components/ViewDocuments';
// import PremiumCalculator from './components/PremiumCalculator';
// import GiveFeedback from './components/GiveFeedback';
// import PlanTypeForm from './components/PlanTypeForm';
// import EditProfile from './components/EditProfile';
// import PolicyStatus from './components/PolicyStatus';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/customer" element={<CustomerPage />} />
//         <Route path="/admin/insurance-plans" element={<InsurancePlans />} />
//         <Route path="/admin/approved-insurance" element={<ApprovedInsurance />} />
//         <Route path="/admin/view-clients" element={<ViewClients />} />
//         <Route path="/admin/pending-approvals" element={<PendingApprovals />} />
//         <Route path="/admin/view-feedback" element={<FeedbackList />} />
//         <Route path="/customer/view-policy" element={<ViewPolicies />} />
//         <Route path="/customer/policies/:planType" element={<PolicyDetails />} />
//         <Route path="/customer/apply/:policyId" element={<CustomerDetails />} />
//         <Route path="/customer/apply-policy/:policyId" element={<ApplyPolicyDetails />} />
//         <Route path="/customer/upload-documents/:policyId" element={<UploadDocuments />} />
//         <Route path="/admin/view-documents/:id" element={<ViewDocuments />} />
//         <Route path="/customer/premium-calculator" element={<PremiumCalculator />} />
//         <Route path="/customer/give-feedback" element={<GiveFeedback />} />
//         <Route path="/customer/plan-type-form" element={<PlanTypeForm />} />
//         <Route path="/customer/edit-profile" element={<EditProfile />} />
//         <Route path="/customer/policy-status" element={<PolicyStatus />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import InsurancePlans from './components/InsurancePlans';
import ApprovedInsurance from './components/ApprovedInsurance';
import PendingApprovals from './components/PendingApprovals';
import ViewClients from './components/ViewClients';
import FeedbackList from './components/FeedbackList';
import CustomerPage from './components/CustomerPage';
import ViewPolicies from './components/ViewPolicies';
import PolicyDetails from './components/PolicyDetails';
import CustomerDetails from './components/CustomerDetails';
import ApplyPolicyDetails from './components/ApplyPolicyDetails';
import UploadDocuments from './components/UploadDocuments';
import ViewDocuments from './components/ViewDocuments';
import PremiumCalculator from './components/PremiumCalculator';
import GiveFeedback from './components/GiveFeedback';
import PlanTypeForm from './components/PlanTypeForm';
import EditProfile from './components/EditProfile';
import PolicyStatus from './components/PolicyStatus';
import PaymentSummary from './components/PaymentSummary';
import SuccessPage from './components/SuccessPage';
import SideBar from './components/SideBar'
import AdminSidePage from './components/SideBar';
import Profile from './components/Profile';
import Statistics from './components/Statistics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/admin/insurance-plans" element={<InsurancePlans />} />
        <Route path="/admin/approved-insurance" element={<ApprovedInsurance />} />
        <Route path="/admin/view-clients" element={<ViewClients />} />
        <Route path="/admin/pending-approvals" element={<PendingApprovals />} />
        <Route path="/admin/view-feedback" element={<FeedbackList />} />
        <Route path="/customer/view-policy" element={<ViewPolicies />} />
        <Route path="/customer/policies/:planType" element={<PolicyDetails />} />
        <Route path="/customer/apply/:policyId" element={<CustomerDetails />} />
        <Route path="/customer/apply-policy/:policyId" element={<ApplyPolicyDetails />} />
        <Route path="/customer/upload-documents/:policyId" element={<UploadDocuments />} />
        <Route path="/admin/view-documents/:id" element={<ViewDocuments />} />
        <Route path="/customer/premium-calculator" element={<PremiumCalculator />} />
        <Route path="/customer/give-feedback" element={<GiveFeedback />} />
        <Route path="/customer/plan-type-form" element={<PlanTypeForm />} />
        <Route path="/customer/edit-profile" element={<EditProfile />} />
        <Route path="/customer/policy-status" element={<PolicyStatus />} />
        <Route path="/payment-summary" element={<PaymentSummary />} />
        <Route path="/customer/success-page" element={<SuccessPage />} />  
        <Route path="/sidebar" element={<AdminSidePage />} />  
        <Route path="/profile" element={< Profile/>} />  
        <Route path="/admin/statistics" element={<Statistics />} />
        
      </Routes>
    </Router>
  );
}

export default App;


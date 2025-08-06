import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import './App.css';
import Refferal from './components/referral/Refferal.jsx';
import EarningHistory from './components/earning history/EarningHistory.jsx';
import ProductLink from './components/productLinks/ProductLink.jsx';
import AffiliateModal from './components/Affiliatemodal/AffiliateIntroModal.jsx';

function App() {
    const [showModal, setShowModal] = useState(true);
const [sidebarOpen, setSidebarOpen] = useState(false); 
  return (
    <BrowserRouter>
    <Navbar sidebarOpen={sidebarOpen} onclick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="app-container">
        <Sidebar sidebarOpen={sidebarOpen} onclick={() => setSidebarOpen(!sidebarOpen)}/>
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/refferal" element={<Refferal />} />
            <Route path="/earninghistory" element={<EarningHistory />} />
            <Route path="/amrutam-nari-sondarya-malt" element={<ProductLink/>} />
          </Routes>
        </main>
      </div>
     {showModal && <AffiliateModal onClose={() => setShowModal(false)} />}
    </BrowserRouter>
  );
}

export default App;

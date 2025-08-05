import React from 'react';
import './AffiliateIntroModal.css';

const AffiliateModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="./grow.png" alt="Affiliate" className="modal-image" />
        <h3>Introducing <span className="highlight">Affiliate Earnings</span></h3>
        <p className="modal-text">
          Start earning by recommending Amrutam products in your patient routines.<br />
          Get commissions for every successful referral through your unique link or coupon.
        </p>
        <button className="modal-button" onClick={onClose}>Get Started</button>
      </div>
    </div>
  );
};

export default AffiliateModal;

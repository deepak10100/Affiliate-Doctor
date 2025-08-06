import React, { useState } from 'react'
import './Coupon.css'
import { useLocation } from 'react-router-dom';
function Coupon() {
   const [selectedProduct, setSelectedProduct] = useState('');
  const [couponCode] = useState('DRLIAM2374');

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    alert('Coupon copied to clipboard!');
  };
   const location = useLocation();
    const currentPath = location.pathname;
    
  return (
    <>
     <div className="coupon-container">
 <div className="url-path">

          <p className="path-text">{`Aflilate > ${currentPath.split('/')[1]} Tool `}</p>
        </div>
      
      <div className="card-box">
        <h3>Product Link/Coupon</h3>
        <div className="field-row">
          <div className="input-section">
            <label>Enter the name of Product <span className="required">*</span></label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="dropdown"
            >
              <option value=""></option>
              <option value="Amrutam">Amrutam</option>
              <option value="Chyawanprash">Chyawanprash</option>
            </select>
            <p className="txt">Enter or Select the name of product you want to refer to your patient.</p>
          </div>
        </div>
          <button className="green-btn right">Get</button>
      </div>

    
      <div className="card-box">
        <h3>Cart Discount</h3>
        <div className="field-row">
          <input className="input-readonly" value={couponCode} readOnly />
          <button className="green-btn right" onClick={handleCopy}>Copy</button>
        </div>
        <p className="note"><em>Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.</em></p>
      </div>

    </div>
    </>
  )
}

export default Coupon
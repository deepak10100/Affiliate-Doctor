import React, { useState } from 'react'
import './ProductLinks.css'
import Card from '../card/Card';
import { useLocation } from 'react-router-dom';
function ProductLink() {
   const [product] = useState("Amrutam Nari Sondarya Malt");
  const [link] = useState("https://www.amrutam.global//nari-sondarya-malt?");
  const [coupon] = useState("AMU7382478");
  const [couponCode] = useState('DRLIAM2374');

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    alert('Coupon copied to clipboard!');
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };
   const location = useLocation();
    const currentPath = location.pathname;
  return (
    <>
      <div className="url-path">
          <p className="path-text">{`Aflilate > ${currentPath.split('/')[1].split('-')[0]} Nari Sondarya Malt`}</p>
        </div>
     <div className="plc-container">
      <h2 className="plc-title">Product Link/Coupon</h2>

      <label className="plc-label">
        Enter the name of Product <span className="plc-required">*</span>
      </label>

      <div className="plc-dropdown-wrapper">
        <select className="plc-select">
          <option>{product}</option>
        </select>
        <p className="plc-subtext">Enter or Select the name of product you want to refer to your patient.</p>
      </div>

      <div className="plc-content">
        <img
          src="./image 252.png"
          alt="product"
          className="plc-image"
        />

        <div className="plc-right-section">
          <div className="plc-input-group">
            <label className="plc-input-label">Product Link</label>
            <div className="plc-input-wrapper">
              <input type="text" value={link} readOnly className="plc-input" />
              <button className="plc-button" onClick={() => copyToClipboard(link)}>Copy</button>
            </div>
          </div>

          <div className="plc-input-group">
            <label className="plc-input-label">Product Coupon Code</label>
            <div className="plc-input-wrapper">
              <input type="text" value={coupon} readOnly className="plc-input" />
              <button className="plc-button" onClick={() => copyToClipboard(coupon)}>Copy</button>
            </div>
          </div>
        </div>
      </div>

      <p className="plc-note">
        <strong>Note:</strong> Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
      </p>
    </div>

    <div className="d-metric-card">
                <Card title="Total Coupons clicks" amount="255" icon='./coupon.svg' />
                <Card title="Total Orders" amount="55" icon='./order.svg' />
                <Card title="Total Revenue" amount="5540" icon='./revenue.svg' />
                <Card title="Total Link/Coupon" amount="5" icon='./link.svg' />
            </div>

            <div className="card-box mt">
        <h3>Cart Discount</h3>
        <div className="field-row">
          <input className="input-readonly" value={couponCode} readOnly />
          <button className="green-btn right" onClick={handleCopy}>Copy</button>
        </div>
        <p className="note"><em>Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.</em></p>
      </div>

   
    </>
  )
}

export default ProductLink
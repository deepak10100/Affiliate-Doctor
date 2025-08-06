import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useLocation } from 'react-router-dom';


function EarningHistory() {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath.split('/')[1].slice(0,7))
    const data = [
  {
    id: 1,
    name: "Andrea Lalema",
    date: "19 Oct, 2024",
    time: "04 : 10 PM",
    coupon: "AMU2344",
    commission: "15%",
    earning:"INR 120",
    status:"Paid",
    badge: "New",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Smith Bruklin",
    date: "19 Oct, 2024",
    time: "05 : 10 PM",
    coupon: "AMU2344",
    commission: "15%",
   earning:"INR 112",
    status:"Paid",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "William Stephin",
    date: "18 Oct, 2024",
    time: "06 : 10 PM",
    coupon: "AMU2344",
    commission: "25%",
    earning:"INR 82",
    status:"Pending",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];
const [searchTerm, setSearchTerm] = useState('');
 const [refreshData, setRefreshData] = useState(data);
 const handleRefresh = () => {
    setSearchTerm(""); // search bhi reset ho jaye
    setRefreshData(data);
  };
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
    <div className="url-path">
          <p className="path-text">{`Aflilate > ${currentPath.split('/')[1].slice(0,7)} History`}</p>
        </div>
     <div className="referral-card table-responsive">
      <div className="referral-header">
       
        <div className="search-container">
          <div className="heading">
             <h2>Referral Overview</h2>
          </div>
         <div className="content">
           <img alt="" id='icon' srcset="" src="./form.svg"/>
          <input placeholder="Search here" type="text" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
          <button onClick={handleRefresh} className="refresh-btn"><img src="./reload.png" alt="" srcset="" /></button>
         </div>
          </div>
        <div className="search-tools">
          <button className="sort-btn"><img src="./Sort by.png" alt="" srcset="" /></button>
          <button className="filter-btn"><img src="./filter.svg" alt="" srcset="" /></button>
        </div>
      </div>
      <table className="referral-table">
        <thead>
          <tr>
            <th></th>
            <th>S. No.</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Coupon/Link</th>
            <th>Commission</th>
            <th>Earning</th>
            <th>Status</th>
           
          </tr>
        </thead>
        <tbody>
          {
          filteredData.length === 0 ? (
              <tr>
                <td colSpan="10" style={{ textAlign: 'center', padding: '20px' }}>
                  No results found
                </td>
              </tr>
            ):
          (filteredData.map((row, i) => (
            <tr key={row.id}>
              <td><input type="checkbox" /></td>
              <td>{i + 1}.</td>
              <td>
                <div className="profile-cell">
                  <img src={row.image} alt={row.name} />
                  <span>{row.name}</span>
                  {row.badge && <span className="new-badge">New</span>}
                </div>
              </td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.coupon}</td>
              <td>{row.commission}</td>
              <td>{row.earning}</td>
              <td style={{color:row.status==="Paid"?"green":"red", fontWeight:"bolder"}} >{row.status}</td>
            
            </tr>
          )))}
        </tbody>
      </table>
      <div className="table-footer">
        <span>Rows per page: 8</span>
        <div className="pagination">
        <span id='page' >1-8 of 80</span>
          <button><IoIosArrowBack/> </button>
                    <button> <IoIosArrowForward/> </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default EarningHistory
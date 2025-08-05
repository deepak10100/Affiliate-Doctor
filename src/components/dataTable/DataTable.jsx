import React from 'react'
import './DataTable.css'
import { FaSyncAlt, FaArrowDown, FaFilter } from "react-icons/fa";
function DataTable() {
const data = [
  {
    id: 1,
    name: "Andrea Lalema",
    date: "19 Oct, 2024",
    time: "04 : 10 PM",
    coupon: "AMU2344",
    commission: "15%",
    clicks: 2,
    orders: 2,
    revenue: 345,
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
    clicks: 4,
    orders: 4,
    revenue: 564,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "William Stephin",
    date: "18 Oct, 2024",
    time: "06 : 10 PM",
    coupon: "AMU2344",
    commission: "25%",
    clicks: 1,
    orders: 1,
    revenue: 200,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

  return (
    <>
    
     <div className="referral-card">
      <div className="referral-header">
       
        <div className="search-container">
          <div className="heading">
             <h2>Referral Overview</h2>
          </div>
          <img alt="" id='icon' srcset="" src="./form.svg"/>
          <input placeholder="Search here" type="text"/>
          <button className="refresh-btn"><img src="./reload.png" alt="" srcset="" /></button>
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
            <th>Clicks</th>
            <th>Orders</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
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
              <td>{row.clicks}</td>
              <td>{row.orders}</td>
              <td>{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <span>Rows per page: 8</span>
        <div className="pagination">
        <span id='page' >1-8 of 80</span>
          <button>◀</button>
          <button>▶</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DataTable
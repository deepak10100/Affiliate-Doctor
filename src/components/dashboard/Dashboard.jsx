import React from 'react';
import TopFilters from '../topFilter/TopFilter';
import Card from '../card/Card';
import DataTable from '../dataTable/DataTable';
import { useLocation } from 'react-router-dom';

import './Dashboard.css';

function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;
 
  return (
    <>
      <div className="url-path">
        <p className="path-text">{`Affiliate > ${currentPath.split('/')[1]}`}</p>
      </div>

      <TopFilters />

      <div className="d-metric-card">
        <Card title="Total Coupons clicks" amount="255" icon="./coupon.svg" />
        <Card title="Total Orders" amount="55" icon="./order.svg" />
        <Card title="Total Revenue" amount="5540" icon="./revenue.svg" />
        <Card title="Total Link/Coupon" amount="5" icon="./link.svg" />
      </div>

      <DataTable />

      
    </>
  );
}

export default Dashboard;

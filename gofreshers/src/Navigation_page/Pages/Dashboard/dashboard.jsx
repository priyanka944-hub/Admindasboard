import React from 'react'
import './dashboard.css'
import Linechart from './Linechart'
import Piechart from './piechart'


const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className="page-header mb-0 pb-2 border-0">
<h1 className="page-header-title text-107980">Welcome, admin</h1>
<p className="welcome-msg">Monitor your business analytics and statistics</p>
</div>



<div className="card mb-10px">
<div className="card-body">
<div className="btn--container justify-content-between align-items-center mb-2 pb-1">
<h5 className="card-title mb-2">
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/business-analytics.png" alt="" className="card-icon"/>
Business Analytics
</h5>
<div className="mb-2">
<select className="custom-select" name="statistics_type" onchange="order_stats_update(this.value)">
<option value="overall">
Overall Statistics
</option>
<option value="today">
Today s Statistics
</option>
<option value="this_month">
This Month s Statistics
</option>
</select>
</div>
</div>
<div className="row g-2" id="order_stats">
<div className="col-sm-6 col-lg-3">
<a className="dashboard--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/pending">
<h6 className="subtitle">Pending</h6>
<h2 className="title">
12
</h2>
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/pending.png" alt="" className="dashboard-icon"/>
</a>
</div>
<div className="col-sm-6 col-lg-3">
<a className="dashboard--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/confirmed">
<h6 className="subtitle">Confirmed</h6>
<h2 className="title">
6
</h2>
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/confirmed.png" alt="" className="dashboard-icon"/>
</a>
</div>
<div className="col-sm-6 col-lg-3">
<a className="dashboard--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/processing">
<h6 className="subtitle">Packaging</h6>
<h2 className="title">
2
</h2>
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/packaging.png" alt="" className="dashboard-icon"/>
</a>
</div>
<div className="col-sm-6 col-lg-3">
<a className="dashboard--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/out_for_delivery">
<h6 className="subtitle">Out for delivery</h6>
<h2 className="title">
0
</h2>
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/out-for-delivery.png" alt="" className="dashboard-icon"/>
</a>
</div>
<div className="col-sm-6 col-lg-3">
<a className="order--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/delivered">
<div className="d-flex justify-content-between align-items-center">
<h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/delivery/1.png" alt="dashboard" className="oder--card-icon"/>
<span>Delivered</span>
</h6>
<span className="card-title text-success">
18
</span>
</div>
</a>
</div>
<div className="col-sm-6 col-lg-3">
<a className="order--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/canceled">
<div className="d-flex justify-content-between align-items-center">
<h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/delivery/2.png" alt="dashboard" className="oder--card-icon"/>
<span>Canceled</span>
</h6>
<span className="card-title text-danger">
3
</span>
</div>
</a>
</div>

<div className="col-sm-6 col-lg-3">
<a className="order--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/returned">
<div className="d-flex justify-content-between align-items-center">
<h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/delivery/3.png" alt="dashboard" className="oder--card-icon"/>
<span>Returned</span>
</h6>
<span className="card-title text-warning">
1
</span>
</div>
</a>
</div>
<div className="col-sm-6 col-lg-3">
<a className="order--card h-100" href="https://grofresh-admin.6amtech.com/admin/orders/list/failed">
<div className="d-flex justify-content-between align-items-center">
<h6 className="card-subtitle d-flex justify-content-between m-0 align-items-center">
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/delivery/4.png" alt="dashboard" className="oder--card-icon"/>
<span>Failed to Delivered</span>
</h6>
<span className="card-title text-danger">
2
</span>
</div>
</a>
</div>
</div>
</div>
</div>         

<div className='row g-1'>
{/* graph */}

<div className=' d-flex flex-row g-1'>
  <div className='card card-body col-lg-8'>
  <div className="btn--container justify-content-between align-items-center">
<h5 className="card-title mb-2">
<img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/order-statistics.png" alt="" className="card-icon"/>
<span>Order statistics</span>
</h5>
<div className="mb-2">
<div className="d-flex flex-wrap statistics-btn-grp">
<label>
<input type="radio" name="order__statistics"  hidden/>
<span data-order-type="yearOrder" >This Year</span>
</label>
<label>
<input type="radio" name="order__statistics" hidden/>
<span data-order-type="MonthOrder">This Month</span>
</label>
<label>
<input type="radio" name="order__statistics" hidden/>
<span data-order-type="WeekOrder">This Week</span>
</label>
</div>
</div>
</div>
<div className='chart col-lg-12'>
 <Linechart/>
</div>
  </div>
  <div className='card-body ms-1 col-lg-4'>
    <div className='bg-white'>
  <div class="card-header border-0 order-header-shadow">
<h5 class="card-title">
<span>Order status statistics</span>
<Piechart/>

</h5>
</div>
</div>
    </div>
</div>





</div>
    </div>
  )
}

export default Dashboard

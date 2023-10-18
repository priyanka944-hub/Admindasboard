import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import './Card.css'
import coupon from './coupon.png';
import {Pencil,Trash}from 'react-bootstrap-icons';

export default function Card() {
  return (
    <>
    <div className="container-fluid Discount">
<div className="page-header">
<h1>
    <span>
         <img src={coupon} alt="coupon" /> 
    </span>
    <span>
        Discount
    </span>
</h1>
</div>
<div class="card">
    <div className='card-body'>
<form>
<div className='row'>
    <div className='col-md-6'>
        <div className='form-group'>
            <label class="input-label">Name</label>
            <input type="text" className="form-control" placeholder='New Discount' />
        </div>
        <div className='form-group'>
            <label class="input-label">Start Date</label>
            <input type="date" className="form-control" placeholder='' />
        </div>
        <div className='form-group'> 
        <label class="input-label">Discount type</label>
        <select className='form-control'>
        <option>Percent</option>
        <option>Amount</option>
        </select>
        </div>
        <div className='form-group'>
            <label class="input-label">Maximum Amount</label>
            <input type="text" className="form-control" placeholder='Maximum Amount' />
        </div>
       

    </div>

    <div className='col-md-6'>
    <div className='form-group'> 
        <label class="input-label">Category</label>
        <select className='form-control'>
        <option>Beverages</option>
        <option>Meat and Fish</option>
        <option>Meat and Fish</option>
        <option>Meat and Fish</option>
        <option>Meat and Fish</option>
        </select>
        </div>
        <div className='form-group'>
            <label class="input-label">Expiry Date</label>
            <input type="date" className="form-control" placeholder='' />
        </div>
        <div className='form-group'>
            <label class="input-label">Discount Amount</label>
            <input type="text" className="form-control" placeholder='Discount Amount' />
        </div>

    </div>




<div className='col-md-12 d-flex justify-content-end'>
    <button type="reset" className='btn btn-1 '>Reset</button>
    <button type="submit" className='btn btn-2'>Submit</button>
</div>
</div>
</form>
 </div>
</div>

<div className="card">
<div class="card-header border-0">
    
    <h5 className="card-title">
<span>
    Discount list
</span>
<span class="badge">
2
</span>
    </h5>
  
    {/* <div className='input-group'>
    
        <input type="search" className='form-control' placeholder='Search by Name' />
       
        <div className='input-group-append'>
<button type="submit" className='input-group-text'>Search</button>
        </div>
    </div> */}

<div class="col-md-4">  
  <div class="input-group mb-3"> 
  <input type="text" class="form-control" placeholder="Search by name" />
  <button class="btn search" type="button" id="button-addon2">Search</button>
  </div>
  </div>  
    
</div>
<div className='card-body'> 
<div className='table-responsive overflow-x-scroll'>
    <table className='table table-borderless'>

               <tr className='table-header'>
                <th>SL</th>
                <th>Title</th>
                <th>Discount Type</th>
                <th>Discount on</th>
                <th>Discount Amount</th>
                <th>Maximum Amount</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Action</th>
               </tr>


                <tr>
                    <td>1</td>
                    <td>MF</td>
                    <td>Amount</td>
                    <td>Meat and Fish</td>
                    <td>20.00$</td>
                    <td>-</td>
                    <td>25 Mar, 2023 - 31 May, 2024</td>
                    <td><label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' /></label></td>
                    <td><button class="icon-1" ><Pencil/></button><button class="icon-2"><Trash/></button></td>
                </tr>
    </table>

</div>
</div>
</div>
    </div>
    </>
  )
}

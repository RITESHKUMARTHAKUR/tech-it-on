import React,{useState, useEffect, useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {db} from '../firebase.config'
import {Navigate, useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'
import {v4 as uuidv4} from 'uuid'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import opencage from 'opencage-api-client'
import "../css/Payment.css"
import {toast} from 'react-toastify'

function PaymentListing() {
  



  const navigate = useNavigate()

 const onClick=()=>{
  toast.success("payment successfully done")
  navigate('/profile-credit')
  
 }

    
  return (
    <div class="container d-lg-flex p">
              <div class="box-2">
                 <div class="box-inner-2"> 
                 <div>
                   <p class="fw-bold">Payment Details</p> 
                   <p class="dis mb-3">Complete your purchase by providing your payment details</p>
                    </div> 
                    <form action="">
                       
                       <div class=" my-3"> <p class="dis fw-bold mb-2">Amount</p>
                                 <input class="form-control" type="text" placeholder="enter multiple of 50"/>
                        
                        </div>
                        <div class="mb-3"> 
                       <p class="dis fw-bold mb-2">Email address</p>
                        <input class="form-control" type="email" placeholder="abc@gmail.com"/> 
                        </div> 
                        <div> 
                          <p class="dis fw-bold mb-2">Card details</p>
                           <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                             <div class="fab fa-cc-visa ps-3"></div> <input type="text" class="form-control" placeholder="Card Details"/>
                              <div class="d-flex w-50"> <input type="text" class="form-control px-0" placeholder="MM/YY"/>
                               <input type="password" maxlength='3' class="form-control px-0" placeholder="CVV"/> 
                               </div> 
                               </div> 
                               <div class="my-3 cardname"> 
                               <p class="dis fw-bold mb-2">Cardholder name</p> 
                               <input class="form-control" type="text"/> </div> <div class="address"> 
                               <p class="dis fw-bold mb-3">Billing address</p> <select class="form-select" aria-label="Default select example"> 
                               <option selected hidden>United States</option> 
                               <option value="1">India</option>
                               </select> <div class="d-flex"> 
                               <input class="form-control zip" type="text" placeholder="ZIP"/>
                                <input class="form-control state" type="text" placeholder="State"/> 
                                </div> 
                                   
                                  <div class="my-3"> <p class="dis fw-bold mb-2">Discount Code</p>
                                   <input class="form-control text-uppercase" type="text" value="BLACKFRIDAY" id="discount"/>
                                    </div> 
                                   
                                    <div class="d-flex align-items-center justify-content-between mb-2"> 
                                    <div class="d-flex align-items-center"> 
                                     <div class="btn btn-primary mt-2" onClick={onClick}>Pay<span class="fas fa-dollar-sign px-1"></span></div></div></div></div></div></form></div></div></div>
  )}


export default PaymentListing
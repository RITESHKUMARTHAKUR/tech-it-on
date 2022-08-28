import { Button } from 'bootstrap'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {collection, query, where, orderBy, limit,startAfter, getDocs } from 'firebase/firestore'
import {db} from "../firebase.config"
import {toast} from 'react-toastify'

function Search() {
  
  return (
       <div>
         <form>
            <input type="text" className="searchInput" placeholder='Search' id='text' />
            <div className="signInBar">
              <button className="signInText btn btn-dark" style={{position:"relative",bottom:70 , borderRadius:40,fontSize:20}}>
                Search
              </button>
            <div classname="ui search">
              <div classname="ui icon input">
                <input type="text" placeholder="Search Gyms" classname="prompt"/>
                  <i className="search icon"></i>
              </div>
              </div>
            </div>
         </form>
       </div>
  )
  }

export default Search

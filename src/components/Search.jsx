import { Button } from 'bootstrap'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {collection, query, where, orderBy, limit,startAfter, getDocs, loadBundle } from 'firebase/firestore'
import {db} from "../firebase.config"
import {toast} from 'react-toastify'

function Search() {
  const [listings, setListings] = useState([])
  const [loading,setLoading] = useState(true)
  const [search, setSearch] = useState('')
  
  const params = useParams()


  const handleSearch=async() => {
    if(search){
      const response=db.collection('listings');
      const data=await response.get();
      console.log(data);
    
      const searched = data.filter(
       (listings)=> listings.name.toLowerCase().includes(search)
       ||listings.location.toLowerCase().includes(search)
     );
     setListings(searched)
    }
 }
  
  
  return (
       <div>
         <form>
           
            <div className="signInBar">
             <input type="text" className="searchInput" placeholder='Search' id='text' onChange={e => setSearch(e.target.value)} /> 
              <button className="signInText btn btn-dark" style={{position:"relative",bottom:20,left:6 , borderRadius:40,fontSize:20}} onClick={handleSearch}>
                Search
              </button>
            </div>
         </form>
       </div>
  )
  }

export default Search

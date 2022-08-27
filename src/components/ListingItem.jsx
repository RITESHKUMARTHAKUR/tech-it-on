import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'
import Search from './Search'

function ListingItem({listing, id, onDelete}) {
  return (
    <div>
    
   <li className='categoryListing'>
     <Link to={`/category/${listing.type}/${id}`} className='categoryListingLink'>
     <img src={listing.imageUrls[0]} alt={listing.name} className='categoryListingImg'/>
        <div className="categoryListingDetails">
            <p className="categoryListingLocation">
                {listing.location}
            </p>
            <p className="categoryListingName">{listing.name}</p>

            <p className="categoryListingPrice">
                ${listing.offer ? listing.discountedPrice 
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                :listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                {listing.type=== 'rent' && ' / Month'}  
            </p>
        </div>
        
     </Link>
    

     {onDelete && (
         <DeleteIcon className='removeIcon' fill='rgb(231,76,60)' onClick={()=>onDelete(listing.id, listing.name) } />
     )}
   </li>
   </div>
  )
}

export default ListingItem
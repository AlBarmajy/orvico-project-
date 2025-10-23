import React from 'react'

export default function ServicesPage() {
  return (
    <>
        <div>
            <h2 className='text-center'>Explore Service</h2>
        <div className="service-search d-flex flex-column align-items-center gap-3 mt-4">
            <input type="search" name="search-service" id="search-service" placeholder='Search for a service'/>
            <ul>
                <li>All Categories</li>
                <li>Carpenter services</li>
                <li>Mechanic services</li>
                <li>Electrician services</li>
                <li>Plumber services</li>
                <li>Chief services</li>
                <li>Farmer services</li>
                <li>Pinter services</li>
                <li>Furniture lifting services</li>
            </ul>
        </div>
        </div>
    </>
  )
}

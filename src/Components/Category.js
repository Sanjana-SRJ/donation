import React from 'react'
import SingleDonation from './SingleDonation'
import "../css/SingleDonation.css"
import '../css/category.css'

function Category(props) {
    let donations = props.donateItems.map((item) => {
      
        return (
            <div style={{height:'450px', padding:'10px'}} key={item.id}>
            <SingleDonation donateItem={item}/>
            </div>
        )
    })
    return (
        <div className="card-styling">
            {donations}
        </div>
    )
}

export default Category

// background-color: #f9c688;
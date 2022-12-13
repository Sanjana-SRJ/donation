import React from 'react'
import ProgressBar from './ProgressBar'
import '../css/SingleDonation.css'
import { Link } from 'react-router-dom'

function SingleDonation(props) {
    let d = props.donateItem
    return (
        <div className='row'>
            <Link to={{ pathname: `/donationinfo/${d.id}` }}>
                <div className="card" style={{ width: "20rem" }}>
                    <img src={d.imageSrc} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title card_title">{d.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">By {d.ngoName}</h6>
                        <p className="card-text">
                            {d.procuredAmount} raised out of {d.totalAmount}
                        </p>
                        <ProgressBar percent={d.percentage} />
                        <div>
                            {d.daysLeft} days left
                        </div>
                        <div>
                            {d.backersCount} Backers
                        </div>
                        <button className="btn btn-outline-primary"><ion-icon name="logo-facebook"></ion-icon>Share</button>
                        <button className='gradient btn text-white'>Donate Now</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleDonation
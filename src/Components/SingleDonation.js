import React from 'react'
import ProgressBar from './ProgressBar'
import '../css/SingleDonation.css'
import { Link } from 'react-router-dom'

function SingleDonation(props) {
    let d = props.donateItem
    return (
        <div className='column'>
            <Link to={{ pathname: `/donationinfo/${d.id}` }}>
                <div className="card  _card">
                    <img src={d.imageSrc} className="card-img-top card_img_top" alt=""/>
                    <div className="card-body">
                        <div>
                            <h5 className="card-title card_title">{d.title}</h5>
                            <div className='card_ngo_name'>
                                <span className="card_subtitle">{d.ngoName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}</span>
                                <span>By {d.ngoName}</span>
                            </div>
                            <div>
                                <div className='card_amount'>
                                    <span className='card_amount_get'>&#x20B9;{Math.ceil(d.procuredAmount)}</span>
                                    <span className='card_amount_remain'> raised out of &#x20B9;{d.totalAmount}</span>
                                </div>
                                <div>
                                    <ProgressBar percent={d.percentage} />
                                </div>
                                <div className='card_days_div'>
                                    <div className='card_left_days'>
                                        <ion-icon name="time-outline"></ion-icon>{d.daysLeft} days left
                                    </div>
                                    <div className='card_backer'>
                                        <ion-icon name="heart-circle-outline"></ion-icon>
                                        {d.backersCount} Backers
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card_button_div'>
                            <button className="card_button card_button_share btn btn-outline-primary"><ion-icon name="logo-facebook" />Share</button>
                            <button className='card_button gradient btn text-white'>Donate Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default SingleDonation
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { response } from './Response';
import '../css/Donationinfo.css';
import Payment from './Payment';

function Donationinfo() {
    const params = useParams();
    const id = params.id;
    let data = response.find(x => x.id === parseInt(id))
    useEffect(() => {
        document.title = data.title
        // window.scrollTo(0, 0)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [data.title])

    return (
        <div style={{display:"grid",justifyContent:"space-around"}}>
            <div className='container-fluid' style={{ marginTop: "100px" }}>
                <div className='don-img'>
                    <img src={data.imageSrc} alt={data.title} />
                </div>
                <div className='don-info'>
                    <span className='don-title'>{data.title}</span><br /><br />
                    <span className='don-ngo'>NGO Name: {data.ngoName}</span><br /><br />
                    <span className='don-des'>{data.shortDesc}</span><br /><br />
                    <span className='don-back'>Number of Donors: {data.backersCount}</span><br />
                    <span className='don-ngo'>Rs{data.procuredAmount} amount out of Rs{data.totalAmount} have been collected.</span><br></br>
                    <span className='don-back'>Days left: {data.daysLeft}</span>
                </div>
            </div>
            <Payment />

        </div>
    )
}

export default Donationinfo
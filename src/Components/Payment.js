import React from 'react';
import "../css/Payment.css";

function Payment() {
    return (
        <div className='pay-card' style={{ marginBottom: "10px" }}>
            <div className='pay-title'>
                <h3>Payment Methods</h3>
            </div>
            <h4>DONATE VIA:</h4>
            <h5>UPI</h5>
            <div className='row'>
                <div className='col-sm-4'>
                    <a href=""><img src="../images/phonepe.png" alt="phonepay" /> </a>
                    <h6>PhonePay</h6>
                </div>
                <div className='col-sm-4'>
                    <a href=""><img src="../images/gpay.png" alt="gpay" /> </a>
                    <h6>GooglePay</h6>
                </div>
                <div className='col-sm-4'>
                    <a href=""><img src="../images/bhim.png" alt="bhimupi" /> </a>
                    <h6>Bhim UPI</h6>
                </div>
            </div>
            <h4>OTHER OPTIONS:</h4>
            <div className='row'>
                <div className='col-sm-4'>
                    <a href=""><img src="../images/paytm.png" alt="paytm" /> </a>
                    <h6>Paytm</h6>
                </div>
                <div className='col-sm-4'>
                    <a href=""><img src="../images/Credit card.png" alt="credit card" /> </a>
                    <h6>Cr./Db. Card</h6>
                </div>
                <div className='col-sm-4'>
                    <a href=""><img src="../images/netbank.png" alt="netbanking" /> </a>
                    <h6>Net Banking</h6>
                </div>
            </div>
        </div>
    )
}

export default Payment
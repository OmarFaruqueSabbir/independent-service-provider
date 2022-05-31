import React from 'react';
import check from '../../images/checkout.jpg'

const CheckOut = () => {
    return (
        <div className='container'>
            <div className="row ms-auto mt-5">
                <div className="col-sm-12">
                    <div className="thumbnail">
                        <img className='h-50 w-50 rounded' src={check} alt="..." />
                        <div className="caption">
                            <h3 className='pt-2'>Please Checkout Here</h3>
                            <p>...</p>
                            <p><a href="#a" className="btn btn-primary" role="button">Checked In</a> <a href="#b" className="btn btn-default" role="button">Checked out</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
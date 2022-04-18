import React from 'react';
import error from'../../../images/error.jpg'

const Notfound = () => {
    return (
        <div className='container'>
            <div className="row ms-auto mt-5">
                <div className="col-sm-12">
                    <div className="thumbnail">
                        <img className='h-50 w-50 rounded' src={error} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;
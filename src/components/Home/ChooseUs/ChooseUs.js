import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className='my-5'>
            <h1 style={{color:'orange',fontFamily:'monospace'}} className='text-center mt-5 mb-5'>Why Sabbir Bake's</h1>
            <div className="container bootstrap snippets bootdeys">
                <div className="row mx-auto">
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                <div className="content">
                                    <h6 className="category">Choose us Because:</h6>
                                    <h4 className="title"><span href="#">Rich Makings</span></h4>
                                    <p className="description">Sabbir Bake's produces every cake items ensuring rich taste,flavor & measuring hygiene of course </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                                <div className="content">
                                    <h6 className="category">Choose Us Because:</h6>
                                    <h4 className="title"><span href="#">Super Packages</span></h4>
                                    <p className="description">Currently we have three exclusive packages. We ensure services affordable & exclusive for all of our clients. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                <div className="content">
                                    <h6 className="category">Choose Us Because:</h6>
                                    <h4 className="title"><span href="#">Delivey on Time</span></h4>
                                    <p className="description">Sabbir Bake's, makes sure on time delivery to valuable customers.Just because to put smile on faces..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
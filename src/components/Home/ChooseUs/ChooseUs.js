import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div>
            <h1 style={{color:'orange',fontFamily:'poppins'}} className='text-center mt-5'>Why Sabbir Bake's</h1>
            <div class="container bootstrap snippets bootdeys">
                <div class="row">
                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                <div class="content">
                                    <h6 class="category">Choose us Because:</h6>
                                    <h4 class="title"><span href="#">Rich Makings</span></h4>
                                    <p class="description">Sabbir Bake's produces every cake items ensuring rich taste,flavor & measuring hygiene of course </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                                <div class="content">
                                    <h6 class="category">Choose Us Because:</h6>
                                    <h4 class="title"><span href="#">Super Packages</span></h4>
                                    <p class="description">Currently we have three exclusive packages. We ensure services affordable & exclusive for all of our clients. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                <div class="content">
                                    <h6 class="category">Choose Us Because:</h6>
                                    <h4 class="title"><span href="#">Delivey on Time</span></h4>
                                    <p class="description">Sabbir Bake's, makes sure on time delivery to valuable customers.Just because to put smile on faces..</p>
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
import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <div class="card float-right">
                <div class="row">
                    <div class="col-sm-5">
                        <img class="d-block w-100" src="https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                    </div>
                    <div class="col-sm-7">
                        <div class="card-block p-5">
                            <h3 class="card-title">Difference between authorization and authentication</h3>
                            <p className='text-justify'>1. Authentication confirms the identity of the user & Authorization sets what resources a user can access. <br />
                                2. Verification of users verified in Authentication process & users are validated in Authorization. <br />
                                3. Authentication happens before Authorization & Authorization starts after Authentication


                            </p>
                            {/* <p>Change around the content for awsomenes</p> */}
                        </div>
                    </div>

                </div>
            </div>

            <div class="card float-right">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="card-block p-5">
                            <h4 class="card-title">Why am i using firebase? What other options available to implement authentication?
                            </h4>
                            <p style={{ textAlign: 'justify' }}>Here i am using firebase for user authentication. Firebase accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods for authentication. <br />
                                <strong>Other options available aside Firebase :</strong> Although Firebase provides flexible features, there's few alternative sources against Firebase. These are: Parse, Back4App, AWS amplify, Kuzzle, Couchbase etc. Most of them are Open-source are more flexible.</p>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <img class="d-block w-100 h-100 p-2" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/06/reactfirebase.png?fit=1528%2C824&ssl=1" alt="" />
                    </div>

                </div>
            </div>

            <div class="card float-right">
                <div class="row">
                    <div class="col-sm-5">
                        <img class="d-block w-100" src="https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                    </div>
                    <div class="col-sm-7">
                        <div class="card-block p-5">
                            <h3 class="card-title">What other services does firebase provide other than authentication?</h3>
                            <p className='text-justify'>
                            Firebase offers a variety of services aside Authentication, the most useful of which are:
                            <div className='ps-5 ms-5'>
                            <li className='text-start'>Cloud FireStore</li>
                            <li className='text-start'>Hosting</li>
                            <li className='text-start'>Cloud Storage</li>
                            <li className='text-start'>Google Analytics</li>
                            <li className='text-start'>Cloud Functions</li>
                            <li className='text-start'>Cloud Messaging</li>
                            </div>

                            </p>
                            {/* <p>Change around the content for awsomenes</p> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;
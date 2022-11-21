import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
            <>
                <div className='bg-dark' >
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="content text-white text-center p-4">
                                    <h2 className='my-4'>LOCATION</h2>
                                    <h5>2215 John Daniel Drive</h5>
                                    <h5>Clark, MO 65243</h5>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="content text-white text-center p-4">
                                    <h2 className='my-4'>AROUND THE WEB</h2>
                                    <i className='fa-brands fa-facebook border rounded-circle p-3 mx-1'></i>
                                    <i class="fa-brands fa-twitter border rounded-circle p-3 mx-1"></i>
                                    <i class="fa-brands fa-linkedin border rounded-circle p-3 mx-1"></i>
                                    <i class="fa-solid fa-globe border rounded-circle p-3 mx-1"></i>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="content text-white text-center p-4">
                                    <h2 className='my-4'>ABOUT FREELANCER</h2>
                                    <p className='px-4'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </>
        )
    }
}

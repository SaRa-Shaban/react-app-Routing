import React, { Component } from 'react'
import styles from './Contact.module.css'


export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container ">
          <h1 className={`d-flex justify-content-center mt-5 fw-bolder pb-1 pt-2 ${styles.sizeHeading}`} >CONTACT</h1>
          <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
            <div className={styles.line}></div>
            <i class="fas fa-star text-dark"></i>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className="container w-50">
          <form action="">
            <div className='mb-3'>
              <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
            </div>
            <div className='mb-3'>
              <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Phone Number" />
            </div>
            <div className='mb-3'>
              <input type="email" class="form-control" id="" placeholder="Email" />
            </div>
            <div className='mb-3'>
              <textarea class="form-control" id="txtarea" rows="4" placeholder="Message" maxlength="100"></textarea>
            </div>
            <button className='btn btn-info mb-5 mt-2 px-4 py-3' type='submit'>send</button>
          </form>
        </div>
      </>
    )
  }
}

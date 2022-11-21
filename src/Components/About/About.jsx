import React, { Component } from 'react'
import styles from './About.module.css'


export default class About extends Component {
  render() {
    return (
      <>
        <div className={styles.bg}>
          <div className="container py-5 text-white">

            <h1 className={`d-flex justify-content-center fw-bolder text-white pb-1 ${styles.sizeHeading}`}>ABOUT</h1>

            <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
              <div className={styles.line}></div>
              <i class="fas fa-star text-white"></i>
              <div className={styles.line}></div>
            </div>

            <div className="row  justify-content-center">

              <div className="col-md-4  ml-auto">
                <div className={styles.content}>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>

              <div className="col-md-4 mr-auto">
                <div className={styles.content}>
                  <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>
    )
  }
}

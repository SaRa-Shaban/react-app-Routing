import React, { Component } from 'react'
import imageCap from '../../images/Capture.PNG'
import styles from './Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className='vh-100 d-flex justify-content-center flex-column align-items-center text-white '>
        <img src={imageCap} className='w-25'/>
        <h1 className={` py-4 ${styles.sizeHeading }`}>START REACT</h1>
        <div className='d-flex justify-content-center align-items-center w-100 py-2 fs-1'>
          <div className={styles.line}></div>
          <i class="fas fa-star text-white"></i>
          <div className={styles.line}></div>
        </div>
        <h3 className='my-4'>Graphic Artist - Web Designer - Illustrator</h3>
        </div>
      </div>
    )
  }
}

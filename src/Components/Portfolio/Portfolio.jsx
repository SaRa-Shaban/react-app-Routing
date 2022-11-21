import React, { Component } from 'react'
import styles from './Portfolio.module.css'
import cabin from '../../images/cabin.png'
import cake from '../../images/cake.png'
import circus from '../../images/circus.png'
import game from '../../images/game.png'
import submarine from '../../images/submarine.png'
import safe from '../../images/safe.png'







export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="container">

          <h1 className={` d-flex justify-content-center mt-5 fw-bolder pb-1 ${styles.portfolio}` }>PORTFOLIO</h1>

          <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
            <div className={styles.line}></div>
            <i class="fas fa-star text-dark"></i>
            <div className={styles.line}></div>
          </div>


          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl ">
              <div class="modal-content ">


                <div className='text-center position-relative'>
                  <h1 class="modal-title pt-3 pb-0 text-uppercase " id="exampleModalLabel">LOG CABIN</h1>

                  <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
                    <div className={styles.line}></div>
                    <i class="fas fa-star text-dark"></i>
                    <div className={styles.line}></div>
                  </div>
                </div>

                <button type="button" class="btn-close  me-auto p-3 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
                  {/* <i className="fas fa-xmark fa-fw" /> */}
                </button>

                <div class="modal-body w-75 mx-auto">
                  <img src={cabin} className='w-100' />
                  <p className='py-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum praesentium, suscipit saepe atque dolor dolore ipsum voluptatem sapiente quae fugiat cumque alias excepturi, expedita officia eos eveniet velit ea?</p>
                </div>

                <button type="button" class="btn btn-info mx-auto mb-4" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close window
                </button>

              </div>
            </div>
          </div>

          {/* <!-- Modal2 --> */}
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl ">
              <div class="modal-content ">


                <div className='text-center position-relative'>
                  <h1 class="modal-title pt-3 pb-0 text-uppercase " id="exampleModalLabel">LOG cake</h1>

                  <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
                    <div className={styles.line}></div>
                    <i class="fas fa-star text-dark"></i>
                    <div className={styles.line}></div>
                  </div>
                </div>

                <button type="button" class="btn-close  me-auto p-3 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
                  {/* <i className="fas fa-xmark fa-fw" /> */}
                </button>

                <div class="modal-body w-75 mx-auto">
                  <img src={cake} className='w-100' />
                  <p className='py-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum praesentium, suscipit saepe atque dolor dolore ipsum voluptatem sapiente quae fugiat cumque alias excepturi, expedita officia eos eveniet velit ea?</p>
                </div>

                <button type="button" class="btn btn-info mx-auto mb-4" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close window
                </button>

              </div>
            </div>
          </div>


          {/* <!-- Modal3 --> */}
          <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl ">
              <div class="modal-content ">


                <div className='text-center position-relative'>
                  <h1 class="modal-title pt-3 pb-0 text-uppercase " id="exampleModalLabel">LOG circus</h1>

                  <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
                    <div className={styles.line}></div>
                    <i class="fas fa-star text-dark"></i>
                    <div className={styles.line}></div>
                  </div>
                </div>

                <button type="button" class="btn-close  me-auto p-3 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
                  {/* <i className="fas fa-xmark fa-fw" /> */}
                </button>

                <div class="modal-body w-75 mx-auto">
                  <img src={circus} className='w-100' />
                  <p className='py-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum praesentium, suscipit saepe atque dolor dolore ipsum voluptatem sapiente quae fugiat cumque alias excepturi, expedita officia eos eveniet velit ea?</p>
                </div>

                <button type="button" class="btn btn-info mx-auto mb-4" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close window
                </button>

              </div>
            </div>
          </div>


          {/* <!-- Modal4 --> */}
          <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl ">
              <div class="modal-content ">


                <div className='text-center position-relative'>
                  <h1 class="modal-title pt-3 pb-0 text-uppercase " id="exampleModalLabel">LOG game</h1>

                  <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
                    <div className={styles.line}></div>
                    <i class="fas fa-star text-dark"></i>
                    <div className={styles.line}></div>
                  </div>
                </div>

                <button type="button" class="btn-close  me-auto p-3 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
                  {/* <i className="fas fa-xmark fa-fw" /> */}
                </button>

                <div class="modal-body w-75 mx-auto">
                  <img src={game} className='w-100' />
                  <p className='py-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum praesentium, suscipit saepe atque dolor dolore ipsum voluptatem sapiente quae fugiat cumque alias excepturi, expedita officia eos eveniet velit ea?</p>
                </div>

                <button type="button" class="btn btn-info mx-auto mb-4" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close window
                </button>

              </div>
            </div>
          </div>


 {/* <!-- Modal5 --> */}
 <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl ">
              <div class="modal-content ">


                <div className='text-center position-relative'>
                  <h1 class="modal-title pt-3 pb-0 text-uppercase " id="exampleModalLabel">LOG sFE</h1>

                  <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
                    <div className={styles.line}></div>
                    <i class="fas fa-star text-dark"></i>
                    <div className={styles.line}></div>
                  </div>
                </div>

                <button type="button" class="btn-close  me-auto p-3 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
                  {/* <i className="fas fa-xmark fa-fw" /> */}
                </button>

                <div class="modal-body w-75 mx-auto">
                  <img src={safe} className='w-100' />
                  <p className='py-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum praesentium, suscipit saepe atque dolor dolore ipsum voluptatem sapiente quae fugiat cumque alias excepturi, expedita officia eos eveniet velit ea?</p>
                </div>

                <button type="button" class="btn btn-info mx-auto mb-4" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close window
                </button>

              </div>
            </div>
          </div>


          {/* <!-- Modal6 --> */}
          <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl ">
              <div class="modal-content ">


                <div className='text-center position-relative'>
                  <h1 class="modal-title pt-3 pb-0 text-uppercase " id="exampleModalLabel">LOG submarine</h1>

                  <div className='d-flex justify-content-center align-items-center w-100 py-2 mb-4 fs-1'>
                    <div className={styles.line}></div>
                    <i class="fas fa-star text-dark"></i>
                    <div className={styles.line}></div>
                  </div>
                </div>

                <button type="button" class="btn-close  me-auto p-3 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
                  {/* <i className="fas fa-xmark fa-fw" /> */}
                </button>

                <div class="modal-body w-75 mx-auto">
                  <img src={submarine} className='w-100' />
                  <p className='py-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum praesentium, suscipit saepe atque dolor dolore ipsum voluptatem sapiente quae fugiat cumque alias excepturi, expedita officia eos eveniet velit ea?</p>
                </div>

                <button type="button" class="btn btn-info mx-auto mb-4" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close window
                </button>

              </div>
            </div>
          </div>



          <div className="row g-5 mb-5">

            <div className="col-md-4">

              <div className={styles.content}>
                <div className={`d-flex justify-content-center align-items-center fs-1 ${styles.layer}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
                <img src={cabin} className='w-100' />
              </div>

            </div>

            <div className="col-md-4">
              <div className={styles.content}>
                <div className={`d-flex justify-content-center align-items-center fs-1 ${styles.layer}`} data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  <i class="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
                <img src={cake} className='w-100' />
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.content}>
                <div className={`d-flex justify-content-center align-items-center fs-1 ${styles.layer}`} data-bs-toggle="modal" data-bs-target="#exampleModal3">
                  <i class="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
                <img src={circus} className='w-100' />
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.content}>
                <div className={`d-flex justify-content-center align-items-center fs-1 ${styles.layer}`} data-bs-toggle="modal" data-bs-target="#exampleModal4" >
                  <i class="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
                <img src={game} className='w-100' />
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.content}>
                <div className={`d-flex justify-content-center align-items-center fs-1 ${styles.layer}`} data-bs-toggle="modal" data-bs-target="#exampleModal5">
                  <i class="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
                <img src={safe} className='w-100' />
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.content}>
                <div className={`d-flex justify-content-center align-items-center fs-1 ${styles.layer}`} data-bs-toggle="modal" data-bs-target="#exampleModal6">
                  <i class="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
                <img src={submarine} className='w-100' />
              </div>
            </div>
          </div>



        </div>
      </>
    )
  }
}

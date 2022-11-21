import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-nav">
          <div className="container">
            <a className="navbar-brand size-logo" href="#">START REACT</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

                <li className="nav-item">
                  <Link className="nav-link active" to = 'portfolio' aria-current="page">PORTFOLIO <span className="visually-hidden">(current)</span></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to ='about'>ABOUT</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to ='contact'>CONTACT</Link>
                </li>
            
              </ul>
            </div>
          </div>
        </nav>


      </>
    )
  }
}

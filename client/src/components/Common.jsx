import React from "react"
import { NavLink } from "react-router-dom"
const Common = (props) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>
                    {props.name} <strong className='barnd-name'>Social-Engineer</strong>
                  </h1>

                  <div className='mt-3'>
                    
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common

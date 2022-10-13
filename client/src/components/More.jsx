import React from "react"
import { NavLink } from "react-router-dom"
const Common = (props) => {
  return (
    <>
      <section id='header' className='text-left'>
        <div className='md'>
          <div className='row'>
            <div className='col-12 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-8 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>
                    {props.name} <strong className='brand-name'>Social-Engineer</strong>
                  </h1>
                  <h2 className='my-3'>Delivering results, reliability, & rock solid dependability.</h2>
                  <div className=''>
                    <NavLink to={props.visit} className='btn btn-primary btn-lg'>
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4 .header-img }'>
                  <img src={props.imgsrc} alt='' className='' />
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

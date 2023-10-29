import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <section id='header' className='header'>
        <div className="header-container">
            <div className="row">
                <div className="home-container">
                    <div className="home-left">
                      <h1>
                        {props.name} 
                        <strong>VERMA</strong></h1>
                           <h2>TIRUPATI JEWELLER's{props.text}
                           <br />
                           </h2>
                            <h4>{props.texthp1}</h4><p>{props.textp1}</p>
                            <h4>{props.texthp2}</h4><p>{props.textp2}</p>
                            <h4>{props.texthp3}</h4><p>{props.textp3}</p>
                            <div className="common-btn">
                              <NavLink to={props.visit} className="btn-get-started">
                                {props.btname}
                              </NavLink>

                            </div>
                          </div>

                          <div className='own-img'>
                          <div className="img-shadow">
                          {/* backgroundImage: url({props.imgsrc}) */}
                          <img src={props.imgsrc} alt="" />
                          </div>
                          </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Common;

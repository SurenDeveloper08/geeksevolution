import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"


const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Xremg3Se8EUr91SmYA_a03rqO6Dy5FdvkXKqAahyVivoGdSNRalRi4unlSw5xRPk4IM&usqp=CAU' alt='img about' />
          </div>
          <div className='right row'>
            <Heading subtitle='Simple Website' title='About Us' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
       </>
  )
}

export default AboutCard

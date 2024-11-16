import React from 'react'
import "../stayle/bottom.css"
import bottom1 from "../img/profil.png"
import bottom2 from "../img/profil2.png"
function Bottom() {
  return (
    <div>
         <section className='profil'>
    <div className="container">
    <div className="pro">
    <img src={bottom2} alt="" />
            </div>
        <div className="profil_wrapper">
         
            <div className="profil_w1">
    <img src={bottom1} alt="" />
            </div>
            <div className="profil_w2">
    <span>Our product</span>
                <h2>You tell us your stress,
                We make your diary</h2>
                <p>Everyone experiences it, and in different ways.
                Let Alivio guide you, in a personalized journal experience, to overcome your stress.
                </p>
                <button>Find Your Way</button>
            </div>
        </div>
    </div>
     </section>
    </div>
  )
}

export default Bottom

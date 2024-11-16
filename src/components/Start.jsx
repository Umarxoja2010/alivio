import React from 'react'
import "../stayle/start.css"
import start from "../img/start.png"
function Start() {
  return (
<section className='start'>
<div className="container">
    <div className="start_wrapper">
        <div className="star_w1">
            <h2>Let's hear about Kayla's success story</h2>
            <p>See how well Alivio works in a real customer’s life. </p>
            <button>Let’s get started</button>
        </div>
        <div className="star_w2">
<img src={start} alt="" />
        </div>
    </div>
</div>
</section>
  )
}

export default Start

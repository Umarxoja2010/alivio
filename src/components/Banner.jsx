import React from 'react'
import "../stayle/banner.css"
import banner1 from "../img/banner1.png"
import banner2 from "../img/banner2.png"
import banner3 from "../img/banner3.png"
function Banner() {
  return (
<section className='banner'>
<div className="container">
    <div className="banner_wrapper1">
        <h2>Understand & Release 
        the stress in 3 steps</h2>
        <p>Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.</p>
    </div>
    <div className="banner_wrapper2">
        <div className="ban_w1">
            <h2>Personalize</h2>
            <p>Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!</p>
<img src={banner1} alt="" />
        </div>
        <div className="ban_w2">
            <h2>Write & Understand</h2>
            <p>Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!</p>
<img src={banner2} alt="" />
        </div>
        <div className="ban_w1">
            <h2>Alivio!</h2>
            <p>Now you are aware, and have a way to manage and overcome your own stress.
            What are you waiting for? Alivio today!</p>
<img src={banner3} alt="" />
        </div>
   
    </div>
</div>
</section>
  )
}

export default Banner

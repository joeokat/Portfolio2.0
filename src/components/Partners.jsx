import React from 'react'
import mrbeast from "../assets/logos/mrbeast.svg"

export const Partners = () => {
  return (
    <div className='partner--container'>
        <h2>Partners</h2>
        <div class="logos">
            <div class="logos-slide">
                
                <img src={mrbeast} alt=''/>
                <img src={mrbeast} alt=''/>
            </div>
        </div>

        <div className='cta-btn'>
            <div className="pricing--plans">Pricing Plans</div>
            <div className="see--mywork">See my work</div>
        </div>
    </div>
  )
}

<script>
    let copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
</script>
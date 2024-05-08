import React from 'react'
import linkedin from "../assets/logos/linkedin.svg"
// import fleet from "../assets/logos/fleet.svg"
import figma from "../assets/logos/figma.svg"
import fiver from "../assets/logos/fiver.svg"

export const Partners = () => {
  return (
    <div className='partner--container'>
        <h2>Partners</h2>
        <div class="logos">
            <div class="logos-slide">
                {/* <img src={fleet} alt=''/> */}
                <img src={fiver} alt=''/>
                <img src={figma} alt=''/>
                <img src={linkedin} alt=''/>
                
            </div>
        </div>
    </div>
  )
}

<script>
    let copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
</script>
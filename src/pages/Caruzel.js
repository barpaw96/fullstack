import React from 'react'
import 'bootstrap/dist/js/bootstrap'
import FOTO1 from "./FOTO1.jpg"
import FOTO2 from "./FOTO2.jpg"
import FOTO3 from "./FOTO3.jpg"

export default function Caruzel() {
  return (
    <div>
    
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={FOTO1} className="d-block w-10" alt="foto1"/>
    </div>
    <div class="carousel-item">
    <img src={FOTO2} className="d-block w-10" alt="foto2"/>
    </div>
    <div class="carousel-item">
    <img src={FOTO3} className="d-block w-10" alt="foto3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    </div>
  )
}

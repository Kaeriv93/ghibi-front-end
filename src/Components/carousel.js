import '../styles/carousel.css'

const Carousel=()=>{
    return(
    <div>
        <div class="carousel">
          <ul class="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li class="slide-container">
              <div class="slide-image">
                <img src="https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg" alt="studio-ghibli"/>
              </div>
              <div class="carousel-controls">
                <label for="img-3" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-2" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li class="slide-container">
              <div class="slide-image">
                <img src='https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg' alt="studio-ghibli"/>
              </div>
              <div class="carousel-controls">
                <label for="img-1" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
              <div class="slide-image">
                <img src='https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg' alt="studio-ghibli"/>
              </div>
              <div class="carousel-controls">
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div class="carousel-dots">
              <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
              <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
              <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>)
}
export default Carousel

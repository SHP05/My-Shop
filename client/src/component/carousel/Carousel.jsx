import { CCarousel , CCarouselItem , CImage } from '@coreui/react';

const Carousel = () =>{
    return(
        <>
<CCarousel controls className='h-100vh'>
  <CCarouselItem>
    <CImage className="d-block w-100" height={600} src="/assets/sale2.jpg" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100"  height={600} src="/assets/sale.png" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" height={600} src="/assets/shoes.jpg" alt="slide 3" />
  </CCarouselItem>
</CCarousel>
        </>
    )
}

export default Carousel;
import { CCarousel , CCarouselItem , CImage } from '@coreui/react';

const Carousel = () =>{
    return(
        <>
<CCarousel controls className='h-100vh'>
<CCarouselItem>
    <CImage className="d-block w-100" height={400} src="/assets/phone1.jpg" alt="slide 4" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" height={400} src="/assets/macbook1.jpg" alt="slide 6" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" height={400} src="/assets/sale2.jpg" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100"  height={400} src="/assets/sale.png" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" height={400} src="/assets/laptop1.jpg" alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" height={400} src="/assets/offers.jpg" alt="slide 5" />
  </CCarouselItem>
</CCarousel>
        </>
    )
}

export default Carousel;
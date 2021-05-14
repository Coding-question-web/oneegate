/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import ButtonGroup from 'components/button-group';
import MarketingItem from 'components/marketing-item'
import MarketingImg1 from 'assets/marketing-1.jpg'
import MarketingImg2 from 'assets/marketing-2.jpg'
import MarketingImg3 from 'assets/marketing-3.png'
import MarketingImg4 from 'assets/marketing-4.jpg'
import MarketingImg5 from 'assets/marketing-5.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 1,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function MarketingCarousel() {

  const [details, _] = useState([
    {
      image: MarketingImg1,
      upDesc: 'REDEFINING DIGITAL TRANSFORMATION',
      heading: 'FULL-SERVICE DIGITAL MARKETING AGENCY',
    },
    {
      image: MarketingImg2,
      heading: 'TRANSFORMING THE WORLD THROUGH DIGITALIZATION',
      lowDesc: 'Combining needs to get an out-of-the-ordinary originative vision to reach the optimum results and helping organizations of all sizes mount the intricacy of today’s digital world to achieve outputs that last far beyond a digital strategy.'
    },
    {
      image: MarketingImg3,
      heading: 'REVOLUTIONIZING MEDICAL CONNECTIONS',
      lowDesc: 'Limitless Triage Methodology of online presence, digital marketing and online consultation which empowers, optimizes, transforms and connects HCPs, customers and Pharma Ensuring facilitated healthcare processes every step of the way And much more…'
    },
    {
      image: MarketingImg4,
      heading: 'CRAFTING EXPERIENCES THROUGH CREATIVITY',
      lowDesc: 'Adding prospects to hospitality brands with a strong online presence and continuous efforts to remain above trends enables us to provide both, brands and audiences, the desired quality of deliverables to set the bar high for digital standards.'
    },
    {
      image: MarketingImg5,
      heading: 'BRINGING JOY THROUGH REELS',
      lowDesc: 'Anchoring the digital expertise and production potencies with smart incorporated planning, emotional comprehension, artful design and insightful analysis that create sustainable engagement Spotting beauty with our cameras and excellence in every take'
    }
  ])

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 1,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
  // <div sx={styles.banner}>
    <Carousel {...sliderParams}>
      {details.map((item, index) => (
        <MarketingItem item={item} key={index} />
      ))}
    </Carousel>
    // </div>
  )
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px+', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
  },
};

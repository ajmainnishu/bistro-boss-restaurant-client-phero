import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import slideImg1 from '../../../assets/images/home/foodCarousel/slide1.jpg';
import slideImg2 from '../../../assets/images/home/foodCarousel/slide2.jpg';
import slideImg3 from '../../../assets/images/home/foodCarousel/slide3.jpg';
import slideImg4 from '../../../assets/images/home/foodCarousel/slide4.jpg';

const FoodCarousel = () => {
    return (
        <div className='w-9/12 mx-auto'>
            {/* section title */}
            <SectionTitle title={'ORDER ONLINE'} subTitle={'From 11:00am to 10:00pm'}></SectionTitle>
            {/* food category items */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-12"
            >
                {/* slide 1 */}
                <SwiperSlide className='pb-12'>
                    <img src={slideImg1} alt="slider image" className='mx-auto w-full' />
                    <h3 className='font-cinzel font-normal md:text-3xl text-center pb-20 text-white absolute left-1/3 bottom-0'>SALADS</h3>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide className='pb-12'>
                    <img src={slideImg2} alt="slider image" className='mx-auto w-full' />
                    <h3 className='font-cinzel text-center font-normal text-3xl pb-20 text-white absolute left-1/3 bottom-0'>PIZZAS</h3>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide className='pb-12'>
                    <img src={slideImg3} alt="slider image" className='mx-auto w-full' />
                    <h3 className='font-cinzel text-center font-normal text-3xl pb-20 text-white absolute left-1/3 bottom-0'>SOUPS</h3>
                </SwiperSlide>
                {/* slide 4 */}
                <SwiperSlide className='pb-12'>
                    <img src={slideImg4} alt="slider image" className='mx-auto w-full' />
                    <h3 className='font-cinzel text-center font-normal md:text-3xl pb-20 text-white absolute left-1/3 bottom-0'>DESSERTS</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCarousel;
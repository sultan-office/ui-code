import './App.css';
import Card1 from './Component/Card/Card1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";


// Import Swiper styles
import 'swiper/css';

function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className} w-4 h-4 rounded-full border-2 border-blue-500"></button>`;
    },

    el: ".cardSwiperDots",
    type: 'bullets',
  };


  return (
    <div className="App">
      <div className='container mx-auto py-20'>
        <div className="">
          <Swiper
            spaceBetween={32}
            slidesPerView={3}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"

          // pagination={{
          //   el: ".cardSwiperDots",
          //   type: 'bullets',
          //   clickable: true,
          // }}



          >

            {
              Array(10).fill().map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card1 />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

        <div className='flex items-center justify-between'>
          {/* Slider Dots */}
          <div className='flex justify-center mt-10 gap-x-4 cardSwiperDots p-4 border'>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

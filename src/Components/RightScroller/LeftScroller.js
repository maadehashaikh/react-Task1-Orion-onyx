import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import './styles.css'

const LeftScroller = () => {
  return (
    <div className=' h-full'>
      <Swiper className='ml-3'
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        autoplay={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src='https://tse2.mm.bing.net/th?id=OIP.1H4TjeN5dyNQdkXtz-q7IwHaE2&pid=Api&P=0&h=220'></img>
          <div className='description flex-col  h-full'>
          <div className='ratingsSec w-[80%] h-8 ml-10 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'> Waseem Aslam</p>
          <p className='text-sm  font-medium text-white'>CEO & Co-Founder </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d'></img>
          <div className='description flex-col h-full'>
          <div className='ratingsSec w-[80%] h-8 ml-14 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'> Muhammad Akmal </p>
          <p className='text-sm  font-medium text-white'>Managing Director </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse3.mm.bing.net/th?id=OIP.cive38eqp7C2RKVt4xkzbQHaLH&pid=Api&P=0&h=220'></img>
        <div className='description flex-col  h-full'>
          <div className='ratingsSec w-[80%] h-8 ml-10 flex mr-1'>
          <div className='fourstars flex w-auto mt-5 mb-3 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'> Aseem Aslam </p>
          <p className='text-sm  font-medium text-white'>Director Operations</p>
          </div>
          </div>

          
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse3.mm.bing.net/th?id=OIP.xtViBqtQwL-sXEtETzKoKwHaHa&pid=Api&P=0&h=220'></img>
        <div className='description flex-col  h-full'>
          <div className='ratingsSec w-[80%] h-8 ml-14 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'> Hina Afzal</p>
          <p className='text-sm  font-medium text-white'>HR Manager </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse3.mm.bing.net/th?id=OIP.5ULYZY56EMkesegRk7gkZgHaHR&pid=Api&P=0&h=220'></img>
        <div className='description flex-col  h-full'>
          <div className='ratingsSec w-[80%] h-8 ml-14 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
  
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'> Aqsa Shafeeq</p>
          <p className='text-sm  font-medium text-white'>Accountant </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://w0.peakpx.com/wallpaper/107/46/HD-wallpaper-best-pose-for-profile-for-men-profile-pose-men-best-glasses.jpg' className='ml-6'></img>
          <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-16 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'> Muhammad Babar</p>
          <p className='text-sm  font-medium text-white'>Admin Officer </p>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://tse1.mm.bing.net/th?id=OIP.MJQ4KnLLYRTDjRyg8YmQ8wHaHa&pid=Api&P=0&h=220' className='ml-2'></img>
          <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-16 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Haris Baig</p>
          <p className='text-sm  font-medium text-white'>Senior Web Developer & Team leader </p>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <img src='https://i.pinimg.com/originals/e5/3c/6b/e53c6bfa45da3f684fda60c4b21b1307.jpg' 
        className='ml-2'></img>
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-10 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Muhammad Rohan</p>
          <p className='text-sm  font-medium text-white'>Web Developer</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse4.mm.bing.net/th?id=OIP.HfN0cMr4-MPn3i7UTVW56gHaHa&pid=Api&P=0&h=220' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-10 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Maadeha Shaikh</p>
          <p className='text-sm  font-medium text-white'>Web Developer</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse3.mm.bing.net/th?id=OIP.YIre5HGHiqBa7DCmrF4KwwAAAA&pid=Api&P=0&h=220' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-20 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>  
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Muhammad Jawad </p>
          <p className='text-sm  font-medium text-white'>Data Analyst</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-wearing-hijab-with-smile-face_488586-717.jpg' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-14 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Madeeha Amir </p>
          <p className='text-sm  font-medium text-white'>Digital Marketer</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse4.mm.bing.net/th?id=OIP.IfLCnXe1nFUP31mTtPRU1wHaHa&pid=Api&P=0&h=220' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-20 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Hafiz Subhan</p>
          <p className='text-sm  font-medium text-white'>Digital Marketer</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://img.freepik.com/premium-photo/muslim-hijab-girl-corporate-office-desk-with-laptop-ai-generated_669954-501.jpg' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-16 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Ms. Aqsa</p>
          <p className='text-sm  font-medium text-white'>Digital Marketer</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse1.mm.bing.net/th?id=OIP.I_9jtCJim2ou9DpEKjHO_wAAAA&pid=Api&P=0&h=220' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-20 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Ms.Zarnish</p>
          <p className='text-sm  font-medium text-white'>Digital Marketer</p>
          </div>
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://www.luxyhijab.com/wp-content/uploads/2019/12/premium-hijab-l83.jpg' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-20 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Maham Ayesha</p>
          <p className='text-sm  font-medium text-white'>Digital Marketer</p>
          </div>
          </div>        

       
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://tse4.explicit.bing.net/th?id=OIP.LHWly935Yzbg09y8ssPpqQHaHa&pid=Api&P=0&h=220' className='ml-2' alt='Description of image' />
        <div className='description flex-col h-full '>
          <div className='ratingsSec w-[80%] h-8 ml-20 flex mr-1 mb-4 '>
          <div className='fourstars flex w-auto mt-5 text-xs text-yellow-400'> 
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div> 
          <div className='mt-2 text-xs'>  
          <i class="fa-solid fa-check ml-3 mt-1 border-2 border-blue-50 rounded-full p-1 text-white bg-green-500"></i>
          </div>
          </div>
          <div className='description w-[90%] mt-4'>
          <p className='text-lg font-bold text-white'>Maryam Nasir</p>
          <p className='text-sm  font-medium text-white'>Digital Marketer</p>
          </div>
          </div>      
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default LeftScroller;

import React, { useState, useEffect, useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../thirdBlock.css';

import imagesSmartphone from '../../assets/imagesSmartphone';
import imagesVector from '../../assets/imagesVector';

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );
    element.current && observer.observe(element.current);
    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};

const TextDescriptionOfApp = (props) => {
  const featuresParagraph = [
    'We customizes features to your preferences, adapting each module to your comfort, eliminating the need to waste time on unnecessary settings.',
    'Our platform allows users to easily add functionality through user - created content, shaped by the community to meet their needs.',
    'Application offers unique anonymous payment options with instant, commission - free transfers in crypto and fiat worldwide.',
    'Messaging platform ensures complete security and privacy, protecting your messages and data from any third - party access, including servers.'];
  const featuresHeading = [
    <h1 className="font-bold text-56 text-white not-italic mb-c-40
                   laptop:text-46 laptop:mb-c-25
                   small-pc:text-[36px] small-pc:mb-[17px]
                   mobile:text-36 mobile:mb-[30px] mobile:h-[140px]"
    >
      Full
      <br />
      personalization
      <br />
      of the messenger
    </h1>,
    <h1 className="font-bold text-56 text-white not-italic mb-c-40
                   laptop:text-46 laptop:mb-c-25
                   small-pc:text-[36px] small-pc:mb-[17px]
                   mobile:text-36 mobile:mb-[30px]"
    >
      Open platform
      <br />
      of custom
      <br />
      applications
    </h1>,
    <h1 className="font-bold text-56 text-white not-italic mb-c-40
                   laptop:text-46 laptop:mb-c-25
                   small-pc:text-[36px] small-pc:mb-[17px]
                   mobile:text-36 mobile:mb-[30px]"
    >
      Easy
      <br />
      payment
    </h1>,
    <h1 className="font-bold text-56 text-white not-italic mb-c-40
                   laptop:text-46 laptop:mb-c-25
                   small-pc:text-[36px] small-pc:mb-[17px]
                   mobile:text-36 mobile:mb-[30px]"
    >
      Full
      <br />
      end-to-end
      <br />
      encryption
    </h1>];

  return (
    <div
      className=" pt-c-40 mr-c-50
                 mobile:mb-[30px]"
    >
      {featuresHeading[props.number]}
      <p className="w-500 not-italic text-28 text-white opacity-50
                    laptop:text-16 laptop:w-385
                    small-pc:text-14 small-pc:w-270
                    mobile:text-16 mobile:w-[312px]"
      >
        {featuresParagraph[props.number]}
      </p>
    </div>
  );
};

const SlideNextButton = (props) => {
  const swiper = useSwiper();
  return (
    <button
      type="submit"
      style={{
        backgroundImage: `url(${imagesVector.CaretRight})`,
        backgroundSize: '70%',
      }}
      aria-label="Caret right"
      className={`w-52 h-52 rounded-xl border border-solid border-white bg-no-repeat bg-center
                  laptop:w-42 laptop:h-42 laptop:rounded-[10px]
                  small-pc:w-[32px] small-pc:h-[32px] small-pc:rounded-[8px]
                  ${props.number === 3 && 'opacity-60'}`}
      onClick={() => swiper.slideNext()}
    />
  );
};

const SlidePrevButton = (props) => {
  const swiper = useSwiper();

  return (
    <button
      type="submit"
      style={{
        backgroundImage: `url(${imagesVector.CaretRight})`,
        backgroundSize: '70%',
      }}
      aria-label="Caret right"
      className={`w-52 h-52 rounded-xl border border-solid border-white bg-no-repeat bg-center rotate-180 
                  laptop:w-42 laptop:h-42 laptop:rounded-[10px]
                  small-pc:w-[32px] small-pc:h-[32px] small-pc:rounded-[8px]
                  ${props.number === 0 && 'opacity-60'}`}
      onClick={() => swiper.slidePrev()}
    />
  );
};

const ThirdBlock = () => {
  let [Num, setNum] = useState(0);
  const [countSwiper, setCountSwiper] = useState(0);
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px');

  return (
    <section
      ref={ref}
      className="flex relative w-full mx-auto max-w-c-10 mb-18
                 laptop:w-950
                 small-pc:w-704 small-pc:mb-12
                 mobile:max-w-c-2 mobile:flex-col"
    >
      <TextDescriptionOfApp number={Num} />
      <div className="containerSwiper relative w-572 cursor-pointer pt-0 pb-0.5
                      after:absolute after:top-0 after:right-0 after:w-1/4 after:h-full after:z-20
                      before:absolute before:top-0 before:left-0 before:w-1/4 before:h-full before:z-20
                      laptop:w-[460px] small-pc:w-[352px] mobile:w-[320px]"
      >
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          modules={[Autoplay, Pagination, Navigation]}
          watchSlidesProgress
          onSlideChange={
            (swiper) => {
              setNum(Num = swiper.activeIndex);
              if (!inViewport) {
                setCountSwiper((prevState) => prevState + 1);
                if (countSwiper % 2 === 0) {
                  swiper.autoplay.stop();
                  swiper.slideTo(0);
                  swiper.autoplay.start();
                }
              }
            }
          }
        >
          <SwiperSlide>
            <div className="laptop:relative laptop:w-full mobile:pb-[25px]">
              <div className="absolute w-40 top-[70px] right-[-30px]
                              laptop:top-[10px] laptop:w-[320px]
                              small-pc:top-[20px] small-pc:w-[243px]
                              mobile:top-[15px] mobile:w-[230px]"
              >
                <img className="w-404 laptop:w-[320px] small-pc:w-[243px] mobile:w-[230px]" src={imagesSmartphone.Features} alt="features" />
              </div>
              <img className="w-265 laptop:w-[460px] small-pc:w-[160px] mobile:w-[191px]" src={imagesSmartphone.FirstMobile} alt="mobile" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-265 laptop:w-[460px] small-pc:w-[160px] mobile:w-[191px]" src={imagesSmartphone.SecondMobile} alt="mobile" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-265 laptop:w-[460px] small-pc:w-[160px] mobile:w-[191px]" src={imagesSmartphone.ThirdMobile} alt="mobile" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-265 laptop:w-[460px] small-pc:w-[160px] mobile:w-[191px]" src={imagesSmartphone.ForthMobile} alt="mobile" />
          </SwiperSlide>
          <div className="buttons">
            <SlidePrevButton number={Num} />
            <SlideNextButton number={Num} />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ThirdBlock;

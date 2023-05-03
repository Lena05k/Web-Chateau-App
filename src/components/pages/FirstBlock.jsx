import React from 'react';
import imagesSmartphone from '../../assets/imagesSmartphone';
import imagesContacts from '../../assets/imagesContacts';
import imagesGradiend from '../../assets/imagesGradiend';
import { imagesLogo } from '../../assets/imagesLogo';

const FirstBlock = () => (
  <section className="relative max-w-c-10 h-620 bg-blue-850 mx-auto mb-18 rounded-32 overflow-hidden
                  laptop:w-950 laptop:h-504
                  small-pc:rounded-20 small-pc:h-394 small-pc:w-704 small-pc:mb-12
                  mobile:max-w-c-2 mobile:h-699 mobile:mb-c-44"
  >
    <div>
      <div className="flex pt-10 pl-16 z-20
                      small-pc:pt-8 small-pc:pl-10
                      mobile:pl-c-16 mobile:pt-c-16"
      >
        <img
          className="small-pc:w-38
                        mobile:w-9 mobile:self-center"
          src={imagesLogo.logo}
          alt="logo"
        />
        <div className="pl-4 text-white text-40 font-Ubuntu font-bold
                        small-pc:text-24
                        mobile:text-24 mobile:self-center"
        >
          Chateau
        </div>
      </div>
      <h2 className="-tracking-2 leading-110percent pl-16 mt-14 pt-0 w-447 text-white text-52 font-bold font-Gilroy z-20
                     small-pc:w-[271px] small-pc:text-32 small-pc:mt-10 laptop:text-40 laptop:mt-8
                     mobile:mt-c-50 mobile:text-36 mobile:pl-c-16 mobile:w-252"
      >
        The next level messenger
      </h2>
      <p className="pl-16 w-418 mt-6 text-white text-24 font-medium font-Gilroy z-20
                    small-pc:text-base-001 laptop:text-22
                    mobile:mt-c-24 mobile:text-16 mobile:pl-c-16"
      >
        Get new experience from using
        <br />
        your familiar messenger
      </p>
      <div className="flex flex-row z-50">
        <div className="flex items-center justify-center ml-16 mt-16 rounded-12 bg-white w-208 h-64 text-black-850 text-24 font-medium font-Gilroy hover:bg-fuchsia-560
                                           small-pc:w-[124px] small-pc:text-16 small-pc:h-[38px] small-pc:rounded-[8px]
                                           mobile:ml-c-16 mobile:mt-c-40 mobile:w-142 mobile:h-48 mobile:text-16"
        >
          <img
            className="mr-c-12
                              small-pc:w-[15%] small-pc:mr-c-6
                              mobile:w-18.8 mobile:mr-c-8 "
            width="32"
            src={imagesContacts.telegram}
            alt="Vector Telegram"
          />
          <a href="https://t.me/chateau_dev">Telegram</a>
        </div>
        <div className="flex items-center justify-center ml-c-24 mt-16 rounded-12 bg-white w-208 h-64 text-black-850 text-24 font-medium font-Gilroy hover:bg-fuchsia-560
                                           small-pc:w-[124px] small-pc:text-16 small-pc:h-[38px] small-pc:rounded-[8px]
                                           mobile:ml-c-12 mobile:mt-c-40 mobile:w-142 mobile:h-48 mobile:text-16"
        >
          <img
            className="mr-c-12
                              small-pc:w-[15%] small-pc:mr-c-6
                              mobile:w-18.8 mobile:mr-c-8"
            width="32"
            src={imagesContacts.twitter}
            alt="Vector Twitter"
          />
          <a href="https://twitter.com/chateau_dev">Twitter</a>
        </div>
      </div>
    </div>
    <div className="absolute right-[-55px] bottom-[-31px] rounded-32 blur-2xl z-0
                   mobile:relative mobile:z-0"
    >
      <img
        className="laptop:w-570
                      small-pc:w-423
                      mobile:mr-[30.4rem]"
        width="700"
        src={imagesGradiend.gradientFirstBlock}
        alt="bg first block"
      />
    </div>
    <div className="absolute right-0 bottom-0 z-20
                   mobile:relative mobile:z-20 mobile:mt-[-293px] mobile:ml-c-20"
    >
      <img
        className="laptop:w-443
                      small-pc:w-351"
        width="544"
        src={imagesSmartphone.mobile}
        alt="Mobiles"
      />
    </div>
  </section>
);

export default FirstBlock;

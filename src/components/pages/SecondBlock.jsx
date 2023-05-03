import React from 'react';

const SecondBlock = () => (
  <section className="relative flex mx-auto max-w-c-10 h-474 mb-96
                    laptop:w-950
                    small-pc:w-704 small-pc:h-302 small-pc:mb-12
                    mobile:max-w-c-2 mobile:h-744 mobile:flex-col mobile:mb-c-80"
  >
    <div className="mr-8
                    laptop:mr-6
                    small-pc:mr-4"
    >
      <div className="flex
                        mobile:flex-col"
      >
        <div className="mr-8 mb-8 w-469 h-HeightFeatures bg-swamp rounded-2xl
                            laptop:w-369 laptop:mr-6 laptop:mb-6
                            small-pc:h-HeightFeaturesTablet small-pc:w-270 small-pc:mr-4 small-pc:mb-4
                            mobile:w-328 mobile:h-136 mobile:mb-4"
        >
          <h3 className="mt-5 ml-24 text-34 font-Gilroy font-bold text-black-850
                               small-pc:text-24  small-pc:ml-5
                               mobile:text-24 mobile:mt-c-16 mobile:ml-c-16"
          >
            Privacy
          </h3>
          <p className="ml-24 mt-10 w-360 text-1.01xl leading-7 text-black-850 font-medium
                              small-pc:mt-8 small-pc:ml-5 small-pc:text-base-001 small-pc:w-[240px]
                              mobile:text-14 mobile:mt-c-24 mobile:ml-c-16 mobile:w-287"
          >
            End-to-end encryption of any
            traffic between two peers interacting with each other
          </p>
        </div>
        <div className="mb-8 w-368 h-HeightFeatures bg-white rounded-2xl
                            laptop:w-318 laptop:mb-6
                            small-pc:w-238 small-pc:mb-4 small-pc:h-HeightFeaturesTablet
                            mobile:w-328 mobile:h-136 mobile:mb-4"
        >
          <h3 className="mt-5 ml-24 text-34 font-Gilroy font-bold text-black-850
                        small-pc:text-24 small-pc:ml-5
                        mobile:text-24 mobile:mt-c-16 mobile:ml-c-16"
          >
            Synchronization
          </h3>
          <p className="ml-24 mt-10 w-325 text-1.01xl leading-7 text-black-850 font-medium
                              laptop:mt-8
                              small-pc:text-base-001 small-pc:mt-8 small-pc:ml-5 small-pc:w-[207px]
                              mobile:text-14 mobile:mt-c-41 mobile:ml-c-16 mobile:w-287"
          >
            Access the functionality of the
            application from multiple devices at the same time
          </p>
        </div>
      </div>
      <div className="flex
                        mobile:flex-col-reverse"
      >
        <div className="mr-10 w-327 h-HeightFeatures bg-white rounded-2xl
                            laptop:mr-6 laptop:w-277
                            small-pc:h-HeightFeaturesTablet small-pc:w-238 small-pc:mr-4
                            mobile:w-328 mobile:h-136 mobile:mb-4"
        >
          <h3 className="mt-5 ml-24 text-34 font-Gilroy font-bold text-black-850
                               small-pc:text-24 small-pc:ml-5
                               mobile:text-24 mobile:mt-c-16 mobile:ml-c-16"
          >
            Speed
          </h3>
          <p className="ml-24 mt-70 w-262 text-1.01xl leading-7 text-black-850 font-medium
                              small-pc:text-base-001 small-pc:ml-5 small-pc:mt-12 small-pc:w-[171px]
                              mobile:text-14 mobile:mt-c-57 mobile:ml-c-16"
          >
            Send and receive messages instantly
          </p>
        </div>
        <div className="w-500 h-HeightFeatures bg-pink-light rounded-2xl
                            laptop:w-400
                            small-pc:w-270 small-pc:h-HeightFeaturesTablet
                            mobile:w-328 mobile:h-136 mobile:mb-4"
        >
          <h3 className="mt-5 ml-24 text-34 font-Gilroy font-bold text-white
                               small-pc:text-24 small-pc:ml-5
                               mobile:text-24 mobile:mt-c-16 mobile:ml-c-16"
          >
            Personalization
          </h3>
          <p className="ml-24 mt-70 w-406 text-1.01xl leading-7 text-white font-medium
                              small-pc:text-base-001 small-pc:mt-12 small-pc:ml-5 small-pc:w-[212px]
                              mobile:text-14 mobile:mt-c-42 mobile:ml-c-16 mobile:w-267"
          >
            Integration of internal
            platform apps personalized for each user
          </p>
        </div>
      </div>
    </div>
    <div className="w-268 h-474 bg-blue-deep rounded-2xl
                    laptop:h-[468px]
                    small-pc:h-302 small-pc:w-164
                    mobile:flex-col mobile:w-328 mobile:h-136 mobile:mb-4"
    >
      <h3 className="mt-24 ml-24 text-34 w-211 font-Gilroy font-bold text-white leading-10
                       laptop:mt-[20px]
                       small-pc:text-24 small-pc:ml-5 small-pc:mt-5 small-pc:w-[125px]
                       mobile:text-24 mobile:w-287 mobile:mt-c-16 mobile:ml-c-16"
      >
        Easy wallet and payment
      </h3>
      <p className="ml-24 mt-192 w-179 text-1.01xl leading-7 text-white font-medium
                      small-pc:text-base-001 small-pc:mt-120 small-pc:ml-5 small-pc:w-[115px]
                      mobile:text-14 mobile:mt-c-40 mobile:ml-c-16 mobile:mb-c-14 mobile:w-267"
      >
        Ability to store,
        exchange cryptocurrency and transfer it
      </p>
    </div>
  </section>
);

export default SecondBlock;

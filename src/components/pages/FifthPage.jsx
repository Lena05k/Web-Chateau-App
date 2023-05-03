import React, { useState } from 'react';
import iconsBreastplate from '../../assets/iconsBreastplate';
import imagesContacts from '../../assets/imagesContacts';
import imagesVector from '../../assets/imagesVector';

const ImgDownArrow = () => (
  <img
    width="14"
    className="ml-c-13"
    src={imagesVector.downArrow}
    alt="Down arrow"
  />
);

const ImgUpArrow = () => (
  <img
    width="14"
    className="ml-c-13"
    src={imagesVector.upArrow}
    alt="Down arrow"
  />
);

const FifthPage = () => {
  const [selected, setSelected] = useState(null);
  const toogleState = () => setSelected(!selected);
  console.log(selected);

  return (
    <section className="relative w-full mx-auto max-w-c-10 mb-18
                        laptop:w-950
                        small-pc:mb-6 small-pc:max-w-c-5
                        mobile:max-w-c-2 mobile:mb-c-44 "
    >
      <div className="static">
        <div>
          <p className="text-5.5xl font-bold mb-6
                        small-pc:text-36
                        small-pc:mb-7
                        mobile:text-36"
          >
            Team
          </p>
          <div className="flex mb-12
                             laptop:overflow-x-auto laptop:no-scrollbar
                             small-pc:overflow-x-auto small-pc:no-scrollbar small-pc:mb-8
                             mobile:overflow-x-auto mobile:no-scrollbar mobile:mb-c-32 mobile:w-786"
          >
            <div className="pr-c-16 shrink-0
                            small-pc:mr-6
                            mobile:px-c-10.5"
            >
              <img
                className="small-pc:w-180
                           mobile:w-120"
                width="208"
                src={iconsBreastplate.danielGiniyatullin}
                alt="Daniel Giniyatullin"
              />
              <div className="name flex flex-row items-center justify-center mx-auto mt-016 mb-1 mobile:flex-col">
                <p className="text-1.01xl font-semibold mobile:text-16 mobile:text-center">Daniel&nbsp;</p>
                <a
                  className="flex items-end justify-center text-1.01xl font-semibold
                             mobile:text-16 mobile:text-center mobile:ml-c-10"
                  href="https://www.linkedin.com/in/danil-giniyatullin-837b241b1/"
                >
                  Giniyatullin
                  <img
                    className="ml-1.5 mb-1"
                    width="18"
                    src={imagesContacts.linkedin}
                    alt="Linkedin"
                  />
                </a>
              </div>
              <p className="text-base-01 font-medium text-center
                            mobile:text-12"
              >
                CEO
              </p>
            </div>
            <div className="px-c-16 shrink-0
                            mobile:px-c-10.5"
            >
              <img
                className="small-pc:w-180
                           mobile:w-120"
                width="208"
                src={iconsBreastplate.ilyaPavlyukov}
                alt="Ilya Pavlyukov"
              />
              <div className="name flex flex-row items-center justify-center mx-auto mt-c-16 mb-1 mobile:flex-col">
                <p className="text-1.01xl font-semibold mobile:text-16 mobile:text-center">Ilya&nbsp;</p>
                <a
                  className="flex items-end justify-center text-1.01xl font-semibold
                             mobile:text-16 mobile:text-center mobile:ml-c-10"
                  href="https://www.linkedin.com/in/ilya-pav/"
                >
                  Pavlyukov
                  <img
                    className="ml-1.5 mb-1"
                    width="18"
                    height="18"
                    src={imagesContacts.linkedin}
                    alt="Linkedin"
                  />
                </a>
              </div>
              <p className="text-base-01 font-medium text-center
                            small-pc:text-base-001
                            mobile:text-12"
              >
                CTO
              </p>
            </div>
            <div className="px-c-16 shrink-0
                            small-pc:mr-6
                            mobile:px-c-10.5"
            >
              <img
                className="small-pc:w-180
                           small-pc:max-w-none
                           mobile:w-120"
                width="208"
                src={iconsBreastplate.nickBondarenko}
                alt="Nick Bondarenko"
              />
              <div className="name flex flex-row items-center justify-center mx-auto mt-c-16 mb-1 mobile:flex-col">
                <p className="text-1.01xl font-semibold mobile:text-16 mobile:text-center">Nick&nbsp;</p>
                <a
                  className="flex items-end justify-center text-1.01xl font-semibold
                             mobile:text-16 mobile:text-center mobile:ml-c-10"
                  href="https://www.linkedin.com/in/nikolay-bondarenko-60a548221/"
                >
                  Bondarenko
                  <img
                    className="ml-1.5 mb-1"
                    width="18"
                    height="18"
                    src={imagesContacts.linkedin}
                    alt="Linkedin"
                  />
                </a>
              </div>
              <p className="text-base-01 font-medium text-center
                            small-pc:text-base-001
                            mobile:text-12"
              >
                CPO
              </p>
            </div>
            <div className="px-c-16 shrink-0
                            small-pc:mr-6
                            mobile:px-c-10.5"
            >
              <img
                className="small-pc:w-180 small-pc:max-w-none
                           mobile:w-120"
                width="208"
                src={iconsBreastplate.egorKundasev}
                alt="Egor Kundasev"
              />
              <div className="flex flex-row items-center justify-center mx-auto mt-c-16 mb-1
                              small-pc:mb-0 laptop:relative
                              mobile:flex-col"
              >
                <p className="text-1.01xl font-semibold text-center
                              mobile:text-16 mobile:text-center mobile:ml-c-10"
                >
                  Egor&nbsp;
                </p>
                <p className="text-1.01xl font-semibold text-center
                              mobile:text-16 mobile:text-center mobile:ml-c-10"
                >
                  Kundasev
                </p>
              </div>
              <p className="text-base-01 font-medium text-center
                            small-pc:text-base-001
                            mobile:text-12"
              >
                Head of Mobile
              </p>
            </div>
            <div className="px-c-16 shrink-0
                            mobile:px-c-10.5"
            >
              <img
                className="small-pc:w-180
                           mobile:w-120"
                width="208"
                src={iconsBreastplate.evgenyUfimtsev}
                alt="Evgeny Ufimtsev"
              />
              <div className="name flex flex-row items-center justify-center mx-auto mt-c-16 mb-1 mobile:flex-col">
                <p className="text-1.01xl font-semibold mobile:text-16 mobile:text-center">Evgeny&nbsp;</p>
                <a
                  className="flex items-end justify-center text-1.01xl font-semibold text-center
                             mobile:text-16 mobile:text-center mobile:ml-c-10"
                  href="https://www.linkedin.com/in/evgeny-ufimtsev-21a062227/"
                >
                  Ufimtsev
                  <img
                    className="ml-1.5 mb-1"
                    width="18"
                    height="18"
                    src={imagesContacts.linkedin}
                    alt="Linkedin"
                  />
                </a>
              </div>
              <p className="text-base-01 font-medium text-center
                            mobile:text-12"
              >
                Head of Design
              </p>
            </div>
          </div>
          <div className="hidden mobile:block" onClick={toogleState}>
            <p className="flex items-center text-fuchsia-560 text-20 font-medium">
              Less team members
              <span>
                {
                  selected ? <ImgUpArrow /> : <ImgDownArrow />
                }
              </span>
            </p>
          </div>
          <div
            id="list_employees"
            className={selected ? 'grid grid-cols-4 small-pc:grid-cols-3 small-pc:gap-y-2.5 small-pc:gap-x-10 mobile:grid-cols-2 mobile:justify-items-start mobile:mt-c-20'
              : 'grid grid-cols-4 small-pc:grid-cols-3 small-pc:gap-y-2.5 small-pc:gap-x-10 mobile:hidden mobile:grid-cols-2 mobile:justify-items-start mobile:mt-c-20'}
          >
            <div className="flex mb-8
                            small-pc:order-1 small-pc:mb-0"
            >
              <img
                className="mr-3
                            small-pc:scale-86 small-pc:mr-1
                            mobile:hidden"
                width="68"
                src={iconsBreastplate.evgenyMolodov}
                alt="Evgeny Molodov"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Evgeny Molodov
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Product Manager
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-10 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.maximKonovalov}
                alt="Maxim Konovalov"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                                small-pc:text-base-001 small-pc:mb-1
                                mobile:text-16"
                >
                  Maxim Konovalov
                </p>
                <p className="text-base-001 font-medium
                                small-pc:text-12
                                mobile:text-12"
                >
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-8 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.levAkhtambayev}
                alt="Lev Akhtambayev"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Lev Akhtambayev
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-6 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.lizaBrednya}
                alt="Liza Brednya"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Liza Brednya
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Product designer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-4 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.alexTarasevich}
                alt="Alex Tarasevich"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Alex Tarasevich
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Project Manager
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-2 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.sergeyNekrasov}
                alt="Sergey Nekrasov"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Sergey Nekrasov
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-11 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.daniilMarkevich}
                alt="Daniil Markevich"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Daniil Markevich
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Mobile Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-9 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.elenaKrupoderova}
                alt="Elena Krupoderova"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Elena Krupoderova
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Frontend Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-7 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:mr-1 small-pc:scale-86
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.sergeyGalimov}
                alt="Sergey Galimov"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001
                              mobile:text-16"
                >
                  Sergey Galimov
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Project Manager
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-5 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:mr-1 small-pc:scale-86
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.alexeyZorkin}
                alt="Alexey Zorkin"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:mb-1 small-pc:text-base-001
                              mobile:text-16"
                >
                  Alexey Zorkin
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-3 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:mr-1 small-pc:scale-86
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.timurBabenko}
                alt="Timur Babenko"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:mb-1 small-pc:text-base-001
                              mobile:text-16"
                >
                  Timur Babenko
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Mobile Developer
                </p>
              </div>
            </div>
            <div className="flex mb-8
                            small-pc:order-12 small-pc:mb-0"
            >
              <img
                className="mr-3
                           small-pc:scale-86 small-pc:mr-1
                           mobile:hidden"
                width="68"
                src={iconsBreastplate.rinaMukhamadieva}
                alt="Rina Mukhamadieva"
              />
              <div className="self-center">
                <p className="text-base-1 font-semibold
                              small-pc:text-base-001 small-pc:mb-1
                              mobile:text-16"
                >
                  Rina Mukhamadieva
                </p>
                <p className="text-base-001 font-medium
                              small-pc:text-12
                              mobile:text-12"
                >
                  Data Scientist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthPage;

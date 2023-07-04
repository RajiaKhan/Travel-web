"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <div className="">
        <a className="relative block group pb-44 ">
          <Image
            className="absolute inset-0 object-cover w-full  
              h-full"
            src="/image 1.png"
            alt="img"
            width={1247}
            height={936}
          />
          <div className="relative">
            <div className="flex justify-between p-5">
              <div className="">
                <h1 className="font-bold text-white text-[35px]">trxvl.</h1>
              </div>
              <div className="flex gap-5 mt-4">
                <div className="">
                  <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                    Home
                  </button>
                </div>
                <div className="">
                  <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                    Stays
                  </button>
                </div>
                <div className="">
                  <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                    Flights
                  </button>
                </div>
                <div className="">
                  <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                    Packages
                  </button>
                </div>
                <div className="">
                  <button className="text-[17px] text-white hover:border-b pb-4 px-3 focus:border-b ">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[1246px] w-full mx-auto mt-12 px-3">
              <h1 className="text-white font-bold text-[79.71px] w-[840.24px]">
                The whole world awaits.
              </h1>
              <style jsx>{`
                .bg {
                  background-color: rgba(255, 255, 255, 0.4);
                }
              `}</style>
              <div className="bg px-3 py-3 rounded-3xl mt-5">
                <div className="flex justify-between">
                  <div className="lg:w-[428px] w-full ">
                    <label className="relative block w-full cursor-text">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 w-full">
                        <Image
                          className=""
                          src="/icon-1.svg"
                          alt="background image"
                          height={22}
                          width={22}
                        />
                      </span>
                      <input
                        className=" placeholder:text-white py-2 pl-9 pr-3  text-[17px] bg-transparent outline-none text-white "
                        placeholder="Search destinations, hotels"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                  <div className="flex lg:gap-10 xl:gap-14  2xl:gap-14 gap-5  lg:w-[710px] w-full">
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <Image
                        src="/icon-2.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[17px]">
                        Check in
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <Image
                        src="/icon-3.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[17px]">
                        Check out
                      </h1>
                    </div>{" "}
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <Image
                        src="/icon-4.svg"
                        width={22}
                        height={22}
                        alt="icon"
                      />
                      <h1 className="text-white font-normal text-[17px]">
                        1 room, 2 adults
                      </h1>
                    </div>{" "}
                    <div className="">
                      <button className="rounded-full bg-white text-[#2659C3] text-[17px] px-9 py-2.5">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-white font-bold text-[35px] mt-12">
                Top categories
              </h1>
              <div className="flex justify-between gap-5 items-center mt-10">
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-5.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Beaches
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-6.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Deserts
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-7.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Mountains
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-8.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Iconic Cities
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-9.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Houseboats
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-10.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Countryside
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-11.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Camping
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-12.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Castles
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-13.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Skiing
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="mx-auto"
                    src="/icon-14.svg"
                    width={35}
                    height={35}
                    alt="icon"
                  />
                  <h1 className="text-white text-[17px] font-normal text-center pt-3">
                    Tropical
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-12 lg:max-w-[1246px] w-full mx-auto ">
        <h1 className="text-black font-bold text-[35px] mb-8">
          Browse by property type
        </h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="">
            <SwiperSlide className=" ">
              <Image
                className="mx-auto "
                src="/Frame 31.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
            <SwiperSlide className=" ">
              <Image
                className="mx-auto "
                src="/Frame 36.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
            <SwiperSlide className=" ">
              <Image
                className="mx-auto "
                src="/Frame 37.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
            <SwiperSlide className=" ">
              <Image
                className="mx-auto "
                src="/Frame 31.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
            <SwiperSlide className=" ">
              <Image
                className="mx-auto "
                src="/Frame 36.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
            <SwiperSlide className=" ">
              <Image
                className="mx-auto"
                src="/Frame 31.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
            <SwiperSlide className=" ">
              <Image
                className="mx-auto"
                src="/Frame 37.png"
                width={343}
                height={221}
                alt="Frame"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="mt-12  mx-auto">
        <a className="relative block group">
          <Image
            className="absolute inset-0 object-cover mx-auto rounded-3xl 
              h-full"
            src="/image 20.png"
            alt="img"
            width={1247}
            height={936}
          />
          <div className="relative lg:max-w-[1247px] w-full mx-auto p-24 ">
            <h1 className="text-white font-bold w-[751px] text-[61.99px] ">
              Plan your trip with travel expert
            </h1>
            <h1 className="text-white text-[35px] font-normal mt-6">
              Our professional advisors can craft your perfect itinerary
            </h1>
          </div>
        </a>
      </div>
      <div className="mt-12">
        <a className="relative block group  ">
          <Image
            className="absolute inset-0 object-cover w-full  
              h-full"
            src="/image 21.png"
            alt="img"
            width={1247}
            height={936}
          />
          <div className="relative lg:max-w-[1247px] w-full mx-auto pt-32 ">
            <div className="flex justify-between gap-12">
              <div className="w-[339.59px]">
                <Image
                  className="mx-auto"
                  src="/iPhone 13.png"
                  width={339.59}
                  height={639}
                  alt="Mobile"
                />
              </div>
              <div className="w-[854.55px]">
                <h1 className="text-white text-[53px] font-bold">
                  Your all-in-one travel app.
                </h1>
                <h1 className="text-white text-[26px] font-normal mt-8">
                  Book flights, hotels, trains & rental cars anywhere in the
                  world in just seconds. Get real-time flight updates, travel
                  info, exclusive deals, and 30% more Trip Coins only on the
                  app!
                </h1>
                <div className="flex justify-between">
                  <div className="">
                    <div className="flex mt-8 gap-3">
                      <div className="">
                        <style jsx>{`
                          .bt-1 {
                            background-color: rgba(255, 255, 255, 0.4);
                          }
                        `}</style>
                        <button className="text-white bt-1 py-2 px-5 rounded-full text-[22px]">
                          Mobile
                        </button>
                      </div>
                      <div className="">
                        <button className="text-white  py-2 px-5 rounded-full text-[22px]">
                          Email
                        </button>
                      </div>
                    </div>
                    <h1 className="text-white font-normal text-[15px] mt-5">
                      Enter your phone number to receive a text with a link to
                      download the app.
                    </h1>
                  </div>
                  <div className=""></div>
                  <div className="">
                    <Image
                      className="mx-auto"
                      src="/playstore.png"
                      width={224.53}
                      height={67}
                      alt="playstore"
                    />
                    <Image
                      className="mx-auto mt-5"
                      src="/image 22.png"
                      width={224.53}
                      height={67}
                      alt="Apple"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="bg-[#141414] p-32 ">
        <div className="lg:max-w-[1247px] w-full mx-auto">
          <div className="grid grid-cols-5 gap-44">
            <div className="w-[93px]">
              <h1 className="font-bold text-white text-[35px]">Trxvl.</h1>
            </div>
            <div className="w-[160px]">
              <h1 className="text-sm text-[#808080] ">
                Seslendirme ve Alt Jazz
              </h1>
              <h1 className="text-sm text-[#808080] mt-4">Media Market</h1>
              <h1 className="text-sm text-[#808080] mt-4">Gillie</h1>
              <h1 className="text-sm text-[#808080] mt-4">Size Last</h1>
            </div>
            <div className="w-[109px]">
              <h1 className="text-sm text-[#808080]">Self Betimes</h1>
              <h1 className="text-sm text-[#808080] mt-4">
                Yatırımcı İlişkileri
              </h1>
              <h1 className="text-sm text-[#808080] mt-4">Basal Himmler</h1>
            </div>
            <div className="w-[88px]">
              <h1 className="text-sm text-[#808080]">Yard Market</h1>
              <h1 className="text-sm text-[#808080] mt-4">Is İmkanları</h1>
              <h1 className="text-sm text-[#808080] mt-4">Car Tercihleri</h1>
            </div>
            <div className="w-[120px]">
              <h1 className="text-sm text-[#808080]">Hedge Karla</h1>
              <h1 className="text-sm text-[#808080] mt-4">Mullein Koşulları</h1>
              <h1 className="text-sm text-[#808080] mt-4">Autumnal Bulgier</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

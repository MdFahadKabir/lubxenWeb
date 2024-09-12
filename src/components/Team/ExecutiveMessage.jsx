import React from "react";
import Image from "next/image";
import Alamgir_Kabir from "../../../public/images/Alamgir_Kabir.jpg";

export default function ExecutiveMessage() {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <div className=" md:border md:p-10 md:rounded-xl md:shadow-inner ">
          <div className=" mb-10 text-center w-full ">
            <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal border-b-2 border-[#BF1D2F]  mx-auto inline-block dark:text-white">
              Executive Message
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between dark:text-white">
            <div className="w-full md:w-1/5">
              <Image
                src={Alamgir_Kabir}
                alt="Alamgir_kabir"
                className="w-auto h-auto rounded-xl"
              />
              <p className="poppins-bold text-lg sm:text-base md:text-base lg:text-base leading-normal">
                Mohammed Alamgir Kabir
              </p>
              <p className="text-justify mulish-regular  text-sm leading-normal">
                Chairman of LUBXEN
              </p>
            </div>
            <div className="mx-5 mt-5 "></div>
            <div className="w-full my-auto">
              <p className="text-justify mulish-regular  text-sm leading-normal ">
                Mohammed Alamgir Kabir, the Honorable Chairman of LUBXEN, is a
                distinguished entrepreneur with over 40 years of extensive
                experience in business. From his early years, Mr. Kabir has been
                deeply involved in the manufacturing and trading sectors,
                demonstrating a keen understanding of market dynamics and a
                relentless pursuit of excellence. His journey began at a young
                age, and through determination and hard work, he successfully
                established and managed a business conglomerate that continues
                to thrive under his leadership. Today, LUBXEN stands as a
                testament to his vision and entrepreneurial spirit, embodying
                the values of quality, innovation, and customer satisfaction.
              </p>
              <p className="text-justify  mulish-semibold text-sm leading-normal text-black dark:text-white pt-5">
                "At LUBXEN, we are committed to delivering products that not
                only meet but exceed the expectations of our customers. Our goal
                is to penetrate new markets and broaden our distri- bution
                channels, collaborating with like-minded businesses to ensure
                the future growth and success of the LUBXEN brand. We are
                dedicated to upholding the highest standards in all aspects of
                our operations, from product development to customer service,
                and I take great pride in the achievements of our team."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" px-4 md:px-32 py-16 mt-20 bg-[rgba(254, 254, 254)]">
      <div className="flex flex-col md:flex-row  h-fit gap-2">
        <div className=" p-5 flex flex-col justify-center items-start w-full lg:w-[50%]">
          <h2 className="text-4xl mb-10 text-[rgba(108,107,88)] font-semibold">
            About Dr. Serena Blake
          </h2>
          <Image
            src="/doctor.jpg"
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="object-cover  lg:hidden mx-auto block mt-4 *:w-full md:w-[80%] lg:w-[70%]  mb-8"
          />
          <p className="mt-4 text-[rgba(rgba(108,107,88)] text-lg font-extralight ">
            In today’s fast-paced and often overwhelming world, creating space
            for emotional healing and personal growth is not just valuable—it’s
            vital. I believe therapy offers more than just a place to talk; it
            offers a space to reconnect with yourself, explore patterns that no
            longer serve you, and begin meaningful transformation. Each person’s
            path to well-being is unique, and I strive to meet clients wherever
            they are with empathy, presence, and clarity.
          </p>
          <p className="mt-4 text-[rgba(rgba(108,107,88)] text-lg font-extralight ">
            I earned my Doctorate in Clinical Psychology (PsyD) with a focus on
            integrating evidence-based techniques—such as cognitive-behavioral
            therapy and mindfulness—with a compassionate, client-centered
            approach. Over the past eight years, I’ve worked with individuals
            and couples across more than 500 sessions in both virtual and
            in-person settings. My clinical background includes work in private
            practice, community mental health clinics, and telehealth platforms,
            allowing me to support clients from diverse backgrounds and life
            experiences.
          </p>

          <p className="mt-4 text-[rgba(rgba(108,107,88)] text-lg font-extralight ">
            My therapeutic style draws from relational, trauma-informed, and
            strength-based frameworks. Whether you are navigating anxiety,
            relationship challenges, or the lingering effects of trauma, I offer
            a grounded, non-judgmental space to explore your inner world—and
            build a healthier, more connected one.
          </p>
        </div>
        <div className=" w-full lg:w-[50%] hidden lg:block my-auto">
          <Image
            src="/doctor.jpg"
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="object-cover  ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

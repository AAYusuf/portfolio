import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[300px] h-[300px] object-cover  rounded-full"
        src="/profile.png"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Adamu Abdulkadir Yusuf. I&apos;m a
          {/* {false ? ` ${new Date().getFullYear() - 2007} years old` : ""}{" "} */}
          frontend developer living in Nigeria. I am a graduate of Computer Science. I started learning web
          development years ago. Since then, I have made a lot of projects,
          from basic HTML pages to complex projects like a fully functioning web applications. 
          {/* I hope
          to be a great developer and get my dream job in the future. Besides
          coding, I also like{" "}
          <a
            className="underline underline-offset-2"
            href="https://blog.napthedev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            writing blog posts
          </a>
          , listening to music and playing video games */}
        </p>
      </div>
    </div>
  );
};

export default Who;

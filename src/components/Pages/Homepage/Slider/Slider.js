import { Carousel, Typography, Button } from "@material-tailwind/react";
import allData from "./fakedata.js";

export default function Slider() {
  return (
    <div>
      <Carousel
        className="rounded-none bg-blue-100"
        autoplay="true"
        autoplayDelay={5000}
        loop="true"
        navigation={0}
      >
        {allData.map((data) => {
          return (
            <div className="">
              <div className="relative h-full w-full flex flex-row-reverse justify-between max-w-screen-xl mx-auto items-center gap-16">
                <div>
                  <img
                    src={data.img}
                    alt="image 1"
                    className="h-72 w-full"
                  />
                </div>

                <div className="w-96">
                  <Typography
                    variant="h1"
                    color="black"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl uppercase"
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="black"
                    className="mb-12 opacity-80"
                  >
                    {data.location}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

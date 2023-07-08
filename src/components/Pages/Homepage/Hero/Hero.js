import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import img1 from "../../../../assets/images/hero/1.jpg";
import img2 from "../../../../assets/images/hero/2.jpg";
import img3 from "../../../../assets/images/hero/3.jpg";
import img4 from "../../../../assets/images/hero/4.jpg";
import img5 from "../../../../assets/images/hero/5.jpg";
import img6 from "../../../../assets/images/hero/6.jpg";
import img7 from "../../../../assets/images/hero/7.png";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 border-solid border-black border rounded-md p-5">
      <div className="flex justify-between">
        <div className="">
          <Typography className="text-4xl ">Members</Typography>
          <Typography className="my-5">
            You want to know who we are? Check out our <br /> Members page and
            consult the member countries <br /> files for more information.
          </Typography>
          <a href="http://wadokai.eu/-Members-.html">
            <Button>Read more</Button>
          </a>
        </div>
        <div>
          <Typography className="text-4xl">Latest Photos</Typography>
          <div className="flex flex-col">
            <a
              className="my-5 text-black underline-offset-4 underline hover:text-blue-700"
              target="_blank"
              href="http://wadokai.eu/European-Wado-Kai-Karate-Championship-2022.html"
            >
              European Wado Kai Karate
            </a>
            <a
              className="mb-5 text-black underline-offset-4 underline hover:text-blue-700"
              target="_blank"
              href="http://wadokai.eu/European-Wado-Kai-Karate-Championship-2022.html"
            >
              Championship 2022
            </a>
          </div>
          <div className="grid grid-cols-2 gap-10 ">
            <img className="rounded-md w-36" src={img1} alt="" />
            <img className="rounded-md w-36" src={img2} alt="" />
            <img className="rounded-md w-36" src={img3} alt="" />
            <img className="rounded-md w-36" src={img4} alt="" />
            <img className="rounded-md w-36" src={img5} alt="" />
            <img className="rounded-md w-36" src={img6} alt="" />
          </div>
        </div>
        <div>
          <img className="rounded-md" src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

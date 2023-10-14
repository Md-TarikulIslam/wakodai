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
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
        <div className="flex-1">
          <Typography className="text-4xl ">Members</Typography>
          <Typography className="my-5">
            You want to know who we are? Check out our <br /> Members page and
            consult the member countries <br /> files for more information.
          </Typography>
          <a href="http://wadokai.eu/-Members-.html">
            <Button>Read more</Button>
          </a>
        </div>
        <div className="flex-1">
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
          <div className="grid grid-cols-2 gap-4 ">
            <img className="rounded-md w-36 hover:scale-105 transition-all" src={img1} alt="" />
            <img className="rounded-md w-36 hover:scale-105 transition-all" src={img2} alt="" />
            <img className="rounded-md w-36 hover:scale-105 transition-all" src={img3} alt="" />
            <img className="rounded-md w-36 hover:scale-105 transition-all" src={img4} alt="" />
            <img className="rounded-md w-36 hover:scale-105 transition-all" src={img5} alt="" />
            <img className="rounded-md w-36 hover:scale-105 transition-all" src={img6} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <img className="rounded-md mx-auto lg:mx-0 border border-black h-full p-4" src='https://t4.ftcdn.net/jpg/05/18/97/79/360_F_518977990_nndfygVJ6A4ypzK06amhmbK1hpI0bo2q.jpg' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

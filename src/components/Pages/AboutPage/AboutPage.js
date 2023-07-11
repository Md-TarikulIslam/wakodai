import {
  Breadcrumbs,
  Card,
  CardBody,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import img from "../../../assets/images/about/1.avif";
import { ScrollRestoration } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="">
        <Breadcrumbs separator="-" className="" fullWidth>
          <a href="#" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <a href="#">About FWE</a>
        </Breadcrumbs>
      </div>

      <div>
        <Card className="my-5">
          <CardBody>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start">
              <div>
                <Typography className="text-blue-600 text-3xl font-bold ">
                  ABOUT FWE
                </Typography>
                <Typography className="">
                  The Federation of Wadokai Europe (FWE) is composed of the
                  Wadokai Headquarters of most European Nations.
                </Typography>
                <Typography className="my-3">
                  The Federation of Wadokai Europe has the aim of promoting,
                  organizing, regulating and popularizing Wadokai Karate.
                </Typography>

                <a href="http://wadokai.eu/IMG/pdf/Articles_of_Association-WE_copy.pdf">
                  {" "}
                  <img className="w-20" src={img} alt="" />
                </a>
                <Typography className="font-semibold">
                  Articles of Association of Federation of Wadokai Europe
                </Typography>
              </div>
              <div className="">
                <Typography className="font-semibold text-lg">
                  For more information please consult the following pages :
                </Typography>
                <List className="text-blue-500">
                  <a href="#" className="text-initial">
                    <ListItem>EXECUTIF COMMITTEE</ListItem>
                  </a>
                  <a href="#" className="text-initial">
                    <ListItem>GRADING COMMISSION</ListItem>
                  </a>
                  <a href="#" className="text-initial">
                    <ListItem>DAN GRADING</ListItem>
                  </a>
                  <a href="#" className="text-initial">
                    <ListItem>DAN CERTIFICATE OWNERS</ListItem>
                  </a>
                  <a href="#" className="text-initial">
                    <ListItem>SPORT COMMITTEE</ListItem>
                  </a>
                  <a href="#" className="text-initial">
                    <ListItem>REFEREE COMMISSION</ListItem>
                  </a>
                  <a href="#" className="text-initial">
                    <ListItem>HISTORY OF FWE</ListItem>
                  </a>
                </List>
              </div>
            </div>
            <p className="text-sm">Last update: <span className="italic">6 November, 2016.</span></p>
          </CardBody>
        </Card>
      </div>
      <ScrollRestoration />
    </div>
  );
}

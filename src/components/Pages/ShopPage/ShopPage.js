import {
  Breadcrumbs,
  Card,
  CardBody,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import img1 from "../../../assets/images/shop/1.jpg";
import img2 from "../../../assets/images/shop/2.jpg";
import './ShopPages.css'

const ShopPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
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

          <a href="#">Shop</a>
        </Breadcrumbs>
      </div>
      <div className="my-5">
        <Card>
          <CardBody>
            <Typography className="text-blue-600 text-3xl font-bold ">
              SHOP
            </Typography>
            <Typography>
              You will find official WADOKAI EUROPE products in this category.
            </Typography>
            <Typography className="my-5">
              To order you need to send us your order by email. Please mention :
            </Typography>
            <div className="w-96">
              <List>
                <ListItem>The product</ListItem>
                <ListItem>The quantity</ListItem>
                <ListItem>The size you need</ListItem>
                <ListItem>And your address for shipping</ListItem>
              </List>
            </div>
            <Typography className="my-5">
              When ordering 10 products we will charge NO portal fees!
            </Typography>
            <div>
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <div>
                  <img
                    className="border img-size border-dashed rounded-lg p-2 border-blue-500"
                    src={img1}
                    alt=""
                  />
                </div>
                <div>
                  <a href="http://wadokai.eu/Wadokai-Europe-Referee-Short-Sleeve-Shirt.html">
                    {" "}
                    <Typography className="text-blue-600 font-bold hover:underline">
                      WADOKAI EUROPE REFEREE SHORT SLEEVE SHIRT
                    </Typography>
                  </a>
                  <Typography>
                    Get the NEW FWE Short Sleeve Shirt + Embroidery for 40€
                    (+10€ portal fee)
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
                <div>
                  <img
                    className="border img-size border-dashed rounded-lg p-2 border-blue-500"
                    src={img2}
                    alt=""
                  />
                </div>
                <div>
                  <a href="http://wadokai.eu/Wadokai-Europe-Tie.html">
                    {" "}
                    <Typography className="text-blue-600 font-bold hover:underline">
                      WADOKAI EUROPE REFEREE TIE
                    </Typography>
                  </a>
                  <Typography>
                    Get the official WADOKAI EUROPE REFEREE TIE for 25€ (+5€
                    portal fee)
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ShopPage;

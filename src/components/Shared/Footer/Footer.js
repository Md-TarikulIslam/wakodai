import { IconButton, Input, Typography } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white">
      <div className="flex flex-col  ml-1 lg:ml-auto md:flex-row max-w-screen-xl mx-auto py-10 justify-between gap-5 lg:gap-0">
        <div className="w-96">
          <Typography className="text-xl font-semibold">
            Newsletter Subscription
          </Typography>
          <Typography className="my-5">
            Sign up to receive news and information about European Wado Karate
            and upcomming FWE events.
          </Typography>
          <Typography className="mb-5"> Your e-mail address</Typography>
          <div className="w-72 flex gap-2">
            <Input
              type="email"
              placeholder="Email Address"
              className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <IconButton>
              <FaCheck />
            </IconButton>
          </div>
          <Typography className="mt-5">
            Enter your e-mail address above and click on the submit button.
            You'll be taken to an easy-to-use sign-up page. To unsubscribe
            please click here.
          </Typography>
        </div>
        <div className="w-96">
          <Typography className="text-xl font-semibold">
            Support Pages
          </Typography>
          <div className="flex flex-col mt-5">
            <a href="">Contact us</a>
            <a href="">Site map</a>
          </div>
        </div>
        <div className="w-96">
          <Typography className="text-xl font-semibold">
            Member Countries
          </Typography>
          <Typography className="mt-5">
            Sign up to receive news and information about European Wado Karate
            and upcomming FWE events.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

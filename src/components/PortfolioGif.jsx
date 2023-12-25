// import fuemb from "../assets/portfolio/FUEMB.jpg";
// import fuepc from "../assets/portfolio/FUEPC.gif";
// import ehomemb from "../assets/portfolio/ehomemb.png";
// import ehomepc from "../assets/portfolio/ehomepc.gif";
// import phonemb from "../assets/portfolio/phone-vault-mb.png";
// import phonepc from "../assets/portfolio/phone-vault.png";

import { FiExternalLink } from "react-icons/fi";
import car from "../assets/car.jpg";
import job from "../assets/job.jpg";
import medical from "../assets/medical.jpg";
import { FaGithub } from "react-icons/fa";

const PortfolioR = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <br />
        <br />

        {/* Car Shoop start */}
        <div className="md:flex items-center md:gap-14">
          <div className="md:w-[45%]">
            <a href="https://blood-donation-28936.web.app/" target="new">
              <img className="rounded-md shadow-md hover:scale-105 duration-300" src={car} alt="" data-aos="zoom-in" />
            </a>
          </div>
          <div className="md:w-[50%]">
            <h1 className="text-4xl py-4 font-semibold">Brand Car Shop </h1>
            <p>
              Car Shop provides a platform for users to list their vehicles for sale. Visitors can effortlessly explore the details of each car and
              conveniently add their desired vehicle to the cart for a smooth and user-friendly purchasing process..
            </p>
            <div className="md:flex md:gap-6 gap-4 py-10 ">
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center mb-3 gap-2 hover:scale-105 duration-300"
                  href="https://react-brand-shop-4bc0a.web.app/"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p>Live Demo </p>
                  <FiExternalLink className="inline-flex "></FiExternalLink>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300"
                  href="https://github.com/Ananda-Das/car-shop-with-react-client"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p className="hover:text-black  ">Client Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 hover:scale-105 duration-300"
                  href="https://github.com/Ananda-Das/car-shop-with-react-server"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p className="hover:text-black  ">Server Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Car Shoop end */}

        {/* job hunter start  */}
        <div className="md:flex items-center md:gap-14">
          <div className="md:w-[45%]">
            <a href="https://job-hunter-188ab.web.app/" target="new">
              <img className="rounded-md shadow-md hover:scale-105 duration-300" src={job} alt="" data-aos="zoom-in" />
            </a>
          </div>
          <div className="md:w-[50%]">
            <h1 className="text-4xl py-4 font-semibold">Job Hunter </h1>
            <p>
              In the Job Hunter project, users can view posted jobs and apply for positions that match their preferences. A user is restricted from
              applying for their own job or for jobs posted in the past. Upon successful application, users can track their applied jobs on a
              dedicated page and download a summary PDF for each application.
            </p>
            <div className="md:flex md:gap-6 gap-4 py-10 ">
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center mb-3 gap-2 hover:scale-105 duration-300"
                  href="https://react-brand-shop-4bc0a.web.app/"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p>Live Demo </p>
                  <FiExternalLink className="inline-flex "></FiExternalLink>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300"
                  href="https://github.com/Ananda-Das/job-hunter-with-JWT-Cookie-client"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p className="hover:text-black  ">Client Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 hover:scale-105 duration-300"
                  href="https://github.com/Ananda-Das/job-hunter-with-JWT-Cookie-server"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p className="hover:text-black  ">Server Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* job hunter end  */}

        {/* medical start  */}
        <div className="md:flex items-center md:gap-14">
          <div className="md:w-[45%]">
            <a href="https://diagnostic-center-management.web.app/" target="new">
              <img className="rounded-md shadow-md hover:scale-105 duration-300" src={medical} alt="" data-aos="zoom-in" />
            </a>
          </div>
          <div className="md:w-[50%]">
            <h1 className="text-4xl py-4 font-semibold">Medical Diagonostic Center </h1>
            <p>
            In the Medical Diagnostic Center, users can find a comprehensive list of tests on the website and conveniently book their preferred tests using the secure Stripe payment system. Once the administrator posts the test results, users have the option to download the corresponding test PDF for easy access and record-keeping.
            </p>
            <div className="md:flex md:gap-6 gap-4 py-10 ">
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center mb-3 gap-2 hover:scale-105 duration-300"
                  href="https://diagnostic-center-management.web.app/"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p>Live Demo </p>
                  <FiExternalLink className="inline-flex "></FiExternalLink>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 mb-3 hover:scale-105 duration-300"
                  href="https://github.com/Ananda-Das/medical-diagnostic-center-client-with-react-"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p className="hover:text-black  ">Client Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
              <div>
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center gap-2 hover:scale-105 duration-300"
                  href="https://github.com/Ananda-Das/medical-diagnostic-center-server-with-react"
                  target="new"
                  data-aos="zoom-in"
                >
                  <p className="hover:text-black  ">Server Code</p>
                  <FaGithub className="inline-flex "></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* medical end  */}
      </div>
    </div>
  );
};

export default PortfolioR;

import HeroImage from "../assets/55351.jpg";
import { FaDownload } from "react-icons/fa";
import cv from '../../public/Ananda_Das_CV.pdf';


const Home = () => {
  return (
    <div name="home"
      className="w-full bg-gradient-to-b from-black py-10 via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">I am a <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Front End Developer</span></h2>
            <p className="text-gray-300 py-4 max-w-md">I have a passion for crafting sophisticated and responsive websites, employing a stack that includes ReactJS, TailwindCSS, NodeJS, ExpressJS, and MongoDB. The process of learning and integrating new technologies brings me immense joy and satisfaction</p>

            <div className="w-1/3">
                <a
                  className="flex px-3 py-1 border hover:bg-[#CCCD34] hover:border-[#CCCD34] hover:text-black  border-red-600  justify-center items-center mb-3 gap-2 hover:scale-105 duration-300"
                  href={cv} download='Anandas CV'
                  data-aos="zoom-in"
                >
                  <p>Download CV </p>
                  <FaDownload className="inline-flex "></FaDownload>
                </a>
              </div>
            
        </div>
        
          
        <div className='flex justify-center items-center'>
          <div className='bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full w-2/3  md:w-[80%]'>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full border-8"
          />
          </div>
      </div>
    </div>
      
    </div>
  )
}

export default Home
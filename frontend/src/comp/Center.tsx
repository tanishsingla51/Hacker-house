import { Button } from '../components/ui/button.js'; // Adjust path as per your file structure
import WeaveXLogo from '../pages/logo.js'; // Adjust path as per your file structure
import { FaDiscord } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export const Center = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col justify-center items-center p-8">
      <div className="text-center max-w-3xl mb-12">
        <div className="flex flex-col items-center mb-8">
          <WeaveXLogo />
          <h1 className="text-6xl font-bold font-serif mb-2">Welcome to</h1>
          <h1 className="text-6xl font-bold font-serif text-purple-400 mb-4">WeaveX</h1>
        </div>
        <p className="text-2xl text-slate-400 mb-4">
          WeaveX aggregates the latest and most innovative resources, tools, and insights from the Web3 and decentralized technology ecosystem.
        </p>
        <p className="text-lg text-slate-500 mb-8">
          Whether you're a developer looking for the latest DeFi protocols, a blockchain enthusiast searching for news, or a business seeking to integrate decentralized solutions, WeaveX has you covered.
        </p>
        <div className="flex flex-col items-center">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mt-4">Explore Now</Button>
          <p className="text-lg text-slate-400 mt-4">Join our community and stay ahead in the world of Web3.</p>
        </div>
        <div className="flex justify-center items-center ">
          <a href="https://discord.com" target="_blank" rel="noreferrer" className=" text-slate-500 font-semibold py-2 px-4 border border-transparent">
            <FaDiscord className="ml-0 position absolute bottom-10 size-10" />   
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className=" text-slate-500 font-semibold py-2 px-4 border border-transparent">
            <BsTwitterX className="ml-4 position absolute bottom-11 size-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Center;

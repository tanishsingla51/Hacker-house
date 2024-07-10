
import { Button } from "../components/ui/button.js";
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";
import { useNavigate } from "react-router-dom";
import WeaveXLogo from '../pages/logo.js'; // Adjust the path to your logo

export const Navbar = () => {
  const { connected } = useConnection();
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate("/dashboard/"); // Navigate to '/dashboard' route
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center bg-black p-6 z-50 shadow-lg">
      <div className="flex items-center">
        <div className="flex items-center justify-center mr-8">
          <WeaveXLogo /> {/* Include the WeaveX logo */}
          <div className="ml-2">
            <div className="text-2xl font-semibold text-white">WeaveX</div>
            <div className="text-xs font-medium text-purple-300">Decentralized Solutions</div>
          </div>
        </div>
        <nav className="flex space-x-4">
          <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded">Swap</Button>
          <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded">Stake</Button>
          <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded">Bridges</Button>
        </nav>
        <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded ml-[915px]">Community</Button>
      </div>
      <div className='ml-auto'>
        {connected ? (
          <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded" onClick={handleNavigateToDashboard}>Dashboard</Button>
        ) : (
          <div className="gap-10 p-9 my-18 flex flex-col justify-center items-center">
            <ConnectButton accent="rgb(30,129,176)" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


import { Center } from '../comp/Center.js';
import { Navbar } from '../comp/Navbar.js';

const LandingPage = () => {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-full">
        <Center />
      </div>
    </div>
  );
};

export default LandingPage;

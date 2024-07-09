import React from 'react'
import { Center } from '../comp/Center'
import { Testemonials } from '../comp/Testemonials'
import { TestContent } from '../comp/TestContent'
import { Navbar } from '../comp/Navbar'


 const LandingPage = () => {
  return (
      <div>
           <div className="pb-4 pl-8 pt-6 w-full fixed absolute">
          <Navbar />
        </div>
        <div  className="flex justify-center mt-56">
        <Center />
        </div>
        <div className="flex justify-center mt-64">
          <Testemonials  /> 
        </div>
        <div >
        <TestContent />
        </div>
    </div>
  )
}

export default LandingPage
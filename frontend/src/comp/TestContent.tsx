import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const TestContent = () => {
  return (
    <div>
           
         <div className='grid grid-cols-3 gap-8 mt-12 '>
          <Card className='h-[300px] bg-slate-500' >
                <CardHeader>
                    <CardTitle className='text-bold text-2xl'>John</CardTitle>
                    <CardDescription className='text-sm text-slate-700'>Developer Relationals</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-white'>LearnWeb3 provided a very open and helpful community for me who was not only new to web3 but also new to the world to programming when I started my journey, the wealth of knowledge and support from LearnWeb3 was just invaluable.</p>
                </CardContent>
              </Card>

              <Card className='h-[300px] bg-slate-500' >
                <CardHeader>
                    <CardTitle className='text-bold text-2xl'>Susie</CardTitle>
                    <CardDescription className='text-sm text-slate-700'>Content Lead</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-white'>I feel really lucky to be a part of the LearnWeb3 community because I got to be part of a culture that was relentless in it's pursuit to become Web3 developers. Thanks to that culture, I learned more than I ever had about Web3, which helped me push a foot in the door of the professional world.</p>
                </CardContent>
              </Card>

              <Card className='h-[300px] bg-slate-500' >
                <CardHeader>
                    <CardTitle className='text-bold text-2xl'>Ian Perez</CardTitle>
                    <CardDescription className='text-sm text-slate-700'>Software Engineer</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-white'>Without the help of LearnWeb3 I truly do not consider I would be where I am today, from getting my first contracting job to securing my first full-time job at Sonr.</p>
                </CardContent>
              </Card>
            </div>
    </div>
  )
}


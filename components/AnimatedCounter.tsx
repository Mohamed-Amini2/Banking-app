"use client";
import React from 'react'
import CountUp from 'react-countup'

export const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
     <CountUp 
     end={amount} 
     decimale="," 
     decimals="2"
     prefix="₽"
     duration={2}
      />
    </div>
  )
}

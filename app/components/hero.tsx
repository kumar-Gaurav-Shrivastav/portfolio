import { ColourfulText } from './ui/colourful-text'
import { Spotlight } from './ui/Spotlight'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div>
        <h4 className="text-center text-purple-400">
          Dynamic Web portfolio with next.js
        </h4>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-white relative z-2 font-sans">
          Transforming Concepts into <br /> seamless{" "}
          <ColourfulText text="User Experience" />
        </h1>
        <h3 className="text-sm md:text-lg lg:text-xl font-medium text-center text-white relative z-2 mt-4 font-sans">
          Hey 👋 I'm Gaurav, A passionate developer <br /> dedicated to crafting
          beautiful and functional user experiences.
        </h3>
        <br />
        <div className='flex justify-center'>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Show my work
          </div>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Hero

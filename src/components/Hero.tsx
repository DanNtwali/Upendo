'use client'
import Mux from '@mux/mux-node';
import React from 'react'
import TypedTitle from './Typedtitle'
import Video from './Video'

// Ensure environment variables are loaded
const muxTokenId = process.env.MUX_TOKEN_ID;
const muxTokenSecret = process.env.MUX_TOKEN_SECRET;


function Hero() {
  return (
    <div className="h-screen grid max-w-screen-xl mt-10 px-2 mx-auto lg:gap-1 xl:gap-0 bg-fixed bg-cover bg-[url('../assets/images/signup.png')] lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
            <TypedTitle/>             
        </div>
        <div className="hidden mr-2 mt-20 lg:flex">
            <Video/> 
        </div>                
    </div>
  )
}

export default Hero
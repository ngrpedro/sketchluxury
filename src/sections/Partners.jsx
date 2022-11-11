import React from 'react'
import disney from "../assets/partners/disney.svg"
import microsoft from "../assets/partners/microsoft.svg"
import duoligo from "../assets/partners/duolingo.svg"
import netflix from "../assets/partners/netflix.svg"
import nike from "../assets/partners/nike.svg"
import spotify from "../assets/partners/spotify.svg"
import tiktok from "../assets/partners/tiktok.svg"

const Partners = () => {
    return (
        <div className='opacity-30 flex flex-wrap items-center sm:justify-between gap-5
                        container mx-auto px-5 sm:px-20 py-14'>
            <img src={disney} alt="" className='w-28 h-10' />
            <img src={duoligo} alt="" className='w-28 h-10' />
            <img src={microsoft} alt="" className='w-28 h-10' />
            <img src={netflix} alt="" className='w-28 h-10' />
            <img src={nike} alt="" className='w-28 h-10' />
            <img src={spotify} alt="" className='w-28 h-10' />
            <img src={tiktok} alt="" className='w-28 h-10' />
        </div>
    )
}

export default Partners

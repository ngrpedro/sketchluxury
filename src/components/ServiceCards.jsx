import React from 'react'
import { Bank, House, Jeep } from 'phosphor-react'

const ServiceCards = () => {

    return (
        <>
            <div className='border border-gray-200 rounded p-4 space-y-8 group bg-gray-800 hover:bg-gray-900 transition-all shaddow-card '>
                <div className='border border-gray-300 rounded-full w-10 h-10 
                    flex items-center justify-center'>
                    <House size={26} className="!text-gray-400" />
                </div>
                <h1 className='text-2xl w-40 font-bold font-noto text-white'>Luxury Facilities</h1>
                <p className='text-sm text-white'>
                    Sint officia commodo adipisicing elit nulla adipisicing exercitation
                    in deserunt. Ipsum in proident adipisicing magna.
                </p>
                <a href="#" className='uppercase font-bold underline underline-offset-8 py-2 block text-white'>lear more</a>
            </div>
            <div className='border border-gray-200 rounded p-4 space-y-8 group bg-gray-800 hover:bg-gray-900 transition-all shaddow-card '>
                <div className='border border-gray-300 rounded-full w-10 h-10 
                    flex items-center justify-center'>
                    <House size={26} className="!text-gray-400" />
                </div>
                <h1 className='text-2xl w-40 font-bold font-noto text-white'>Luxury Facilities</h1>
                <p className='text-sm text-white'>
                    Sint officia commodo adipisicing elit nulla adipisicing exercitation
                    in deserunt. Ipsum in proident adipisicing magna.
                </p>
                <a href="#" className='uppercase font-bold underline underline-offset-8 py-2 block text-white'>lear more</a>
            </div>
            <div className='border border-gray-200 rounded p-4 space-y-8 group bg-gray-800 hover:bg-gray-900 transition-all shaddow-card '>
                <div className='border border-gray-300 rounded-full w-10 h-10 
                    flex items-center justify-center'>
                    <House size={26} className="!text-gray-400" />
                </div>
                <h1 className='text-2xl w-40 font-bold font-noto text-white'>Luxury Facilities</h1>
                <p className='text-sm text-white'>
                    Sint officia commodo adipisicing elit nulla adipisicing exercitation
                    in deserunt. Ipsum in proident adipisicing magna.
                </p>
                <a href="#" className='uppercase font-bold underline underline-offset-8 py-2 block text-white'>lear more</a>
            </div>
        </>
    )
}

export default ServiceCards

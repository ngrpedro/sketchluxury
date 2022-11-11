import { Bank, House, Jeep } from 'phosphor-react'
import React from 'react'

const Services = () => {
    return (
        <div className='container mx-auto px-5 sm:px-20 py-14 flex flex-col items-center justify-center'>
            <div className='max-w-sm text-center space-y-5'>
                <h1 className='text-4xl font-noto font-bold'>What we provide</h1>
                <p className='text-sm'>
                    Culpa esse aute deserunt Lorem occaecat exercitation minim incididunt aliquip anim aute tempor.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-20'>
                <div className='border border-gray-200 rounded-sm p-4 space-y-8'>
                    <div className='border border-gray-300 rounded-full w-10 h-10 
                    flex items-center justify-center'>
                        <House size={26} className="!text-gray-400" />
                    </div>
                    <h1 className='text-2xl w-40 font-bold font-noto'>Luxury Facilities</h1>
                    <p className='text-sm'>
                        Sint officia commodo adipisicing elit nulla adipisicing exercitation
                        in deserunt. Ipsum in proident adipisicing magna.
                    </p>
                    <a href="#" className='uppercase font-bold underline underline-offset-8 py-2 block'>lear more</a>
                </div>

                <div className='rounded-sm p-4 space-y-8 bg-black text-white' style={{ boxShadow: "12px 15px #c7c6c6" }}>
                    <div className='border border-white rounded-full w-10 h-10 
                    flex items-center justify-center'>
                        <Bank size={24} className="!text-white" />
                    </div>
                    <h1 className='text-2xl w-40 font-bold font-noto'>Luxury Facilities</h1>
                    <p className='text-sm'>
                        Sint officia commodo adipisicing elit nulla adipisicing exercitation
                        in deserunt. Ipsum in proident adipisicing magna.
                    </p>
                    <a href="#" className='uppercase font-bold underline underline-offset-8 py-2 block'>lear more</a>
                </div>

                <div className='border border-gray-200 rounded-sm p-4 space-y-8'>
                    <div className='border border-gray-300 rounded-full w-10 h-10 
                    flex items-center justify-center'>
                        <Jeep size={26} className="!text-gray-400" />
                    </div>
                    <h1 className='text-2xl w-40 font-bold font-noto'>Luxury Facilities</h1>
                    <p className='text-sm'>
                        Sint officia commodo adipisicing elit nulla adipisicing exercitation
                        in deserunt. Ipsum in proident adipisicing magna.
                    </p>
                    <a href="#" className='uppercase font-bold underline underline-offset-8 py-2 block'>lear more</a>
                </div>
            </div>
        </div>
    )
}

export default Services

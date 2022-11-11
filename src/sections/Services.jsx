import { Bank, House, Jeep } from 'phosphor-react'
import React from 'react'
import ServiceCards from '../components/ServiceCards'

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
                <ServiceCards />
            </div>
        </div>
    )
}

export default Services

import React from 'react'
import maps from '../assets/maps.png'

const ContactUs = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container mx-auto px-5 sm:px-20 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className='h-full rounded-sm border border-gray-300 max-w-xl m-auto'>
                    <img src={maps} alt="" className='rounded-sm' />
                </div>

                <div className="bg-white flex flex-col md:ml-auto w-full">
                    <h1 className='text-3xl font-noto font-bold mb-1'>Lets keep in touch</h1>

                    <p className="text-sm mb-5 text-gray-600">Mollit aliquip sint consectetur occaecat deserunt ad excepteur ex.</p>
                    <div className="relative mb-2">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-2">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-2">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 
                        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none 
                        text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded-sm text-lg">Button</button>
                    <p className="text-xs text-gray-500 mt-3">Laboris anim ut sint ullamco quis elit Lorem.</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUs

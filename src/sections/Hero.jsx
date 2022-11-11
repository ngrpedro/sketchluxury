import React from 'react'
import mainimage from "../assets/mainimage.svg"


const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 sm:px-20 py-14 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 font-noto">
                        SKETCH LUXURY INTERIOR DESIGN
                    </h1>
                    <p className="mb-8 leading-relaxed">Fugiat elit ullamco veniam et. Reprehenderit deserunt eu proident commodo id velit commodo non occaecat
                        voluptate fugiat fugiat incididunt. Do ea elit veniam mollit ea esse laborum incididunt fugiat sit et veniam aute culpa.
                        Proident nostrud fugiat tempor proident cillum nisi eu.</p>
                    <div className="flex justify-center">
                        <button className="text-white bg-gray-900 py-2 px-6 focus:outline-none 
                        hover:bg-gray-600 rounded-sm text-lg shaddowbutton">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 
                            focus:outline-none hover:bg-gray-200 rounded-sm text-lg shaddowbutton">
                            Button
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={mainimage} />
                </div>
            </div>
        </section>
    )
}

export default Hero

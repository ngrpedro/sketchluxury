import React from 'react'

import men from "../assets/men.svg"
import team from "../assets/team.svg"


const Texts = () => {
    return (
        <div>
            <section className="text-gray-600 body-font flex">
                <div className="container mx-auto flex flex-col px-5 sm:px-20 pt-14 md:flex-row items-center justify-between w-full">
                    <div className='flex flex-col items-start max-w-xl'>
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 font-noto">
                            We believe that a team makes any project better
                        </h1>
                        <p className="mb-8 leading-relaxed">Fugiat elit ullamco veniam et. Reprehenderit deserunt eu proident commodo id velit commodo non occaecat
                            voluptate fugiat fugiat incididunt. Do ea elit veniam mollit ea esse laborum incididunt fugiat sit et veniam aute culpa.
                            Proident nostrud fugiat tempor proident cillum nisi eu.</p>
                        <div className="flex justify-center">
                            <button className="text-white bg-gray-900 py-2 px-6 focus:outline-none 
                        hover:bg-gray-600 rounded-sm text-lg shaddowbutton">
                                Button
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={team} alt="" className='md:max-w-md' />
                    </div>
                </div>
            </section>

            <hr className='my-10 sm:mx-60'/>

            <section className="text-gray-600 body-font flex">
                <div className="container mx-auto flex flex-col px-5 sm:px-20 pb-14 pt-0 md:flex-row-reverse items-center justify-between w-full">
                    <div className='flex flex-col items-start max-w-xl'>
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 font-noto">
                            Simple way to male stylish living room
                        </h1>
                        <p className="mb-8 leading-relaxed">Fugiat elit ullamco veniam et. Reprehenderit deserunt eu proident commodo id velit commodo non occaecat
                            voluptate fugiat fugiat incididunt. Do ea elit veniam mollit ea esse laborum incididunt fugiat sit et veniam aute culpa.
                            Proident nostrud fugiat tempor proident cillum nisi eu.</p>
                        <div className="flex justify-center">
                            <button className="text-white bg-gray-900 py-2 px-6 focus:outline-none 
                        hover:bg-gray-600 rounded-sm text-lg shaddowbutton">
                                Button
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={men} alt="" className='md:max-w-md' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Texts

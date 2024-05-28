import React from "react";


const Card = () =>{
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Home</span>
                <img className='h-full w-full object-cover rounded-lg' src="https://images.pexels.com/photos/12679/pexels-photo-12679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HeadPhones" />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Toalla de cuerpo</span>
                <span className='text-lg font-medium'>300 us</span>
            </p>
        </div>
    )
};

export default Card ;
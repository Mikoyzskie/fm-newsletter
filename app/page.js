"use client"

import Image from 'next/image'
import { useRef } from 'react';
// import { useState } from 'react';

export default function Home() {
  const updates = ["Product discovery and building what matters","Measuring to ensure updates are a success","And much more!"];
  let list = 1;
  
  // const [userMail, setUserMail] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className='newsletter bg-white p-5 flex rounded-[35px]'>
      <div className='textContainer m-5 p-5 max-w-md flex flex-col justify-center'>
        <h1 className='heroTitle text-5xl font-extrabold my-5'>Stay updated!</h1>
        <p className=''>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='my-3'>
          {
            updates.map((items) => (
              <li key={items} className='flex my-3'>
                <Image
                  src="/icon-list.svg"
                  alt="List Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                  style={{width: 'auto', height: 'auto'}}
                />
                {items}
              </li>
            ))
          }
        </ul>
        <form className='flex flex-col mt-2' onSubmit={handleSubmit}>
          <p className='flex justify-between'>
            <label className='label text-xs font-bold'>Email address</label>
            <span className='labelValid text-xs font-bold text-[#FF6257] peer-invalid:block hidden'>Valid email required</span>
          </p>
          <span className='labelValid text-xs font-bold text-[#FF6257] peer-invalid:block hidden'>Valid email required</span> 
          <input type="email" name="email" id="email" className='input p-4 rounded-lg mb-5 mt-2 invalid:border-[#FF6257] peer' placeholder='email@company.com'/>
          
          <button type='submit' className='buttonSubmit p-4 text-white rounded-lg hover:shadow hover:shadow-[0_20px_25px_-5px_rgba(255,103,62,0.3)]'
          
          >Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className='imageContainer flex justify-center items-center'>
        <Image
          src="/illustration-sign-up-desktop.svg"
          alt="List Icon"
          width="0"
          height="0"
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  )
}

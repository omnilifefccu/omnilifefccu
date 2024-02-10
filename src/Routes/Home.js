import React from 'react';
import '../App.css';
import aboutusImg from '../media/virtual-reality-4995294.jpg';
import backgroundGifDesktop from '../media/logo.jpg'; // Import the desktop background GIF file
import backgroundGifMobile from '../media/logo-nobg.png'; // Import the mobile background GIF file

export default function Home() {
  return (
    <div className='text-white mb-10'>
      {/* Background GIF 
      <div
        className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundGifDesktop})`, // Desktop background GIF
          '@media (max-width: 768px)': { // Media query for mobile devices
           backgroundImage: `url(${backgroundGifMobile})` // Mobile background GIF
          }
        }}
      ></div>
      */}

      {/* Content */}
      <div className='max-w-[900px] mt-[96px] mb-[96px] mx-auto text-center flex flex-col bg-transparent relative z-10'>
        <p className='text-blue-500 text-4xl mb-2'>An FCCU Chapter</p>
        <h1 className='text-6xl font-bold mb-2'>Omnilife VR</h1>
        <p className='text-lg'>A frontrunner in immersive technologies.</p>
      </div>

      {/* About Us Section */}
      <div className="flex items-center justify-center relative z-10">
        <div className="max-w-full p-4 md:p-10 w-full mx-5 md:mx-20 overflow-hidden bg-black text-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="overflow-hidden w-full md:w-1/2">
              <img src={aboutusImg} alt="Square Image" className="object-cover w-full h-full md:h-auto" />
            </div>
            <div className="ml-0 md:ml-10 w-full md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold text-white-800">Our Goals</h2>
              <p className="mt-2 text-m text-white-600">At OmnilifeVR, our mission is to introduce students to the immersive realm of Virtual Reality (VR). Through hands-on experiences, educational initiatives, and innovative outreach, we aim to democratize access to VR technology, spark curiosity, and foster a vibrant community passionate about its exploration. By providing opportunities for students to engage with VR content, collaborate on projects, and contribute to its advancement, we seek to empower the next generation of innovators and pioneers in this exciting field. Join us as we embark on a journey to unlock the boundless potential of VR and shape the future of technology together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

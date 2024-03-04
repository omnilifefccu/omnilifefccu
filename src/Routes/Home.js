import React, { useEffect, useState } from 'react';
import '../App.css';
import aboutusImg from '../media/virtual-reality-4995294.jpg';
import backgroundGifDesktop from '../media/DesktopBackground.gif'; // Import the desktop background GIF file
import backgroundGifMobile from '../media/MobileBackground.gif'; // Import the mobile background GIF file

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(backgroundGifDesktop); // Default to desktop background
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowAboutUs(position > window.innerHeight * 0.5); // Show About Us section when scrolled halfway through viewport
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check screen width to determine background image
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(backgroundGifMobile);
      } else {
        setBackgroundImage(backgroundGifDesktop);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* OmnilifeFCCU Section */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 text-center bg-cover bg-center h-screen overflow-hidden transition-opacity transition-transform ${showAboutUs ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className='max-w-full'>
          <p className='text-blue-500 text-4xl mb-2'>An FCCU Chapter</p>
          <h1 className='text-6xl font-bold mb-2'>Omnilife VR</h1>
          <p className='text-lg'>A frontrunner in immersive technologies.</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className={`max-w-full mb-20 p-4 md:p-10 mx-4 md:mx-10 overflow-hidden bg-black text-white rounded-lg shadow-lg relative ${showAboutUs ? 'opacity-100' : 'opacity-0'}`} style={{ marginTop: '100vh', zIndex: 20, transition: 'opacity 0.5s ease-in-out' }}>
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
  );
}

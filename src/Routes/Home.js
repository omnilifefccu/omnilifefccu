import React, { useEffect, useState } from 'react';
import '../App.css';
import aboutusImg from '../media/virtual-reality-4995294.jpg';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity and scale based on scroll position
  const opacity = Math.max(0, 1 - scrollPosition * 0.0025);
  const scale = Math.max(0.5, 1 - scrollPosition * 0.0005);

  return (
    <div className='text-white mb-20 mt-40 relative overflow-hidden'>
      {/* OmnilifeFCCU Section */}
      <div
        className="fixed inset-0 flex items-center justify-center z-10 text-center"
        style={{
          opacity: opacity.toFixed(2), // Limit opacity to two decimal places
          transform: `scale(${scale.toFixed(2)})`, // Limit scale to two decimal places
          transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out', // Smooth transition for opacity and scale
        }}
      >
        <div className='max-w-full'>
          <p className='text-blue-500 text-4xl mb-2'>An FCCU Chapter</p>
          <h1 className='text-6xl font-bold mb-2'>Omnilife VR</h1>
          <p className='text-lg'>A frontrunner in immersive technologies.</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-full p-4 md:p-10 mx-4 md:mx-10 overflow-hidden bg-black text-white rounded-lg shadow-lg" style={{ marginTop: '100vh' }}>
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

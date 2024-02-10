import React from 'react'
import OmnilifeLogo from '../media/logo-nobg.png'
import PlusIcon from '../media/plus.png'
import DataCampLogo from '../media/datacamp_logo.png'
import DataCampIMG from '../media/Datacamp_image.jpg'

export default function Datacamp() {
  return (
<div className='text-white mb-10 mt-20'>
      <div className="flex items-center justify-center mb-6 p-10">
        <img src={OmnilifeLogo} alt="Omnilife Logo" className="w-24 h-24 mr-6" />
        <img src={PlusIcon} alt="Plus Icon" className="w-8 h-8 mx-6" />
        <img src={DataCampLogo} alt="DataCamp Logo" className="w-24 h-24 ml-6" />
      </div>
      <div className="flex items-center justify-center relative z-10">
        <div className="max-w-full p-4 md:p-10 w-full mx-5 md:mx-20 overflow-hidden bg-black text-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="overflow-hidden w-full md:w-1/2">
              <img src={DataCampIMG} alt="Square Image" className="object-cover w-full h-full md:h-auto" />
            </div>
            <div className="ml-0 md:ml-10 w-full md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold text-white-800 mb-5">Unraveling the Data Science Universe</h2>
              <p className="mt-2 text-m text-white-600">Discover the dynamic realm of data science through OmnilifeVR's innovative collaboration with DataCamp. As pioneers in the field, we deeply appreciate the profound impact data science has on contemporary business landscapes. Through our strategic partnership with DataCamp, a premier online learning platform dedicated to data science and analytics, we aim to revolutionize learning experiences for aspiring data scientists.</p>
              <p className="mt-2 text-m text-white-600">With our expanded licensing capabilities, every student gains unfettered access to DataCamp's rich repository of resources, ensuring a personalized and enriching educational journey. DataCamp's meticulously crafted curriculum, coupled with its interactive learning approach, serves as a bridge between theoretical concepts and real-world applications, empowering learners to translate knowledge into actionable insights.</p>
              <p className="mt-2 text-m text-white-600">Our partnership endeavors to redefine data science education, equipping students with the skills and expertise needed to excel in today's data-driven world. By fostering a culture of continuous learning and innovation, we strive to propel students towards excellence and unlock their full potential in the field of data science. Join us on this transformative journey as we pave the way for a brighter future in data science education.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional DataCamp content can be added here */}
    </div>
  )
}

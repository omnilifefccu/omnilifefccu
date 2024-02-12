import React from 'react'
import OmnilifeLogo from '../media/logo-nobg.png'
import PlusIcon from '../media/plus.png'
import DataCampLogo from '../media/datacamp_logo.png'
import DataCampIMG from '../media/Datacamp_image.jpg'
import DatacampVideo from '../media/datacamp_video.mp4'

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
            <div className="overflow-hidden w-full md:w-1/3">
              <img src={DataCampIMG} alt="Square Image" className="object-cover w-full h-full md:h-auto" />
            </div>
            <div className="ml-0 md:ml-10 w-full md:w-2/3 mt-4 md:mt-0">
              <h2 class="text-3xl font-bold text-white mb-5">Unraveling the Data Science Universe</h2>
              <p class="mt-2 text-m text-white-600">Discover the dynamic realm of data science through OmnilifeVR's innovative collaboration with DataCamp. As pioneers in the field, we deeply appreciate the profound impact data science has on contemporary business landscapes. Through our strategic partnership with DataCamp, a premier online learning platform dedicated to data science and analytics, we aim to revolutionize learning experiences for aspiring data scientists.</p>
              <p class="mt-2 text-m text-white-600">With our expanded licensing capabilities, every student gains unfettered access to DataCamp's rich repository of resources, ensuring a personalized and enriching educational journey. DataCamp's meticulously crafted curriculum, coupled with its interactive learning approach, serves as a bridge between theoretical concepts and real-world applications, empowering learners to translate knowledge into actionable insights.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center relative z-10 mt-10">
          <div class="max-w-full p-4 md:p-10 w-full mx-5 md:mx-20 overflow-hidden bg-black text-white rounded-lg shadow-lg">
              <div class="flex flex-col md:flex-row items-center md:items-start justify-between">
                  <div class="ml-0 md:ml-10 w-full md:w-2/3 mt-4 md:mt-0">
                      <h2 class="text-3xl font-bold text-white mb-5">Why Datacamp?</h2>
                      <p className='pb-10'>In the rapidly evolving world of data science and analytics, staying up-to-date with the latest tools and techniques is essential for professionals and enthusiasts alike. DataCamp has emerged as a leading online learning platform, offering a plethora of courses and resources to help individuals master data science skills and advance their careers.</p>
                      <l>
                        <li>Mastering Data Science Skills</li>
                        <li>Hands-On Learning</li>
                        <li>Learning at Your Own Pace</li>
                        <li>DataCamp Certifications</li>
                        <li>Community and Support</li>
                        <li>Skill Tracks and Career Tracks</li>
                      </l>
                      <p className='pt-10'><b>Share Your DataCamp Success Story and Inspire Others! We would love to hear from you!</b> Share your incredible journey of growth and achievement with DataCamp! Whether you landed your dream job, excelled in a data science project, or transformed your career, we want to hear your story. Your experience can inspire others and highlight the power of data science education. Don't miss this chance to showcase your success and encourage fellow learners on their own path to greatness. Share your story today!</p>

                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3d-ApKJDxLztekpShKK3GCVdhWWyj7B_voYcT1nt3DreuSg/viewform" class="inline-block px-6 py-3 mt-10 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300">Share Your Story</a>

                  </div>
                  <div class="overflow-hidden w-full md:w-1/3 ml-20">
                      <div class="relative w-full h-96 md:h-auto shadow-md">
                          <video class="w-full h-full max-w-80" controls looped autoPlay muted>
                              <source src={DatacampVideo} type="video/mp4"/>
                          </video>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="flex items-center justify-center relative z-10 mt-10">
          <div class="max-w-full p-4 md:p-10 w-full mx-5 md:mx-20 overflow-hidden bg-black text-white rounded-lg shadow-lg">
              <div class="flex flex-col md:flex-row items-center md:items-start justify-between">
                  <div class="ml-0 md:ml-10 w-full md:w-2/3 mt-4 md:mt-0">
                      <h2 class="text-3xl font-bold text-white mb-5">Unleash Your Potential in Data Hackathons with DataCamp Workspace </h2>
                      <p class="mt-2 text-base text-white">Whether an experienced data professional or a newcomer, the DataCamp Workspace equips individuals with the resources to excel in Data Hackathons, making a mark in the data science community.</p>
                      <p class="mt-2 text-base text-white">DataCamp's innovation is evident through features like the DataCamp Workspace, which is a game-changer in the data science learning landscape. This new tool transforms Data Hackathons by providing an integrated platform for participants. In this Workspace, users can collaborate seamlessly, tackle challenges using real-world datasets, and access learning materials. The Workspace's flexibility and streamlined workflow enhance productivity and creativity, essential in time-constrained competitions.</p>
                  </div>
                  <div class="md:w-1/3 md:ml-20 mt-4 md:mt-0">
                      <h2 class="text-3xl font-bold text-white mb-5">How to apply for DataCamp License?</h2>
                      <p class="mt-2 text-base text-white">You'll be directed to a Google Forms page. This is where you need to fill out the necessary information. </p>
                      <p class="mt-2 text-base text-white">The organizers will review the submitted forms and verify the information you provided. You will be notified through email in 1 to 2 weeks. It will include instructions on how to access the DataCamp license. </p>
                      <p class="mt-2 text-base text-white">Once you're logged in, you will have access to 400+ courses covered by license. Just like that, you can explore the courses and start learning.</p>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdft5DH7TaV5zv3GAbXKJYiBaksb4lcuuETF-_G5mMHD3LHWA/viewform" class="inline-block px-6 py-3 mt-10 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300">Apply Now</a>
                  </div>
              </div>
          </div>
      </div>






      {/* Additional DataCamp content can be added here */}
    </div>
  )
}

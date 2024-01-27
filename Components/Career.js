import React from 'react'
import Image from 'next/image'
import career from "@/public/career.jpg"

const Career = () => {
  return (
    <div className='container'>
      <h1 className='text-center about'>Career </h1>
      <div className='row'>
        <div className='col-lg-6'>
         <Image src={career} alt='career'></Image>
        </div>
        <div className='col-lg-6'>
          <p>Overall, 70% of employees would recommend working at Swiggy to a friend. This is based on 2,201 anonymously submitted reviews on Glassdoor. 
            How do job seekers rate their interview experience at Swiggy? 48% of job seekers rate their interview experience at Swiggy as positive.</p>

            <p>Technology and Engineering: Swiggy heavily relies on technology to manage its operations, including order processing, 
              delivery logistics, and customer support. Therefore, they often hire software engineers, data scientists, product managers, UI/UX designers, and other technology professionals.
              Operations and Logistics: Swiggy's success depends on its ability to efficiently manage delivery operations. 
               They hire professionals in logistics management, supply chain operations, fleet management, and quality assurance to ensure smooth operations and timely deliveries.
              Marketing and Sales: Swiggy invests in marketing campaigns to acquire new customers, retain existing ones, and promote its services. 
              Marketing professionals, including digital marketers, brand managers, and sales executives, play a crucial role in expanding Swiggy's customer base and increasing brand awareness.
              Customer Support and Experience: Providing excellent customer service is essential for Swiggy's success. 
              They hire customer support representatives, customer experience managers, and quality assurance specialists to address customer queries, resolve issues, and ensure a positive user experience.</p>
        </div>

      </div>
    </div>
  )
}

export default Career

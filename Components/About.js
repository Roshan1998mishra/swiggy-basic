import React from 'react'
import Image from 'next/image'
import about from "@/public/about.jpg";

const About = () => {
  return (
    <div className='container'>
      <h1 className='text-center about'>About Us</h1>
    <div className='row'>
      <div className='col-lg-6'>
       <Image src={about} alt='about'></Image>
      </div>
      <div className='col-lg-6'>
      <h1>Swiggy</h1>
      <p> For an average city dweller in India, Swiggy equals convenience. Since 2014, this young brand has been on a mission to elevate the quality of life for urban consumers in India through a range of multi-category delivery offerings.
         Be it grocery, food delivery or cloud kitchens, Swiggy has been driving innovation through the heart of it all.
        Swiggy has also been one of the pioneers spearheading innovative ways of working in India. 
       The Bengaluru-based organization’s remote-first work practices currently range from their quarterly in-office meetups to workations to monthly town halls with the leaders.
       With 5,000 plus employees working from across 487 different cities across the country, Swiggy is striving to build a values-first organization. In this story, Swiggy’s Internal Communications Manager, Soumya Shetty joins us to share how Slido helps Swiggy make the company values more tangible to its employees.</p>
      </div>
    </div>
</div>
  )
}

export default About

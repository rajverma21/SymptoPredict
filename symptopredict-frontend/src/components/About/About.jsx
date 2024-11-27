import React from 'react'
import rajImage from '../../assets/rajImage.jpg'
import ananyaImage from '../../assets/ananyaImage.jpeg'
import amiyaImage from '../../assets/amiyaImage.jpg'
import pallaviImage from '../../assets/pallaviImage.jpg'

const About = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center heroSectionFont mx-auto min-h-screen pt-40 pb-20 max-w-[70%]'>
      {/* Hero Section */}
      <section className='text-center mb-8 sm:mb-12'>
        <h1 className='text-2xl l:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6f6f6d8] font-semibold heroSectionFont'>
          About Us
        </h1>
        <p className='text-md md:text-lg max-w-2xl text-[#f6f6f6d8] mx-auto'>
          We are a passionate team dedicated to delivering the best solutions
          for our clients. Our mission is to create impactful digital
          experiences that drive success.
        </p>
      </section>

      {/* Team Section */}
      <section className='w-full max-w-6xl'>
        <h2 className='text-xl l:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold heroSectionFont text-gray-200 text-center mb-12'>
          Meet Our Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Team Member Card */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='bg-gradient-to-r border-2 border-[#ffffff61] from-[#605fbf] via-[#1e3a8a] to-[#605fbf] shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl'
            >
              <img
                src={member.image}
                alt={member.name}
                className='w-24 h-24 object-cover rounded-full mb-4 transition-opacity duration-700 hover:opacity-80 '
              />
              <h3 className='text-lg sm:text-xl font-semibold text-white'>
                {member.name}
              </h3>
              <p className='text-sm sm:text-base text-gray-300'>
                {member.position}
              </p>
              <p className='text-slate-400 mt-3 text-center'>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: 'Raj Verma',
    position: 'UI/UX Designer & Frontend Developer',
    description:
      'Specializes in crafting beautiful and responsive web experiences.',
    image: rajImage
  },
  {
    name: 'Ananya Singh',
    position: 'Data Scientist',
    description:
      'Built prediction models, leveraging data to provide accurate insights.',
    image: ananyaImage
  },
  {
    name: 'Pallavi Das',
    position: 'Backend Developer',
    description:
      'Focused on creating personalized fruit diets based on predicted diseases.',
    image: pallaviImage
  },
  {
    name: 'Amiya Kumar',
    position: 'Data Scientist',
    description: 'Expert in data analysis and machine learning models.',
    image: amiyaImage
  }
]

export default About

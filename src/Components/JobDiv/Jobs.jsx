import React from 'react'
import {BsClock} from 'react-icons/bs'
import logo1 from '../../Assets/logo 1.png'
import logo2 from '../../Assets/logo 2.png'
import logo3 from '../../Assets/logo 3.png'
import logo4 from '../../Assets/logo 4.png'


const Data =[
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'General Electrical'
  },
  {
    id:2,
    image: logo2,
    title: 'Business Development',
    time: '4hrs',
    location: 'Manchester',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'General Electrical'
  },
  {
    id:3,
    image: logo3,
    title: 'Product Management',
    time: '1day',
    location: 'New Delhi',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'Samsung'
  },
  {
    id:4,
    image: logo4,
    title: 'Data Analytics',
    time: 'Now',
    location: 'Bengaluru',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'Larsen & Turbo'
  },
  {
    id:4,
    image: logo4,
    title: 'Data Analytics',
    time: 'Now',
    location: 'Bengaluru',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'Larsen & Turbo'
  },
  {
    id:3,
    image: logo3,
    title: 'Product Management',
    time: '1day',
    location: 'New Delhi',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'Samsung'
  },
  {
    id:2,
    image: logo2,
    title: 'Business Development',
    time: '4hrs',
    location: 'Manchester',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'General Electrical'
  },
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'hello wguty sj swmdq woejjd w wjdinjd qjojdojdopwsjd qowjopjdo ek.',
    company: 'General Electrical'
  }
]

const Jobs = () => {
  return (
    <div>

    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">


    {
      Data.map(({id,image,title, time, location, desc, company}) =>{
        return (
          <div key = {id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-sky-500 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
      <span className='flex justify-between items-center gap-4'>
        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>

      <span className='flex items-center text-[#ccc] gap-1'>
      <BsClock />{time}
      </span>
      </span>

      <h6 className='text-[#ccc}'>{location}</h6>

      <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
        {desc}
      </p>

      <div className='company flex items-center gap-2'>
        <img src={image} alt="Company logo" className='w-[10%]'/>
        <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
      </div>

      <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textcolor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
        Apply Now
      </button>
    </div>

        )
    })
    }


    </div>



    </div>
  )
}

export default Jobs
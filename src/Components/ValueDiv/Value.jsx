import React from 'react';
import a1 from '../../Assets/a1.png';
import a2 from '../../Assets/a2.png';
import a3 from '../../Assets/a3.png';

const d = [
  {
    id: 1,
    img: a1,
    h: 'Simplicity',
    desc: 'We work on the basis of creating trust, which can be nurtured through authenticity and transparency.',
  },
  {
    id: 2,
    img: a2,
    h: 'Simplicity',
    desc: 'We work on the basis of creating trust, which can be nurtured through authenticity and transparency.',
  },
  {
    id: 3,
    img: a3,
    h: 'Simplicity',
    desc: 'We work on the basis of creating trust, which can be nurtured through authenticity and transparency.',
  }
];

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        The value that holds us true and to account
      </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        {d.map(({ id, img, h, desc }) => {
          return (
            <div key={id} className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
              <div className='flex items-center gap-3'>
                <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center'>
                  <img src={img} alt="" className='w-[70%]' />
                </div>
                <span className='font-semibold text-textColor text-[18px]'>
                  {h}
                </span>
              </div>
              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Value;

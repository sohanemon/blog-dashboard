'use client';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './logo';
import { ReactSVG } from 'react-svg';

export default function Prompt() {
  function ToggleSwitch() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <label htmlFor="Toggle4" className="inline-flex items-center cursor-pointer border ">
        <input id="Toggle4" type="checkbox" className="hidden peer" checked={isChecked} onChange={handleChange} />
        <span className={`flex flex-col select-none items-center gap-2 cursor-pointer from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-[5px] px-3 py-1 text-[10px] ${
              isChecked && 'bg-gradient-to-tr text-white'
            }`}>Text</span>
        <span className={`px-3 py-1 text-[10px]  from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-[5px] ${
              !isChecked && 'bg-gradient-to-tr text-white'
            }`}>Select</span>
      </label>
    );
  }

  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-full min-h-auto'>
  <div className='absolute z-50 flex'>
      <div className='w-[448px] min-h-[1010px] rounded-lg bg-rgba-opacity m-5 mb-0'>
      <p className='text-xs font-medium leading-loose p-5 text-white  pb-0'>Prompt</p>
      <input
  className="w-[400px] min-h-[149px] p-2 rounded-md bg-transparent m-5 text-[10px] whitespace-normal align-top"
  placeholder="You are a multilingual assistant that translates"
/>  

<div className='flex justify-between'>
    <div className='flex items-center text-xs font-medium leading-loose p-5 text-white  '>
      <span className='pr-4'>Veriables  </span><span><ReactSVG src={"/assets/info.svg"} /></span>
    </div>

    <div className='flex items-center text-xs font-medium leading-loose p-5 text-white '>
      <span><ReactSVG src={"/assets/plus.svg"} /></span><span className='pl-2'>Add</span>
    </div>
</div>
<div className='justify-center text-center'>
  <table className="table-fixed rounded-md bg-transparent mx-auto ">
  <thead>
    <tr className="border-b">
      <th>Option</th>
      <th>veriable name</th>
      <th>example input</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >
<ToggleSwitch/>

</td>
      <td className='flex justify-between items-center'>
       <span> <ReactSVG src={"/assets/t.svg"} /></span>
       <span><input
  className="p-1 rounded-md bg-transparent text-4 whitespace-normal align-top ml-1"
  placeholder="Output_language"
/> </span> 
 </td>
      <td>+ add options</td>
      <td><span> <ReactSVG src={"/assets/delete.svg"} /></span></td>
    </tr>
    <tr>
      <td >
<ToggleSwitch/>

</td>
      <td className='flex justify-between items-center'>
       <span> <ReactSVG src={"/assets/t.svg"} /></span>
       <span><input
  className="p-1 rounded-md bg-transparent text-4 whitespace-normal align-top ml-1"
  placeholder="the text to needs"
/> </span> 
 </td>
      <td>+ add options</td>
      <td><span> <ReactSVG src={"/assets/delete.svg"} /></span></td>
    </tr>
    <tr>
      <td>  </td>
    </tr>
  </tbody>
</table>
</div>
<div className='flex justify-between'>
    <div className='flex items-center text-xs font-medium leading-loose p-5 text-white  '>
      <span className='pr-4'>Veriables  </span><span><ReactSVG src={"/assets/info.svg"} /></span>
    </div>

    <div className='flex items-center text-xs font-medium leading-loose p-5 text-white '>
      <span><ReactSVG src={"/assets/plus.svg"} /></span><span className='pl-2'>Add</span>
    </div>
</div>
        </div>
       










        <div className='w-[542px] min-h-[1010px]t rounded-lg bg-rgba-opacity m-5 ml-0'>
            Preview and Test
  </div>
  </div>
<Image
        className='absolute top-0 right-0'
        src={'/assets/background.svg'}
        alt=''
        width={1245}
        height={375}
      />
 </section>    
)
}



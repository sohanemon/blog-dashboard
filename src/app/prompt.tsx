'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
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
  function ToggleSwitch2() {
    const [isCheckedd, setIsCheckedd] = useState(false);
  
    const handleChange = () => {
      setIsCheckedd(!isCheckedd);
    };
  
    return (
      <label htmlFor="Toggle4" className="inline-flex items-center  border ">
        <input id="Toggle4" type="checkbox" className="hidden peer" checked={isCheckedd} onChange={handleChange} />
        <span className={`flex flex-col select-none items-center gap-2  from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-[5px] px-3 py-1 text-[10px] ${
              isCheckedd && 'bg-gradient-to-tr text-white'
            }`}>Text</span>
        <span className={`px-3 py-1 text-[10px]  from-[#3E3E3E] to-[#979797] via-[#2C2C2C] rounded-[5px] ${
              !isCheckedd && 'bg-gradient-to-tr text-white'
            }`}>Select</span>
      </label>
    );
  }
  const [value, setValue] = useState<number>(50);
 function RangeSLider(): JSX.Element {

    
  
    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(Number(event.target.value));
    };
  
    const getRangeBackground = (): string => {
      const percentage = (value - 1) / 99 * 100;
      const color1 = '#FFFFFF'; // Pink color
      const color2 = '#FFFFFF26'; // Purple colorbackground: #FFFFFF26;

      return `linear-gradient(90deg, ${color1} ${percentage}%, ${color2} ${percentage}%)`;
    };
  
    return (
      <div>
      
        <input
          id="range"
          type="range"
          value={value}
          min={1}
          max={100}
          step={1}
          
          onChange={handleRangeChange}
          className="w-full h-0.5 bg-gradient-to-r from-white to-white rounded-full appearance-none cursor-pointer accent-white"
          style={{
            background: getRangeBackground(),
            outline: 'none',
            WebkitAppearance: 'none',
          }}
        />
      
      </div>
    );
  }
  
  return (
    <section className='relative bg-themeSlate flex-col items-center flex  w-full min-h-auto'>
  <div className='absolute z-50 flex'>
    {/* prompt starts */}
      <div className='w-[448px] min-h-[1010px] rounded-lg bg-rgba-opacity m-5 mb-0'>
      <p className='text-xs font-medium leading-loose p-5 text-white  pb-0'>Prompt</p>
      <p
  className="w-[400px] min-h-[149px] p-2 rounded-md bg-transparent m-5 text-[10px] whitespace-normal align-top"
 
>You are a multilingual assistant that translates from english to output_language: the text that needs to be translated</p> 

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
<ToggleSwitch2/>

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
<div className='flex justify-between mt-5'>
    <div className='flex items-center text-xs font-medium leading-loose p-5 pb-1 text-white  '>
      <span className='pr-4'>Context  </span>
    </div>

    <div className='flex items-center text-xs font-medium leading-loose p-5 pb-1 pl-0 text-white '>
      <span><ReactSVG src={"/assets/plus.svg"} /></span><span className='pl-2'>Add</span>
    </div>
</div>

<div className='justify-center text-center'>
<input
  className="w-[400px] min-h-[38px] p-2 rounded-md bg-transparent m-1 ml-0 text-[10px] whitespace-normal align-top"
  placeholder="You can import datasets as context"
/>  
</div>

    <div className=' items-center text-xs font-medium leading-loose mt-5 p-5 pb-1 text-white  '>
      <p className='pr-4'>Configuration Settings  </p>
      <p className='text-[10px]'>model</p>
    </div>
    <div className='flex  items-center mt-2 pl-3'>
          <div className='flex buttonhover  items-center pt-1 pb-1 pl-1 pr-4 mr-3 hover:bg-gradient-to-r from-[#2C2C2C] via-[#2C2C2C] to-[#2C2C2C]'>
          <ReactSVG src={"/assets/gptblack.svg"} height={"22px"} width={"22px"} />
          <p  className='text-[10px] ml-2'>GPT-4</p>

          </div>
          <div className='flex buttonhover  items-center pt-1 pb-1 pl-1 pr-4 mr-3 hover:bg-gradient-to-r from-[#2C2C2C] via-[#2C2C2C] to-[#2C2C2C]'>
          <ReactSVG src={"/assets/gptblack.svg"} height={"22px"} width={"22px"} />
          <p  className='text-[10px] ml-2'>GPT-4</p>

          </div>
          <div className='flex buttonhover   items-center pt-1 pb-1 pl-1 pr-4 mr-3 hover:bg-gradient-to-r from-[#2C2C2C] via-[#2C2C2C] to-[#2C2C2C]'>
          <ReactSVG src={"/assets/gptblack.svg"} height={"22px"} width={"22px"} />
          <p  className='text-[10px] ml-2'>GPT-4</p>

          </div>


         
      </div> 
<div className='w-full p-5 pb-0  flex items-center'>

<p className='text-[10px] text-white'>temperature</p>
</div>
      <div className='w-full p-5 pb-1 pt-0 flex items-center'>
      <div className='w-60'><RangeSLider/></div><p className='w-20 text-[10px] text-white ml-4 mt-3'>{value}%</p>

          </div>
          <div className='w-full p-5 pb-0 items-center'>

<p className='text-[10px] text-white'>system message</p>
<input
  className="w-[400px] min-h-[82px] p-2 rounded-md bg-transparent mt-2 text-[10px] whitespace-normal align-top"
  placeholder="You are a multilingual assistant that translates"
/>  
</div>

        </div>
{/* prompts ends */}
    {/* preview and text starts*/}



        <div className='realtive w-[542px] min-h-[1010px]t rounded-lg bg-rgba-opacity m-5 ml-0'>
        <p className='text-xs font-medium leading-loose p-5 text-white  pb-0'>Preview and Test</p>
            <div className='p-5 pb-0'>
                  <div className='w-full flex justify-end items-center'>
                    <p className='rounded-md bg-transparent p-3 mt-2 text-[10px] whitespace-normal '>You are a multilingual assistant that translates from english to French: Hello!</p>
                    <ReactSVG src={"/assets/user.svg"} className='ml-3'/>
                  </div>
                  <div className='w-full flex justify-start items-start'>
                  <ReactSVG src={"/assets/chatgpt.svg"}/>
                    <p className='rounded-md bg-transparent p-3 mt-2 ml-3 text-[10px] whitespace-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                   
                  </div>
            </div>

            <div className="absolute bottom-0 p-5 pb-0 mb-20">
              <div className='flex '>
              <input
  className="w-[400px] p-3 rounded  mt-0  text-[10px] whitespace-normal align-top"
/>  

<button className='flex items-center bg-white rounded pl-4 pr-4 pt-0 pb-0 ml-4'><p className='black-text  text-[10px] '>Send</p><ReactSVG src={"/assets/send.svg"} className='ml-2'/> </button>
              </div>
          
      </div>
  </div>

   {/* preview and text ends*/}
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



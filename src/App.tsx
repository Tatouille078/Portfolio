import { useEffect, useRef, useState } from 'react';
import './App.css'
import Header from './components/Header'
import { IoIosArrowDown } from "react-icons/io";

function App() {

  const nameRef = useRef<HTMLElement | null>(null);
  const [isTextEvent, setTextEvent] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const nameElement = nameRef.current;

    if (!nameElement) return;

    const dataValue = nameElement.getAttribute("data-value") || "";
    let iteration = 0;

    const interval = setInterval(() => {
      nameElement.innerHTML = dataValue
        .split("")
        .map((letter: string, index: number) => {
          if (iteration >= letters.length) {
            clearInterval(interval);
          }
          if (index < iteration) {
            return dataValue[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextEvent(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className='flex flex-col items-center bg-zinc-900 text-white'>
        <Header />
        <div className='w-[60vh] mt-60 mb-60'>
          <h1 className={`font-monospace hithere text-[7rem] mb-4 transition-all duration-1000  ${isTextEvent ? 'translate-y-0' : 'translate-y-20'}`} data-value="Hi there," ref={nameRef}>Hi there,</h1>
          <h6 className={`text-3xl text-gray-300 flex-wrap transition-all duration-1000 ${isTextEvent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}`}>My name is Loïck Devismes, <br /> I'm a web and game developper</h6>
        </div>
        <div className='w-[140vh] grid grid-cols-2 mb-20'>
          <div className={`mr-16 flex flex-col transition-all duration-1000 ${isTextEvent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-4'}`}>
            <h2 className="self-center text-[68px] mb-4 py-2">Who Am I?</h2>
            <p className='text-gray-300 text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia distinctio laudantium beatae ab nemo, odit assumenda molestias eaque quam consectetur aut delectus libero, ipsa repellat illum sint ducimus! Minima.</p>
          </div>
          <div className={`ml-16 flex flex-col transition-all duration-1000 ${isTextEvent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <h2 className="self-center text-[68px] text-gray-900 outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 px-10 mb-4 py-2">Developper</h2>
            <p className='text-gray-300 text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facere quos voluptatibus, tenetur dicta delectus, repellendus dolorum error veniam, tempora quia tempore alias! Qui, delectus. Expedita, assumenda.</p>
          </div>
        </div>
        <div className='relative mb-20 w-5'>
          <IoIosArrowDown className='arrowDown' />
          <IoIosArrowDown className='top-3 arrowDown' />
          <IoIosArrowDown className='top-6 arrowDown' />
        </div>
        <div className='w-full relative'>
          <div className='sky'></div>
          <div className='flex flex-col items-center pt-52 pb-80 isolate'>
            <h2 className='text-7xl mb-4 py-2 fade-in'>Traits</h2>
            <div className='w-[140vh] grid grid-cols-3 gap-8 mt-40'>
              <div className='flex flex-col gap-4 border-r-2 border-gray-300 pr-4 fade-in'>
                <h3 className='text-4xl text-gray-100'>Creative</h3>
                <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita provident saepe, suscipit eos iste corrupti, reiciendis reprehenderit rerum illo hic quo ratione, cum eligendi asperiores fugiat animi repudiandae at?</p>
              </div>
              <div className='flex flex-col gap-4 text-center fade-in'>
                <h3 className='text-4xl text-gray-100'>Passionated</h3>
                <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita provident saepe, suscipit eos iste corrupti, reiciendis reprehenderit rerum illo hic quo ratione, cum eligendi asperiores fugiat animi repudiandae at?</p>
              </div>
              <div className='flex flex-col gap-4 text-end border-l-2 border-gray-300 pl-4 fade-in'>
                <h3 className='text-4xl text-gray-100'>Ambitious</h3>
                <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita provident saepe, suscipit eos iste corrupti, reiciendis reprehenderit rerum illo hic quo ratione, cum eligendi asperiores fugiat animi repudiandae at?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

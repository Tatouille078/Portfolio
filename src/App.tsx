import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='flex flex-col items-center bg-zinc-900 text-white'>
        <Header />
        <div className='w-[70vh] mt-60 mb-60'>
          <h1 className='text-8xl mb-4'>Hi there,</h1>
          <p className='text-3xl text-gray-300 flex-wrap'>My name is Loïck Devismes, I'm a front-end developper and designer.</p>
        </div>
        <div className='w-[140vh] grid grid-cols-2 mb-40'>
          <div className='mr-16 flex flex-col'>
            <h2 className='self-center text-7xl mb-4 py-2'>Who Am I?</h2>
            <p className='text-gray-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia distinctio laudantium beatae ab nemo, odit assumenda molestias eaque quam consectetur aut delectus libero, ipsa repellat illum sint ducimus! Minima.</p>
          </div>
          <div className='ml-16 flex flex-col'>
            <h2 className='self-center text-7xl text-gray-900 outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 px-10 mb-4 py-2'>Dev & Design</h2>
            <p className='text-gray-300 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facere quos voluptatibus, tenetur dicta delectus, repellendus dolorum error veniam, tempora quia tempore alias! Qui, delectus. Expedita, assumenda.</p>
          </div>
        </div>
        <div className='w-full relative'>
          <div className='sky'></div>
          <div className='flex flex-col items-center pt-32 pb-64 isolate'>
            <h2 className='text-7xl mb-4 py-2'>Traits</h2>
            <div className='w-[140vh] grid grid-cols-3 gap-8 mt-20'>
              <div className='flex flex-col gap-4 border-r pr-4'>
                <h3 className='text-4xl'>Creative</h3>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita provident saepe, suscipit eos iste corrupti, reiciendis reprehenderit rerum illo hic quo ratione, cum eligendi asperiores fugiat animi repudiandae at?</p>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-4xl'>Passionated</h3>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita provident saepe, suscipit eos iste corrupti, reiciendis reprehenderit rerum illo hic quo ratione, cum eligendi asperiores fugiat animi repudiandae at?</p>
              </div>
              <div className='flex flex-col gap-4 text-end border-l pl-4'>
                <h3 className='text-4xl'>Ambitious</h3>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita provident saepe, suscipit eos iste corrupti, reiciendis reprehenderit rerum illo hic quo ratione, cum eligendi asperiores fugiat animi repudiandae at?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

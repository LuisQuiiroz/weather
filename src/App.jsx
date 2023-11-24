function App () {
  return (
    <main>
      <section>
        <article className='p-4 bg-blue-1 min-h-screen'>
          <button className='py-3 px-5 bg-gray-3'>Seach for places</button>
          <div className='flex flex-col items-center'>
            <img className='w-36 pt-20 ' src='/shower.png' alt='shower' />
            <p className='text-[144px] font-medium'>15<span className='text-gray-2 text-5xl'>°C</span></p>
            <p className='text-gray-2 text-4xl font-semibold pb-12'>Shower</p>
            <div className='flex gap-4 text-gray-2 text-lg font-medium pb-6'>
              <span>Today</span>
              <span>•</span>
              <span>Fri, 5,Jun</span>
            </div>
            <p className='text-gray-2 text-lg font-semibold'>Helsinki</p>
          </div>
        </article>
      </section>
      <section className='p-12 grid grid-cols-2 gap-7'>
        <article className='flex flex-col items-center bg-blue-1 py-4 px-5 m-auto '>
          <p className='text-base font-medium pb-3'>Tomorrow</p>
          <img className='w-14 pb-8' src='/shower.png' alt='shower' />
          <div className='flex gap-8'>
            <span>16°C</span>
            <span className='text-gray-2'>11°C</span>
          </div>
        </article>
        <article className='flex flex-col items-center bg-blue-1 py-4 px-5 m-auto '>
          <p className='text-base font-medium pb-3'>Tomorrow</p>
          <img className='w-14 pb-8' src='/shower.png' alt='shower' />
          <div className='flex gap-8'>
            <span>16°C</span>
            <span className='text-gray-2'>11°C</span>
          </div>
        </article>
        <article className='flex flex-col items-center bg-blue-1 py-4 px-5 m-auto '>
          <p className='text-base font-medium pb-3'>Tomorrow</p>
          <img className='w-14 pb-8' src='/shower.png' alt='shower' />
          <div className='flex gap-8'>
            <span>16°C</span>
            <span className='text-gray-2'>11°C</span>
          </div>
        </article>
        <article className='flex flex-col items-center bg-blue-1 py-4 px-5 m-auto '>
          <p className='text-base font-medium pb-3'>Tomorrow</p>
          <img className='w-14 pb-8' src='/shower.png' alt='shower' />
          <div className='flex gap-8'>
            <span>16°C</span>
            <span className='text-gray-2'>11°C</span>
          </div>
        </article>
        <article className='flex flex-col items-center bg-blue-1 py-4 px-5 m-auto '>
          <p className='text-base font-medium pb-3'>Tomorrow</p>
          <img className='w-14 pb-8' src='/shower.png' alt='shower' />
          <div className='flex gap-8'>
            <span>16°C</span>
            <span className='text-gray-2'>11°C</span>
          </div>
        </article>
      </section>
      <section className='grid grid-cols-1 gap-8 p-5'>
        <h3 className='text-2xl font-bold'>Today’s Hightlights </h3>
        <article className='flex flex-col items-center bg-blue-1 w-full p-6'>
          <p className='text-base font-medium pb-2'>Wind status</p>
          <p className='text-6xl font-bold'>7<span className='text-5xl font-medium'>mph</span></p>
        </article>
        <article className='flex flex-col items-center bg-blue-1 w-full p-6'>
          <p className='text-base font-medium pb-2'>Humidity</p>
          <p className='text-6xl font-bold'>84<span className='text-5xl font-medium'>%</span></p>
        </article>
        <article className='flex flex-col items-center bg-blue-1 w-full p-6'>
          <p className='text-base font-medium pb-2'>Visibility</p>
          <p className='text-6xl font-bold'>6,4<span className='text-5xl font-medium'>miles</span></p>
        </article>
        <article className='flex flex-col items-center bg-blue-1 w-full p-6'>
          <p className='text-base font-medium pb-2'>Air Pressure</p>
          <p className='text-6xl font-bold'>998<span className='text-5xl font-medium'>mb</span></p>
        </article>
      </section>
    </main>
  )
}

export default App

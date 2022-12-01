import React from 'react'
import { CardsData } from '../typings';
import MiddleCard from './MiddleCard'

type LiveProps = {
  data: Array<CardsData>;
}

function LiveAnywhere({data}: LiveProps) {
  return (
    <section>
      <h2 className='text-4xl font-semibold py-8'>
        Live Anywhere
      </h2>

      <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
      {data?.map(({img, title}) => (
        <MiddleCard
          key={img}
          img={img}
          title={title}
        />
      ))}
      </div>
    </section>
  )
}

export default LiveAnywhere

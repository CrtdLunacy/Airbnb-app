import React from 'react'
import { ExploreData } from '../typings'
import SmallCard from './SmallCard'

type ExplorationProps = {
  data: Array<ExploreData>
}

function Exploration({data}: ExplorationProps) {
  return (
    <section className='pt-6'>
      <h2 className='text-4xl font-semibold pb-5'>
        Explore nearby
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data?.map(({img, location, distance}) => (
        <SmallCard
          key={img}
          img={img}
          location={location}
          distance={distance}
        />
      ))}
      </div>
    </section>
  )
}

export default Exploration

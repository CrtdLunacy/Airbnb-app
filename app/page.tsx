import Banner from '../components/Banner';
import Exploration from '../components/Exploration'
import LargeCard from '../components/LargeCard';
import LiveAnywhere from '../components/LiveAnywhere';
import { CardsData, ExploreData } from '../typings';

async function Home() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData: Array<ExploreData> = await res.json();

  const res2 = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData: Array<CardsData> = await res2.json();


  return (
    <>
      <Banner />
      <div className='max-w-7xl mx-auto px-8 sm:px-16'>
        <Exploration data={exploreData} />
        <LiveAnywhere data={cardsData} />
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Whishlist curated by Airbnb'
          buttonText='Get Inspired'
        />
      </div>
    </>
  )
}

export default Home

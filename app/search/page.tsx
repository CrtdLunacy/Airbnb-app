import { format } from "date-fns";
import InfoCard from "../../components/InfoCard";
import MapComp from "../../components/MapComp";
import { InfoCardData } from "../../typings";

export type SearchProps = {
  searchParams: {
    location: string;
    startDate: string;
    endDate: string;
    guests: string;
  }
}

async function SearchPage({ searchParams }: SearchProps) {
  const formattedStartDate = format(new Date(searchParams.startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(searchParams.endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const res = await fetch('https://www.jsonkeeper.com/b/5NPS');
  const searchResults: Array<InfoCardData> = await res.json();

  return (
    <div className='flex'>
      <section className='flex-grow pt-14 px-6'>
        <p className='text-xs'>300+ Stays - {range} - {searchParams.guests} guests</p>

        <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {searchParams?.location}</h1>

        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
          <p className='button'>Cancelation flexibility</p>
          <p className='button'>Type of Place</p>
          <p className='button'>Price</p>
          <p className='button'>Rooms and Beds</p>
          <p className='button'>More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map (item  => (
            <InfoCard
              key={item.img}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </div>

      </section>

      <MapComp searchResults={searchResults} />
    </div>
  )
}

export default SearchPage

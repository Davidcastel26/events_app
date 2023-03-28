import AllEvntsPage from './event1';

const EventCityPage = ({ data }) => {
    return(
        <AllEvntsPage data={data}/>
    )
}

export default EventCityPage;

export async function getStaticProps(){
  const {events_categories} = await import('/data/data.json')
  // console.log(events_categories);
  return {
    props:{
      data: events_categories,
    },
  }
}


const EventCityPage = ({ data }) => {
    return(
        <div>
          <h1>Events Page</h1>

          <div>
            {
              data.map(ev => (
                <a href={`/events/${ev.id}`}>
                </a>
              ))
            }
          </div>
        <a href=''>
            <img/>
            <h2>Events in London</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nemo quisquam molestiae odit nam praesentium nesciunt nulla, deserunt voluptatum commodi aspernatur omnis ipsum consequuntur fugit quo numquam, assumenda quam pariatur.</p>
        </a>
        <a href=''>
          <img/>
          <h2>Events in San Francisco</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nemo quisquam molestiae odit nam praesentium nesciunt nulla, deserunt voluptatum commodi aspernatur omnis ipsum consequuntur fugit quo numquam, assumenda quam pariatur.</p>
        </a>
        <a href=''>
          <img/>
          <h2>Events in Spain</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nemo quisquam molestiae odit nam praesentium nesciunt nulla, deserunt voluptatum commodi aspernatur omnis ipsum consequuntur fugit quo numquam, assumenda quam pariatur.</p>
        </a>


        </div>
    )
}

export default EventCityPage;

export async function getStaticProps(){
  const {events_categories} = await import('/data/data.json')
  return {
    props:{
      data: events_categories,
    }
  }
}

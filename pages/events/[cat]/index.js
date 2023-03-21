
const EvntsCatPage = ({title, }) => {
  return (
    <div>
        <h2>{title}</h2>

        <a href="/event/event1">Event 1</a>
        <a href="/event/event2">Event 2</a>
        <a href="/event/event3">Event 3</a>

    </div>
  )
}

export default EvntsCatPage

export async function getStaticPath(){
  
  const { events_categories } = await import('/data/data.json')
  const allPaths = events_categories.map(ev => {
    return{
      params:{
        cat: ev.id.toString()
      }
    }
  })
  console.log(allPaths);
  return{
    paths: allPaths, 
    fallback: false,
  }
}

export async function getStaticProps(context){
  // console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import('/data/data.json')
  
  const data = allEvents.filter(ev => ev.city == id)
  console.log(data);
  
  return{props:{data}}
}
import { SingleEvents } from '@/src/components/events/SingleEvents';

const Page = ({data}) => <SingleEvents data={data} />

export default Page;

export async function getStaticPaths(){

  const data = await import('/data/data.json');
  const {allEvents} = data;

  const allPaths = allEvents.map( path => {
    return{
      params:{
        cat: path.city,
        id: path.id
      }
    }
  })

  return{
    paths: allPaths,
    fallback: false
  }

}

export async function getStaticProps(context){

  const id = context.params.id;
  const {allEvents} = await import('/data/data.json')

  const eventData = allEvents.find(ev=> (id === ev.id ))

  return{
    props:{data: eventData}
  }
}

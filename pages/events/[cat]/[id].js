
const Page = () => {
  return (
    <div>
        <h1>Our Single Event</h1>

    </div>
  )
}

export default Page;

export async function getStaticPaths(){

  const data = await import('/data/data.json');
  const allEvents = data;

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

}

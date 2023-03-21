
const indexEvent = ({title, }) => {
  return (
    <div>
        <h2>{title}</h2>

        <a href="/event/event1">Event 1</a>
        <a href="/event/event2">Event 2</a>
        <a href="/event/event3">Event 3</a>

    </div>
  )
}

export default indexEvent

export function getServerSideProps(){
  
  return{
    props:{
      title: "Hello everyone",

    }
  }

}
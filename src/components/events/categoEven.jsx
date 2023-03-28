import Image from 'next/image'
import Link from 'next/link'

export const CategoEven = ({pageName, data}) => {
  return (
    <div>
    <h1>Events in {pageName}</h1>
      <div>
        {
          data.map(ev => (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
              <Image width={300} height={300} alt={ev.title} src={ev.image}/>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          ))
        }
      </div>
  </div>
  )
}

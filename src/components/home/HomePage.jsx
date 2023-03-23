import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({data}) => {
  return (
    <div className='home_body'>
        {
          data.map((ev) => (
            <Link  
              className='card_homePage'
              key={ev.id} 
              href={`/events/${ev.id}`}
            >
              <div className='img_homePage'>
                <Image 
                  width={240} 
                  height={210} 
                  src={ev.image} 
                  alt={ev.title}
                />
              </div>
              <div className='content_homePage'>
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </Link>
          ))
        }
      </div>
  )
}

import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({data}) => {
  return (
    <main className={styles.main}>

        {
          data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image width={200} height={200} src={ev.image} alt={ev.title}/>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          ))
        }
      </main>
  )
}

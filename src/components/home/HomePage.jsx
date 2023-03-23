
export const HomePage = () => {
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

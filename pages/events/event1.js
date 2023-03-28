import Image from "next/image";
import Link from "next/link";

const AllEvntsPage = ({data}) => {
    return(
        <div className='events_page'>
            {
              data?.map(ev => (
                <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
                  <Image alt={ev.title} width={300} height={300} src={ev.image} />
                  <h2>{ev.title}</h2>
                </Link>
              ))
            }
        </div>
    )
}

export default AllEvntsPage;
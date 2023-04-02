import Image from "next/image"

export const SingleEvents = ({data}) => {
  
  const onSubmitt = () => {
    console.log('holi');
  }
  
  return (
    <div className="events_single_page">
        <Image src={ data.image} width={900} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <form onSubmit={onSubmitt} className="email_registration">
          <label> Enroll for this event!</label>
          <input  
            id="submit-id-email"
            placeholder="Please insert your email" 
            type="email" 
          />
          <button 
            type="button"
            className="submit-id"
          >
            submit
          </button>
        </form>
    </div>
  )
}

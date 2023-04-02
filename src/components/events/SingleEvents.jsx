import Image from "next/image"

export const SingleEvents = ({data}) => {
  return (
    <div>
        <Image src={ data.image} width={900} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <input type="email" />
        <button className="submit-id">submit</button>
    </div>
  )
}

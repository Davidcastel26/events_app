import Image from "next/image"
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const SingleEvents = ({data}) => {
  
  // HOOKS ----------------------
  const [message, setMessage] = useState('')
  const inputEmail = useRef()
  // console.log(inputEmail);
  const router = useRouter()
  // console.log(router);


  // HANDELERS --------------------
  const onSubmitt = async(e) => {
    
    e.preventDefault()
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailValue.match(validRegex)){
      setMessage("please introduce a correct email")
    }

    try{
      const response = await fetch('/api/emailRegistration',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ email: emailValue, eventId})
      })

      if(!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      // console.log(data)
      setMessage(data.message)
      inputEmail.current.value = '';
    }catch(e){
      console.log(e);
    }

  }
  
  return (
    <div className="events_single_page">
        <Image src={ data.image} width={900} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <form onSubmit={onSubmitt} className="email_registration">
          <label> Enroll for this event!</label>
          <input  
            ref={inputEmail}
            id="submit-id-email"
            placeholder="Please insert your email" 
            type="email" 
          />
          <button
            type="submit"
            className="submit-id"
          >
            submit
          </button>
        </form>
        <p>{message}</p>
    </div>
  )
}

import path from 'path'
import fs from 'fs'

const buildPath = () => {
    return path.join(process.cwd(), 'data', 'data.json')
} 

const extractData = (filePhath ) => {
    const jsonData = fs.readFileSync(filePhath)
    const data = JSON.parse(jsonData)
    return data
}

export default function handler (req, res){

    const {method} = req

    // acces our data 
    // extract the data (All Events)
        // all events  - loop through them and identify the eventID
        // add the email into emails registred - write on our data
        //res 404 if there are no all events
    const filePhath = buildPath();
    const {events_categories, allEvents} = extractData(filePhath)

    if(!allEvents)return res.status(404).json({
        status:404,
        message:'Events data not found'
    })

    if(method ==="POST"){
        //we add our code here
        const {email, eventId} = req.body;

        if( !email | !email.includes('@')){
            res.status(422).json({message:'invalid email address'})
        }

        const newAllEvents = allEvents.map( e => {
            if(e.id == eventId){
                if(e.emails_registered.includes(email)){
                    res.status(409).json({message: 'this email has already been enroll'})
                    return e;
                }
                return{
                    ...e,
                    emails_registered:[ ...e.emails_registered, email]
                }
            }
            return e;
        })

        fs.writeFileSync(filePhath, JSON.stringify({events_categories, allEvents: newAllEvents}))

        res
            .status(200)
            .json({message:`You has been enroll successfully with ${email} for the event id: ${eventId}`})
    }

}
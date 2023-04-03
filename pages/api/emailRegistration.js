import path from 'path'
import fs from 'fs'

const buildPath = () => {
    return path.join(process.cwd, 'data', 'data.json')
} 

const extractData = ( ) => { }

export default function handler (req, res){

    const {method} = req

    // acces our data 
    // extract the data (All Events)
        // all events  - loop through them and identify the eventID
        // add the email into emails registred - write on our data
        //res 404 if there are no all events




    if(method ==="POST"){
        //we add our code here
        const {email, eventId} = req.body;

        res
            .status(200)
            .json({message:`You has been enroll successfully with ${email} ${eventId}`})
    }

}
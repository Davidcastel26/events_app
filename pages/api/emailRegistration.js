export default function handler (req, res){

    const {method} = req
    
    if(method ==="POST"){
        //we add our code here
        const {email, body} = req.body;

        res.status(200).json({message:`You has been enroll successfully with `})
    }

}
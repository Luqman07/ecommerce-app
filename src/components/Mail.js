// import { Button } from "bootstrap";
import { Form, Button } from "react-bootstrap";

const Mail = () => {
    return ( 
        <div className="mail-update d-flex justify-content-center p-5 bg-light ">
           <div className="d-flex w-100 justify-content-center align-items-center">
                <Form.Label htmlFor="">GET THE LATEST UPDATE</Form.Label>
                <Form.Control className="w-50 mx-2" type="email" name="" id="" />
                <Button variant="dark" type="submit">SUBSCRIBE</Button>
           </div>
        </div>
     );
}
 
export default Mail;
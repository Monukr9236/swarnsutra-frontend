import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Page404(){
    return(<div>
        <h3>Page Not Found !!</h3>
        <Link to='/'><Button>Home Page</Button></Link>
    </div>)
}

export default Page404;
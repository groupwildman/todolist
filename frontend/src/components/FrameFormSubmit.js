import {Col, Button} from 'react-bootstrap'
const FrameFormSubmit = (props) => {
    return(
        <Col size="sm" className="d-flex justify-content-center">
            <Button 
                className="montserrat"
                style={{ color:"#FFFFFF", top:"21px", marginTop:"21px", letterSpacing:"0.015em", borderRadius:"50px", lineHeight:"22px", alignItems:"center", fontSize:"14.5px", fontWeight:"bold", fontStyle:"normal"}}
                type="submit">{props.button}</Button>
        </Col>
        
    );
}
export default FrameFormSubmit;
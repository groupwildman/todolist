import {Col, Form, FormControl, InputGroup} from 'react-bootstrap'
const FrameInputText = (props) => {
    return (
        <Col style={{ top:"20px", marginTop:"20px", height:"83px",position:"relative" }}>
            <Form.Group controlId={`validation${props.form}`}>
                <Form.Label className="justify-content-start montserrat" style={{marginLeft:"20px", top:"0", fontWeight: "normal", fontSize:"16px",lineHeight:"24px"}}>{props.name}</Form.Label>
                <InputGroup style={{width:"100%", background: "#FFFFFF", border: "1px ", boxSizing: "border-box", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderTopLeftRadius: "1.75rem",borderTopRightRadius: "1.75rem",borderBottomLeftRadius: "1.75rem"}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id={props.form} className="align-self-center bg-white border-0 material-icons" style={{top:"39px", fontSize:"36px",fontStyle:"normal",lineHeight:"36px",color:"#a0a0a0",borderTopLeftRadius: "1.75rem",borderBottomLeftRadius: "1.75rem"}}>{props.icon}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="montserrat"
                        placeholder={props.name}
                        aria-label={props.name}
                        aria-describedby={props.form} 
                        type={props.type ? props.type : "text"}
                        onChange={props.onChange}
                        style={{fontWeight: "normal", fontSize:"13.8px",lineHeight:"24px",border: "none", borderTopRightRadius: "1.75rem"}}
                        required/>
                    <Form.Control.Feedback type="invalid" className="text-right align-self-center" style={{fontFamily:"Material Icons", fontSize:"1.2rem",width:"8%"}}>error</Form.Control.Feedback>
                </InputGroup>
                
            </Form.Group>
            
        </Col>
    );
}

export default FrameInputText;
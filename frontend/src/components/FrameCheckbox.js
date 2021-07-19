import {Col, FormGroup, Form, InputGroup} from 'react-bootstrap'

const FrameCheckbox = (props) => {
    return (
    <Col size="sm" style={{top:"32px"}}>
        <FormGroup >
            <InputGroup style={{width:"100%"}}>
                <div key={props.form} className="mb-3">
                    <Form.Check 
                        className="montserrat align-self-center col-form-label form-control border-0"
                        style={{fontWeight: "normal", fontSize:"13.8px",lineHeight:"24px"}}
                        type='checkbox'
                        id={props.id}
                        label={props.value}
                        required/>
                </div>
            </InputGroup>
        </FormGroup>
        
    </Col>
    );
}
export default FrameCheckbox;
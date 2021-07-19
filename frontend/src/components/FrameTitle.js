import {Col} from 'react-bootstrap'
const FrameTitle = (props) => {
    return (
        <Col size="sm" style={{ marginTop:"26px"}}>
            <div className="text-center montserrat" style={{fontWeight: "normal", fontSize:"26px",lineHeight:"44px"}}>{props.title}</div>
        </Col>
    );
}
export default FrameTitle;
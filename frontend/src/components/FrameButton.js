const FrameButton = (props) => {
    return(
        <div className="col-sm d-flex justify-content-center" style={{position:"relative", width:"100%"}}>
            <div className="d-flex justify-content-center align-items-center btn" style={{background:"#18A0FB", top:"21px", marginTop:"41px", borderRadius:"50px", display:"inline-block", width:"217px", height:"51px"}}>
                <span style={{ color:"#FFFFFF", letterSpacing:"-0.015em", lineHeight:"22px", alignItems:"center", fontSize:"18px", fontWeight:"bold", fontStyle:"normal", fontFamily:"Montserrat"}}>{props.button} </span>
            </div>
        </div>
    );
}
export default FrameButton;
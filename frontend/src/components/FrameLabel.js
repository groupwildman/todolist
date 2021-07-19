
const FrameLabel = (props) => {
    return (
        <div className={props.class} style={{top:"20px", marginTop:props.marginTop ? props.marginTop : "5dp", position:"relative"}}>
            <span className={props.fontFamily ? props.fontFamily : "montserrat"} style={{display:"inline-block" , fontStyle:"normal", fontWeight:props.fontWeight ? props.fontWeight : "normal", fontSize: props.fontSize ? props.fontSize : "15px", lineHeight:"24px", color:"#000000"}}> {props.label} </span>
        </div>
    );
}
export default FrameLabel;
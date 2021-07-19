const FrameLabelLink = (props) => {
    return (
        <div className={props.class} style={{top:"20px", marginTop:props.marginTop, position:"relative"}}>
            <a href={props.url} ><span style={{display:"inline-block", fontFamily:props.fontFamily, fontStyle:"normal", fontWeight:props.fontWeight, fontSize:props.fontSize, lineHeight:"24px", color:"#000000"}}> {props.label} </span></a>
        </div>
    );
}
export default FrameLabelLink;
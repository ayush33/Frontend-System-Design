import React from "react";
import { CiWarning } from "react-icons/ci";
import { MdError } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const iconStyle={
    padding:"5px"
}
const icon = {
    success : <MdOutlineDone style={iconStyle}/>,
    warning : <CiWarning style={iconStyle}/>,
    error : <MdError style={iconStyle}/>,
}
export default function Notification(notification){
   
    const {type, meesage} = notification
    return(
        <div className= {`toaster ${type}`} >
            {icon["success"]}
            {meesage}
            {<RxCross2 style={iconStyle}/>}
        </div>
    )
}


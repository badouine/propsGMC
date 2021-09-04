import React from "react";

const ProfileChild = props => {

    return (
        <div>
            {props.handleName(props.fullname)}
            <img src={props.image} alt=""/>
            <h2>{props.fullname}</h2>
            <h4>{props.bio}</h4>
            <em>{props.profession}</em>
        </div>
    )
}

ProfileChild.defaultProps = {
    fullname: "Alioune Sahaba Yonen"
}

export default ProfileChild;
import React from "react";
import PropTypes from 'prop-types';


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

ProfileChild.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
    image: PropTypes.oneOf(['image'])
}

export default ProfileChild;
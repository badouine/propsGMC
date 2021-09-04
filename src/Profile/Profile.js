import React from "react";
import ProfileChild from './ProfileChild';
import photo from "./profile.png";

const Profile = () => {
const handleName = fullname => {
    alert(`Hi, I am  ${fullname}`)
}
const styleObject = {
    color: 'blue', textAlign: 'center'
}

    return(
        <div style={styleObject}>
            <ProfileChild 
                image=  {photo}
                fullname = 'Alioune Badara Nzale'
                bio = 'enhanced technologie'
                profession = 'Student at GoMyCode'
                handleName = {handleName}
            />
        </div>
    )
}

export default Profile;
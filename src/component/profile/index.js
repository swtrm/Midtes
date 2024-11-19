import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Profile= () =>{
  const [profile, setProfile] = useState({});
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    // setLoading(true);
    const profileRef = ref(db, "profile");
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
      // setLoading(false);
    });
  }, []);
    return(
      <Fade>
        <div className="profile-img-wrapper">
        <img src={`data:image/jpg;base64, ${profile.img}`} alt="profile" />
          <h1 className="profile-name">{profile.name}</h1>
          <div className="text-center">
          <span className="badge badge-white badge-pill profile-designation">{profile.Status}</span>
          </div>
      </div>
    </Fade>
    );
};
export default Profile;
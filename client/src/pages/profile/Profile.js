import "./Profile.scss";
import Card from "../../components/card/Card";
import profimg from "../../assets/avatarr.png";
import {useState} from "react"


const initialState = {
    name:"jerry",
    email:"ojoj665@gmail.com",
    phone:"",
    bio:"",
    photo:"",
    role:"",
    isverified:"false",
}
const Profile = () => {
    const [profile, setProfile] = useState(initialState)
    const handleImageChange =()=>{

    }
    const handleInputChange =()=>{

    }
  return (
    <>
      <section className="container">
        <h2>Profile</h2>
        <div className="--flex-start profile">
          <Card cardClass={"card"}>
            <>
              <div className="profile-photo">
                <div>
                  <img src={profimg} alt="profile pic" />
                  <h3>Role:Subscriber</h3>
                </div>
              </div>
              <form>
                <p>
                  <label>Change Photo:</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleImageChange}
                  />
                </p>
                <p>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </p>
                <p>
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Bio:</label>
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    cols="30"
                    rows="10"
                  ></textarea>
                </p>
                <button className="--btn --btn-primary --btn-block">Update Profile</button>
              </form>
            </>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Profile;

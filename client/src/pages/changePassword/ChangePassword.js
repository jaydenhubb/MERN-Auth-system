import "./ChangePassword.scss"

import Card from "../../components/card/Card";
import profimg from "../../assets/avatarr.png";
import { useState } from "react";
import PageMenu from "../../components/pageMenu/PageMenu";
import PasswodInput from "../../components/passwordInput/PasswodInput";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
  
};
const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);

  const {oldPassword, password, password2} = formData
  
  const handleInputChange = () => {};
  return (
    <>
      <section className="container">
        <PageMenu />
        <h2 className="--flex-center">Change Password</h2>
        <div className="--flex-center change-password">
          <Card cardClass={"card"}>
            <>
              <form>
                <p>
                  <label>Current Password</label>
                  <PasswodInput
                    placeholder="Current Password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>New Password:</label>
                  <PasswodInput
                    placeholder="Password"
                    name="password2"
                    value={password}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Confirm New Password:</label>
                  <PasswodInput
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                  />
                </p>

                <button className="--btn --btn-danger --btn-block">
                  Change Password
                </button>
              </form>
            </>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;

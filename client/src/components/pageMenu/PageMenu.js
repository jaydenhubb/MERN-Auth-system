import {NavLink} from 'react-router-dom'

const PageMenu = () => {
  return (
    <div>
      <nav className='--btn-google --p --mb --mt'>
        <ul className="home-links">
          
          <li>
            <NavLink to="/profile" className="">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/Change-password" className="">
              Change Password
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="">
              Users
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default PageMenu

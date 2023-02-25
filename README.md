# MERN-Auth-System
This is a simple authentication application. Visitors can view the home page but must have an account in order to access profile page. Upon creating an account, new users receive a verification mail to verify their account and also are automatically assigned a `subscriber` role which do not have access to certain features of the application. Authenticated users can upload a profile picture, and update various fields in their profile page. All authenticated users can change their passwords and they recieve an email notification upon effecting such change. Authenticated users can reset password.  Only Users with `admin` roles are authorised to access the users page which displays the list of all the users and their respective roles. Only users with `admin` role can modify the roles of other users as well. Any user whose role is modified receives and email notification of the change. Visitors can login using google authentication. 

# Technologies Used 
* Reactjs
* Expressjs
* Mongodb
* Nodejs

# Setup
1. Clone the repository to your local machine using the command `git clone https://github.com/jaydenhubb/MERN-Auth-system.git`
2. Install dependencies by running `npm install` in both the server directory and the client directory.
3. Create a `.env` file each in the server and client directory for environment variables required by the app.
4. Start the server by running `npm start` in the server directory. It will run on the port specified in your `.env` file.
5. Start the client by running `npm start` in the client directory. It will run in the default `-port 3000` unless otherwise stated.
6. Open http://localhost:3000 in your web browser to view the app.

# Usage
The app is basically easy to navigate once it is running on your local machine. The user interface is easy to navigate.

# Live app
[MERN-Auth](https://jay-authent.vercel.app/)

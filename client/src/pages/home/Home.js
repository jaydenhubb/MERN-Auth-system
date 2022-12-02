import "./Home.scss"

import loginImg from "../../assets/login.svg"


const Home = () => {
  return (
    <div>
   
      <section className="container hero">
        <div className="hero-text">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus id optio, dignissimos reiciendis eum! </p>
          <div className="hero-button --flex-start">
            <button className="--btn --btn-danger">Register</button>
            <button className="--btn --btn-primary">Login</button>
          </div>
        </div>
        <div className="hero-image">
            <img src={loginImg} alt="auth" />
        </div>
      </section>
 
    </div>
  );
}

export default Home

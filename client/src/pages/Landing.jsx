import React from "react";
import Wrapper from "../wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            impedit pariatur! Explicabo veritatis adipisci assumenda, corrupti
            quam commodi, sequi fuga atque et, laborum odit? Odio, aut ipsam!
            Nam culpa iusto tempora voluptatem deleniti velit molestias dicta.
            Odit aspernatur non quos iste officia cupiditate vitae autem
            accusantium. Ratione, labore ex aperiam nostrum ut optio quis
            impedit et adipisci sit repudiandae consequuntur fuga, blanditiis
            quaerat eaque inventore distinctio facilis! Nemo similique atque,
            magni quis nihil tempora doloremque cumque eligendi quibusdam fugit
            aliquam commodi maxime cum voluptatibus quae pariatur, veniam nulla
            laudantium, hic corrupti! Velit ipsam alias pariatur labore voluptas
            tenetur!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

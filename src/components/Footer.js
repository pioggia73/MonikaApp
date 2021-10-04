import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { socialLinks } from "../utils/constants";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <FooterContainer>
      <section className="section-center">
        <article className="container">
          <div className="footer-info">
            <div className="footer-logo">
              <img src={logo} alt="company-logo" />
              <p>
                Copyright © {date} by Monika Wasilewska. All rights reserved.{" "}
              </p>
            </div>
            <div className="footer-icons">
              {socialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a className="icon" href={link.url}>
                      {link.icon}
                    </a>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="footer-address">
            <h3>Contact me</h3>
            <p>Monika Wasilewska, Warszaw, POLAND</p>
            <a href="mailto:webdevelopermonika@gmail.com" class="footer-link">
              webdevelopermonika@gmail.com
            </a>
          </div>
        </article>
      </section>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border-top: 2px solid #eee;
  .container {
    padding: 7vh 3vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10vw;
    color: #767676;
  }

  .footer-logo {
    display: flex;
    gap: 4rem;
    align-items: center;

    img {
      width: 6rem;
      filter: brightness(1);
    }

    p {
      font-size: 1.3rem;
      line-height: 1.8;
    }
  }

  .footer-icons {
    display: flex;
    gap: 4rem;
    list-style: none;
    justify-content: center;

    li {
      margin-top: 2rem;
    }

    a {
      color: inherit;
      display: block;
      font-size: 2rem;
    }
  }

  .footer-address {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
    a {
      font-size: 1.2rem;
      color: inherit;
    }
  }
`;

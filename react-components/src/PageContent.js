import React, { useState } from "react";
import Column from "./component/Column";
import Main from "./component/Main";
import CardsItem from "./component/CardsItem";
import Organisations from "./component/Organisations";
import ProfileInfo from "./component/ProfileInfo";
import Newscard from "./component/Newscard";
import { CryptoLogIn } from "./component/Auth";
import { EmailLogIn } from "./component/Auth";
import SignUp, { SignIn } from "./component/Signup";
import Button from "./component/Button";
import "./style.css";

const pageContent = {
  about: (
    <>
      <Column
        content={
          <Main
            title="ABOUT US"
            content="Established since 2021, we have hosted forest carbon token and governance token sales for thousands of organisations. The aim of Tree organisation is to provide a platform for everyday consumers to help in reducing carbon waste as well."
            theimage="images/forestThree.jpg"
          ></Main>
        }
      ></Column>
    </>
  ),

  home: (
    <>
      <Column
        content={
          <span className="home-wrapper">
            <section className="home-container">
              <div className="home-contents">
                <h1 className="home-title">TREE</h1>
                <p className="home-desc">
                  A platform created to reduce carbon emission via decentralized
                  autonomous forest preservation. Buy your token today and help
                  save the Earth!
                </p>
                <ul className="newscard-container">
                  <Newscard
                    event="DeepOwl Woods tokens now available!"
                    duration="24th April 2022-31st May 2022"
                    className="newscard-items"
                  ></Newscard>
                  <Newscard
                    event="Governance voting starting soon!"
                    duration="26th April 2022-28th April 2022"
                    className="newscard-items"
                  ></Newscard>
                </ul>
                <div className="test-buttons"></div>
              </div>
            </section>
          </span>
        }
      />
    </>
  ),

  governance: (
    <>
      <Column
        content={
          <Main
            title="GOVERNANCE"
            content="The Tree protocol is public owned and supervised by Tree governance token holders regularly"
            theimage="images/forestOne.jpg"
          />
        }
      />
      <Column
        content={
          <ul className="cards__items">
            <CardsItem
              src="images/governanceforum.png"
              text="Governance forum"
              statement="A forum for governance related discussion. Share proposals, provide feedback, and shape the future of the protocol with the Tree community."
              className="my-card"
            ></CardsItem>
            <Button text="Mint Token"></Button>
            <CardsItem
              src="images/voting.avif"
              text="Governance portal"
              statement="The official governance voting portal. Review live government porposals and cast your vote on-chain."
            ></CardsItem>
          </ul>
        }
      />
    </>
  ),

  transaction: (
    <section>
      <Column
        content={
          <Main
            title="TRANSACTION"
            content="Worried about the environment but do not know how to contribute as an indivual? Buy a token today and you can also become a hero to save Nature!"
            theimage="images/forestThree.jpg"
          ></Main>
        }
      />
      <Column
        content={
          <div>
            <p class="transaction-statement">
              Check out these cool forest tokens!
            </p>
            <Organisations></Organisations>
          </div>
        }
      />
    </section>
  ),
};

export default pageContent;

import React, { useState } from "react";
import StakeView from "./StakeView";
import UnstakeView from "./UnstakeView";
import ClaimRewardsView from "./ClaimRewardsView";
import "./Dashboard.css"; 
import zk from "../../Assets/logo_menu.png"
import zk2 from "../../Assets/logo_main.png"
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("stake");

  const renderView = () => {
    switch (currentView) {
      case "stake":
        return <StakeView />;
      case "unstake":
        return <UnstakeView />;
      case "claim":
        return <ClaimRewardsView />;
      default:
        return <StakeView />;
    }
  };

  return (

    <div>

{/* navbar making */}
<div className="navbar">
  <div className="left-section">
  <img src= {zk} className="zkFiOne" alt="..." />
    <button className="nav-button">Cummunity</button>
    <button className="nav-button">About Us</button>
    <button className="nav-button">Contact</button>
  </div>
  
  <div className="right-section">
    <button className=" right-button"><ConnectButton/></button>
  </div>
</div>


  {/* navbar making */}



<div className="header">
        <div className="zkHeading">
          <p className="aligned-text">Total <br/>Staked:</p>
          <img src= {zk2} className="zkFi11" alt="..." />
          <p className="balance-value">0.00</p>
        </div>
        <div className="zkHeading">
          <p>Your<br/> Stake:</p>
          <img src= {zk2} className="zkFi11" alt="..." />
          <p className="balance-value">0.00</p>
        </div>
        <div className="zkHeading">
          <p>Rewards<br/> Earned:</p>
          <img src= {zk2} className="zkFi11" alt="..." />
          <p className="balance-value">0.00</p>
        </div>
        <div className="zkHeading">
          <p>APR<br/>Value:</p>
          <img src= {zk2} className="zkFi11" alt="..." />
          <p className="balance-value">0%</p>
        </div>
      </div>
      

    <div className="staking-page">


      <div className="tab-buttons">
        <button
          className={currentView === "stake" ? "active" : ""}
          onClick={() => setCurrentView("stake")}
        >
          Stake
        </button>
        <button
          className={currentView === "unstake" ? "active" : ""}
          onClick={() => setCurrentView("unstake")}
        >
          Unstake
        </button>
        <button
          className={currentView === "claim" ? "active" : ""}
          onClick={() => setCurrentView("claim")}
        >
          Claim Rewards
        </button>
      </div>

      <div className="view-container">{renderView()}</div>
    </div>

    {/* **********************footer******************8 */}
<footer className="footer">
  <div className="footer-content">
    <p>© Zk Finance Foundation. All rights reserved.</p>
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <span>|</span>
      <a href="#">Terms &amp; Conditions</a>
    </div>
  </div>
</footer>




{/* *****************************Footer*************** */}

    </div>
  );
};

export default Dashboard;

import React from "react";
import zk from "../../Assets/logo_main.png"
import "./ClaimRewardsView.css";
const ClaimRewardsView = () => {
  return (
    <div className="Claimstake-container">
    
    <div className="Claimwallet-section">
        <span>Rewards Earned:</span>
        <div className="Claimwallet-balance">
          <img src= {zk} className="zkFi2" alt="..." />
          <span className="Claimbalance-value">0.00</span>
        </div>
      </div>
      <button className="ClaimUnstake-button" disabled>
          CLAIM
        </button>
  </div>
  
  );
}

export default ClaimRewardsView;

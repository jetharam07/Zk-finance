import React from "react";
import "./StakeView.css";
import zk from "../../Assets/logo_main.png"

const StakeView = () => {
  return (
    <div className="stake-container">
{/* stake first header */}
<div className="headerOne"> 
  <div className="stake-header">
        <div className="stake-title">
<img src= {zk} className="zkFi" alt="..." />
          <span className="stake-name">ZK </span>
          <span className="stake-tag">ZK</span>
        </div>
      </div>
  <div className="rightOne">
    <span>View Delegations</span>
  </div>
</div>
      {/* stake first header */}

      <div className="unstaking-period">
        <span>Unstaking period:</span>
        <span className="period-value">7 days</span>
      </div>

      <div className="wallet-section">
        <span>Wallet Balance:</span>
        <div className="wallet-balance">

          <img src= {zk} className="zkFi2" alt="..." />
          <span className="balance-value">0.00</span>
        </div>
      </div>

      <div className="input-section">
        <div className="input-wrapper">
          <img src= {zk} className="zkFi3" alt="..." />
          <input
            type="number"
            placeholder="0.000"
            className="stake-input"
          />
          <button className="max-button">MAX</button>
        </div>
        <button className="stake-button" disabled>
          STAKE
        </button>
      </div>
    </div>
  );
};

export default StakeView;
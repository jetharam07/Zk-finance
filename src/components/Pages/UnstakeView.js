import React from "react";
import "./UnstakeView.css";
import zk from "../../Assets/logo_main.png"

const UnstakeView = () => {
  return (
    <div className="Unstack-container">

    {/* header, logo  */}
      
<div className="headerTwo"> 
  <div className="Unstake-header">
        <div className="Unstake-title">
<img src= {zk} className="zkFi" alt="..." />
          <span className="Unstake-name">ZK </span>
          <span className="Unstake-tag">ZK</span>
        </div>
      </div>
  <div className="UnstakeRight">
    <span>View Delegations</span>
  </div>
  </div>
      {/* ********* */}

      {/*  unstaking balance header */}
      <div className="header2"> 
  <div className="leftHea">
    <span>Unstaking Balance:</span>
    <sapn>0.00</sapn>
  </div>
  <div className="rightHea">
    <button>VIEW RECEIPTS </button>
  </div>
</div>

      {/* ************** */}


      <div className="Ununstaking-period">
        <span>Waiting period:</span>
        <span className="Unperiod-value">~7 days</span>
      </div>

      <div className="Unwallet-section">
        <div className="Unwallet-balance">
        <span>Wallet Balance:</span>
        <img src= {zk} className="UnzkFi2" alt="..." />
          <span className="Unbalance-value">0.00</span>
          </div>
        <div className="Unwallet-balance">
        <span>Your stake:</span>
          <img src= {zk} className="UnzkFi2" alt="..." />
          <span className="Unbalance-value">0.00</span>
        </div>
      </div>

      <div className="Uninput-section">
        <div className="Uninput-wrapper">
          <img src= {zk} className="UnzkFi3" alt="..." />
          <input
            type="number"
            placeholder="0.000"
            className="stake-input"
          />
          <button className="Unmax-button">MAX</button>
        </div>
        <button className="Unstake-button" disabled>
          UNSTAKE
        </button>
      </div>
    </div>
  );
};

export default UnstakeView;
import React from "react";

class BottomComponent extends React.Component {
  render() {
    return (
      <div
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <div className="container">
          
            <p className="widget-content" lp-node="p" style={{fontSize:18}}>
              Copyright © 2019 Group 13
            </p>
          
        </div>
        <div className="ladi-widget-overlay" />
      </div>
    );
  }
}

export default BottomComponent;

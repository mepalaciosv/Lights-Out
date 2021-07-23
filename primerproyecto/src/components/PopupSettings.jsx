import React from 'react'

const PopupSettings = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}> </span>
          {props.content}
        </div>
      </div>
    );
  };

export default PopupSettings;

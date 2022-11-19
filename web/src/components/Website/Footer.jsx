import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <div className="bg-dark footer">
        <p className="text-white text-center h-25">
          BookCheck.com@{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;

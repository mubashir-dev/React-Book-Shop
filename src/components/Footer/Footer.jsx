import React from "react";

function FooterComponent() {
  return (
    <div className="bg-dark footer">
      <p className="text-white text-center h-25">
        BookCheck.com@{new Date().getFullYear()}
      </p>
    </div>
  );
}

export default FooterComponent;

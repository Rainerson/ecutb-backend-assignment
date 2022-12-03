import React from "react";

interface AlertType {
  alertType: string;
  title: string;
}

const Alert: React.FC<AlertType> = ({ alertType = 'success', title}) => {
  return (
    <div className={`alert alert-${alertType}text-center mb-5`} role="alert">
      <h3>{title}</h3>
    </div>
  );
};

export default Alert;

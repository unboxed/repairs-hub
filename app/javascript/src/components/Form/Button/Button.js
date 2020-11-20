import React from 'react'

const Button = ({ onClick, label, type, ...otherProps }) => (
  <div className="govuk-form-group">
    <button
      className="govuk-button focus-colour"
      data-module="govuk-button"
      onClick={onClick}
      type={type}
      {...otherProps}
    >
      {label}
    </button>
  </div>
);

export default Button

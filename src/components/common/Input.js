import React from "react";
import classnames from "classnames";

const Input = ({ type, placeholder, name, value, onChange, info, error }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <small className="form-text text-muted">{info}</small>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;

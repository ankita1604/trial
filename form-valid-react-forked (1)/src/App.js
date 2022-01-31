import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import FormValidator from "./FormValidator";
class App extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "first_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter First Name." //middle name last name
      },
      {
        field: "last_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter last Name." //middle name last name
      },
      {
        field: "age",
        method: "isEmpty",
        validWhen: false,
        message: "You must be 18 and above to proceed."
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your email address."
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Enter valid email address."
      },
      {
        field: "phone",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a phone number."
      },
      {
        field: "phone",
        method: "matches",
        args: [/^\(?[7-9]\)?\d\d\d\d\d\d\d\d\d\d$/],
        validWhen: true,
        message: "Enter valid phone number."
      },
      {
        field: "pincode",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a valid pincode."
      },
      {
        field: "city_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter city Name." //middle name last name
      },
      {
        field: "state_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter state Name." //middle name last name
      }
    ]);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      pincode: "",
      city_name: "",
      state_name: "",
      validation: this.validator.valid()
    };
    this.submitted = false;
  }
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormReset = () => {
    this.setState(() => this.initialState);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
  };
  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="container" class="box">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className="registrationForm">
              <h3>Registration form validation react js</h3>
              <div className={validation.first_name.isInvalid && "has-error"}>
                <label htmlFor="first_name">First Name</label>
                <input
                  maxLength={20}
                  type="string"
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.first_name.message}
                </span>{" "}
              </div>
              <div className={validation.last_name.isInvalid && "has-error"}>
                <label htmlFor="last_name">Last Name</label>
                <input
                  maxLength={20}
                  type="string"
                  className="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.last_name.message}
                </span>{" "}
              </div>
              <div className={validation.age.isInvalid && "has-error"}>
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  placeholder="Age"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.age.message}</span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.email.message}</span>{" "}
              </div>
              <div className={validation.phone.isInvalid && "has-error"}>
                <label htmlFor="phone">Phone(enter only 10 digit number)</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.phone.message}</span>{" "}
              </div>
              <div onChange={this.onChangeValue}>
                <label htmlFor="last_name">Gender </label>
                <br />
                <input type="radio" value="Male" name="gender" /> Male {"  "}
                <input type="radio" value="Female" name="gender" /> Female{" "}
                {"  "}
                <input type="radio" value="Other" name="gender" /> Other
              </div>
              <div className={validation.pincode.isInvalid && "has-error"}>
                <label htmlFor="pincode">Pincode</label>
                <input
                  maxLength={6}
                  type="text"
                  className="form-control"
                  name="pincode"
                  placeholder="Pincode"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.pincode.message}</span>{" "}
              </div>
              <div className={validation.city_name.isInvalid && "has-error"}>
                <label htmlFor="cityt_name">City</label>
                <input
                  maxLength={20}
                  type="string"
                  className="form-control"
                  name="city_name"
                  placeholder="City"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.city_name.message}
                </span>{" "}
              </div>
              <div className={validation.state_name.isInvalid && "has-error"}>
                <label htmlFor="state_name">State</label>
                <input
                  maxLength={20}
                  type="string"
                  className="form-control"
                  name="state_name"
                  placeholder="State"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.state_name.message}
                </span>{" "}
              </div>
              <div>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                  {" "}
                  I agree to <b>terms and conditions</b>
                </label>
              </div>
              <br />
              <button
                onClick={this.handleFormSubmit}
                className="btn btn-primary"
              >
                Submit{"  "}{" "}
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={this.handleFormReset}
                className="btn btn-primary"
              >
                {"  "}
                Reset{"   "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

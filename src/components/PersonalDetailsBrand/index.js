import React from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

import Style from "./PersonalDetailsBrand.module.scss";
function PersonalDetailsBrand() {
  return (
    <div className={Style.personal_details_wrapper}>
      <div className={Style.personal_details_content_wrapper}>
        <div>
          <h2>
            Digital <br /> Sourcing <br /> Ecosystem
          </h2>
          <p>
            For Brands to find<strong> Manufactures and Suppliers</strong>
          </p>
        </div>
      </div>
      <div className={Style.tell_us_about_wrapper}>
        <h1>Please tell us about yourself</h1>
        <Form className="personal_details_form">
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value="Alice"
              isValid
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value="Parker"
              isValid
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="basic-url">Phone number</Form.Label>
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Phone number"
                value="7649347635"
                isValid
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select..</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="basic-url">E-mail</Form.Label>
            <InputGroup>
              <FormControl
                placeholder="Email"
                value="Alice_p@superuser.com"
                value="Alice_p@superuser.com"
              />
              <Button>Send OTP</Button>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value="367-736"
              isValid
            />
            <Form.Text>*Enter the OTP received on your E-mail</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <FormControl placeholder="********" value="********" isValid />
            <Form.Text>
              *Password should be at least 8 characters long, must contains one
              uppercase, one lower case and one special character.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value="123$%Alice"
              isValid
            />
          </Form.Group>

          <div className={Style.agree_terms}>
            <Form.Group>
              <input type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1">
                <span className={Style.check}></span>
                <div>Yes, I want to receive E-mails</div>
              </label>
            </Form.Group>
            <Form.Group>
              <input type="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2">
                <span className={Style.check}></span>
                <div>
                  <p>
                    I consent to the Use of personal data for direct marketing
                    as described in the Privacy Policy.<br></br> By clicking
                    “Sign up” below:
                  </p>
                  <p>
                    I agree to the Terms of Use and Privacy Policy for myself
                    and/or on behalf of the business that I represent. I declare
                    to the best of my knowledge that I am not, and the business
                    and its affiliates that I represent are not, Sanctioned
                    Persons or located in Sanctioned Territories.
                  </p>
                </div>
              </label>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="app-c-signUpButton"
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PersonalDetailsBrand;

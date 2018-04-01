// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";

import "./styles.css";

const logo = require('../../assets/logo.svg');

export default class Header extends Component {
  render() {
    const { history, companyName, logout } = this.props;

    return (
      <div className="header">
        <div className="header__inner">
          <div className="header__logo">
            <Link className="header__name" to="/">
              {logo ? <img height="70px" src={logo} alt="logo" /> : companyName}
            </Link>
          </div>
          <div className="login">
            <Link className="header__login" to="/login">
              {i18next.t('popular.login')}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

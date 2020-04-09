/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-08-24 01:17:09
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-09 09:02:51
 */

import React from 'react';
import './css/Navigation.css';
import PropTypes from 'prop-types';
import { useScrollTop, useScrollToRef } from '../_shared/hooks';
import { refs } from '../Root/routes';
import { images } from '../_shared/assets';

const Navigation = (props) => {
  const distance = useScrollTop();
  const altClass = distance && distance > 15 ? '--alt' : '';
  const { filterBarActive } = props;

  const [onClick] = useScrollToRef();

  function renderNavigationItems() {
    return refs.map((route, index) => (
      <li className="navigation__item" key={index}>
        <div
          className={`navigation__link${altClass}`}
          onClick={() => onClick(props[route.ref])}
        >
          <span className="nav">{route.routeName}</span>
        </div>
      </li>
    ));
  }
  return (
    <div className={`navigation${altClass}`}>
      {filterBarActive ? <div className="navigation__overlay" /> : null}
      <div className="row navigation__row">
        <div className="col-1-of-2 menu-toggle">
          <span className="navigation__user">
            <img className="navigation__logo" src={images.logo} alt="" />
          </span>
        </div>

        <div className="col-1-of-2 navigation__list-container">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label
            id="navi-label"
            htmlFor="navi-toggle"
            className="navigation__button-container"
          >
            <span className="navigation__button">&nbsp;</span>
          </label>

          <ul className="navigation__list">{renderNavigationItems()}</ul>
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  filterBarActive: PropTypes.bool,
};

Navigation.defaultProps = {
  filterBarActive: false,
};

export default Navigation;

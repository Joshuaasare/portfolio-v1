/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-08-23 01:18:18
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-06 20:25:23
 */
import React from 'react';
// import PropTypes from 'prop-types'
import './css/Footer.css';

import { Icon, Ikon } from '../_shared/components';

const Footer = (props) => {
  const {} = props;

  return (
    <div className="footer">
      <div className="row">
        <div className="footer__header">
          Get in touch
          <span role="img" aria-label="sheep" className="">
            😀
          </span>
        </div>
      </div>
      <div className="row">
        <div className="footer__media">
          <div className="footer__media-item">
            <Ikon name="gmail" className="footer__media-icon" color="#D44638" />
          </div>

          <div className="footer__media-item">
            <Ikon
              name="dribbble"
              className="footer__media-icon"
              color="#ea4c89"
            />
          </div>

          <div className="footer__media-item">
            <Ikon name="github" className="footer__media-icon" color="#fff" />
          </div>

          <div className="footer__media-item">
            <Ikon
              name="linkedin"
              className="footer__media-icon"
              color="#0e76a8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

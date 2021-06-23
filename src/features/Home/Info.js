/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-08-20 14:45:01
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-08 21:17:24
 */
import React from 'react';
import './css/Info.css';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import { animations, files } from '../_shared/assets';

const Info = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animations.dev,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="info">
      <div className="row info-row">
        <div className="col-1-of-2 info-col">
          <div className="info__text">
            <div className="info__text-container">
              <div className="info__text-container--main">
                <span>
                  {`Hi I'm Josh, and I do that `}
                  <span role="img" aria-label="sheep" className="info__emoji">
                    👉
                  </span>
                </span>
              </div>
              <div className="info__text-container--sub">
                <span>
                  I'm Joshua Asare, a full Stack developer based in Accra,
                  Ghana. Discover my background, projects and ways to contact
                  me!
                </span>
              </div>
            </div>

            <div className="info__button-container">
              <a href={files.resume} download className="resume-button">
                Download resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-1-of-2 info-image">
          <div className="info__image-container">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  qualityRef: state.refs.qualityRef,
});
export default connect(mapStateToProps, {})(Info);

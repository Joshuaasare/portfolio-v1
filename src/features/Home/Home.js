/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-08-20 05:55:03
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-09 08:57:30
 */
import React, { useRef } from 'react';
import './css/Home.css';
import { connect } from 'react-redux';
import { CircularButton } from '../_shared/components';
import { useScrollToTop, useScrollToRef } from '../_shared/hooks';
import { setRef } from '../_shared/actions/ref_action';
import { Info, Work, Footer, Navigation, About, Projects } from '.';

const Home = (props) => {
  const sectionQualityRef = useRef(null);
  const sectionAboutRef = useRef(null);
  const sectionInfoRef = useRef(null);
  const sectionProjectsRef = useRef(null);
  const sectionWorkRef = useRef(null);

  useScrollToTop();
  const [onClick] = useScrollToRef();

  setRef({ refName: 'qualityRef', refValue: sectionQualityRef });

  return (
    <div id="home">
      <section className="section-navigation">
        <Navigation
          infoRef={sectionInfoRef}
          workRef={sectionWorkRef}
          projectsRef={sectionProjectsRef}
          aboutRef={sectionAboutRef}
        />
      </section>
      <section className="section-info" ref={sectionInfoRef}>
        <Info />
        <div className="info__circular-button-container">
          <CircularButton
            size={5}
            iconName="chevron-down"
            iconType="down"
            onClick={() => onClick(sectionAboutRef)}
          />
        </div>
      </section>

      <section className="section-about" ref={sectionAboutRef}>
        <About />
      </section>

      <section className="section-project" ref={sectionProjectsRef}>
        <Projects />
      </section>

      <section className="section-work" ref={sectionWorkRef}>
        <Work />
      </section>

      <section className="section-footer">
        <Footer />
      </section>
    </div>
  );
};

export default connect(null, { setRef })(Home);

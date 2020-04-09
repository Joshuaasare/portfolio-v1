/*
 * @Author: Joshua Asare
 * @Date: 2020-04-06 07:43:24
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-04-08 10:14:51
 */
import React from 'react';
import './css/About.css';
import Lottie from 'react-lottie';
import { Ikon } from '../_shared/components';
import { skills } from '../_shared/constants';
import { animations } from '../_shared/assets';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animations.program,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const About = (props) => (
  <div className="about">
    <div className="row">
      <div className="col-1-of-2">
        <div className="about__title">
          <span className="name"> About Me</span>
          <span className="line" />
        </div>

        <div className="about__info">
          <span className="para">
            I'm a software engineer who loves working on challenging problems,
            cracking them into simpler solutions. I build scalable backend and
            frontend applications, using state of the art technologies with
            security in mind.
          </span>

          <span className="para">
            I graduated from Kwame Nkrumah University of Science and Technology
            with a bachelor's in Computer Engineering, and for the past 3+
            years, I've been among several teams engineering the next big stuff.
          </span>

          <span className="para">
            A glimpse of some of the things i'm experienced with
          </span>

          <div className="about__skills">
            <div className="row">
              {skills.map((skill) => (
                <div className="col-1-of-2">
                  <div className="about__skill">
                    <Ikon
                      name="play"
                      color="#f4a01d"
                      size={1.5}
                      className="about__skill-icon"
                    />
                    <span>{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-1-of-2">
        <div className="about__image-container">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  </div>
);

export default About;

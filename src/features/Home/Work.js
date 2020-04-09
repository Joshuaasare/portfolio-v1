/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-08-20 14:51:19
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-09 09:04:36
 */
import React, { useState } from 'react';
import './css/Work.css';
import { Ikon } from '../_shared/components';
import { experience } from '../_shared/constants';

const Work = (props) => {
  const {} = props;
  const [activeWork, setActiveWork] = useState(Object.keys(experience)[0]);

  function renderWorkNav() {
    return Object.keys(experience).map((key, index) => {
      return (
        <div
          onClick={() => setActiveWork(key)}
          className={
            activeWork === key ? 'nav-item nav-item-active' : 'nav-item'
          }
        >
          {key}
        </div>
      );
    });
  }

  function renderContent() {
    const data = experience[activeWork];
    return (
      <div className="exp">
        <div className="exp__header">
          <div>
            <span className="exp__title">{data.title}</span>
            <span className="exp__comp">{data.company}</span>
          </div>
          <div className="exp__duration">{data.duration}</div>
        </div>

        <div className="exp__content">
          {data.tasks.map((task) => (
            <div className="exp__skill">
              <div>
                <Ikon
                  name="play"
                  className="exp__skill-icon"
                  size={1.3}
                  color="#f4a01d"
                />
              </div>
              <span>{task}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="work">
      <div className="work__header">
        <span className="line" />
        <span className="name">Relevant Experience</span>
      </div>

      <div className="row">
        <div className="col-1-of-3 work-nav">
          <div className="work__navigation">{renderWorkNav()}</div>
        </div>

        <div className="col-2-of-3 work-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Work;

/*
 * @Author: Joshua Asare
 * @Date: 2020-04-06 12:46:16
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-04-09 10:46:50
 */
import React from 'react';
import './css/Projects.css';
import { images } from '../_shared/assets';
import { Ikon } from '../_shared/components';
import { projects } from '../_shared/constants';

const Projects = () => {
  function renderProjectContent(alt?: string = '', project) {
    return (
      <div className="projects__text-container">
        <div className={`projects__title ${alt}`}>
          <span className="title">{project.title}</span>
          <span className="name">{project.name}</span>
        </div>
        <div className={`projects__info ${alt}`}>{project.description}</div>
        <div className={`projects__tech ${alt}`}>
          <div className="icons">
            {project.icons.map((icon) => {
              return (
                <div>
                  <Ikon
                    name={icon}
                    color="#ffae57"
                    size={2.5}
                    className={`projects__tech-icon ${alt}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="list">
            {project.list.map((item) => (
              <span>{item}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderProjectImage(alt? = '', project) {
    return (
      <div className="project__image-container">
        <img
          alt=""
          src={images[project.image]}
          className={`projects__image ${alt}`}
        />
      </div>
    );
  }

  return (
    <div className="projects">
      <div className="projects__header">
        <span className="name">Some stuff i've built</span>
        <span className="line" />
      </div>

      {projects.map((project, index) => {
        const alt = index % 2 === 0 ? 'alt' : '';

        if (alt) {
          return (
            <div className="row projects__row">
              <div className="col-1-of-2 project__text">
                {renderProjectContent(alt, project)}
              </div>
              <div className="col-1-of-2 project__img">
                {renderProjectImage(alt, project)}
              </div>
            </div>
          );
        }

        return (
          <div className="row projects__row">
            <div className="col-1-of-2 project__img">
              {renderProjectImage(alt, project)}
            </div>
            <div className="col-1-of-2 project__text">
              {renderProjectContent(alt, project)}
            </div>
          </div>
        );
      })}

      {/* <div className="projects__others">
        <div className="header">Other Projects</div>
        <div className="row">
          {otherProjects.map((item) => (
            <div className="col-1-of-3">
              <div className="projects__box">
                <div className="top">
                  <span className="single">
                    <Ikon
                      name="folder-open"
                      size={2}
                      className="icon"
                      color="#fff"
                    />
                  </span>
                  <span className="group">
                    <Ikon
                      name="github"
                      size={2}
                      className="icon"
                      color="#fff"
                    />
                    <Ikon name="link" size={2} className="icon" color="#fff" />
                  </span>
                </div>

                <div className="mid">{item.name}</div>

                <div className="desc">{item.description}</div>

                <div className="bottom">
                  <div>
                    {item.techList.map((list) => (
                      <span>{list}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Projects;

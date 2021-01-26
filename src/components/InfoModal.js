import React from 'react'
import sprites from '../assets/images/sprites.svg'

export default function InfoModal({ profile, closeModal }) {
  return (
    <div className="info-modal">
      <div className="tablet-view">
        <a href="#close" onClick={closeModal}>
          <svg className="icon">
            <use xlinkHref={`${sprites}#icon-arrow-left2`}></use>
          </svg>
        </a>
      </div>
      <div className="card">
        <div className="top">
          <div className="profile-info">
            <h6 className="heading">{profile.title}</h6>
            <span className="company">{profile.company}</span>
            <div className="ratings">
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-active-star`}></use>
              </svg>
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-active-star`}></use>
              </svg><svg className="icon">
                <use xlinkHref={`${sprites}#icon-active-star`}></use>
              </svg><svg className="icon">
                <use xlinkHref={`${sprites}#icon-active-star`}></use>
              </svg><svg className="icon">
                <use xlinkHref={`${sprites}#icon-active-star`}></use>
              </svg>
            </div>
          </div>
          <div className="company-icon">
            <img src={profile.icon} alt="internshala" />
          </div>
        </div>
        <div className="middle">
          <div className="location">
            <svg className="icon">
              <use xlinkHref={`${sprites}#icon-location`}></use>
            </svg>
            <span className="address">{profile.location}</span>
          </div>
          <div className="twoCol">
            <div className="salary">
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-salary`}></use>
              </svg>
              <span className="address">{profile.salary}</span>
            </div>
            <div className="duration">
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-duration`}></use>
              </svg>
              <span className="address">{profile.duration}</span>
            </div>
            <div className="createdAt">
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-posted-on`}></use>
              </svg>
              <span className="address">{profile.posted_at}</span>
            </div>
          </div>

        </div>
      </div>
      <hr className="separator" />
      <div className="about">
        <h6>About the Company</h6>
        <p>{profile.description}</p>
        <h6>About the internship</h6>
        {profile.about_internship.length > 0 && profile.about_internship.map(item => (
          <li key={item}>{item}</li>
        ))}
        <h6>Skills Required</h6>
        <div className="tags">
          {profile.tags && profile.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <h6>Who can apply</h6>
        <hr></hr>
        <div className="apply-now">
          <button className="button">Apply now</button>
        </div>
      </div>
      <div className="tablet-view fixed">
        <div className="bottom">
          <div className="left">
            <a href="#save">
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-Save`}></use>
              </svg>
            </a>
            <a href="#share">
              <svg className="icon">
                <use xlinkHref={`${sprites}#icon-Share`}></use>
              </svg>
            </a>
          </div>
          <div className="right">
            <div className="apply-now">
              <button className="button">Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

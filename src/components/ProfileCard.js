import React from 'react'
import sprites from '../assets/images/sprites.svg'

export default function ProfileCard({ profile, viewDetailHandler }) {
  return (
    <div className={`card ${profile.show ? 'selected' : ''}`} >
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
        </div>
        <div className="createdAt">
          <svg className="icon">
            <use xlinkHref={`${sprites}#icon-posted-on`}></use>
          </svg>
          <span className="address">{profile.posted_at}</span>
        </div>
      </div>
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
          <button href="#details" onClick={viewDetailHandler}>
            View Details
                    <svg className="icon">
              <use xlinkHref={`${sprites}#icon-chevron-right`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

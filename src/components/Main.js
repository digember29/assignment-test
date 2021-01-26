import React, { useState } from 'react'
import '../assets/scss/Main.scss'
import ProfileCard from '../components/ProfileCard'
import InfoModal from '../components/InfoModal'
import { profiles } from '../helpers/profiles'
import mapImage from '../assets/images/map.png'
import sprites from '../assets/images/sprites.svg'

export default function Main() {

  const [profilesData, setProfilesData] = useState(profiles)

  const [showInfoModal, setShowInfoModal] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)

  const viewDetailHandler = (profile) => {
    let tempData = [...profilesData]
    let updated = tempData.map(item => {
      if (item.id === profile.id) return {
        ...item,
        show: true
      }
      return {
        ...item,
        show: false
      }
    })
    setProfilesData(updated)
    setSelectedProfile(profile)
    setShowInfoModal(true)
  }

  return (
    <div className="main">
      <div className="section">
        <div className="left-section">
          <div className="cards">
            {profilesData.length > 0 && profilesData.map(profile => (
              <ProfileCard
                profile={profile}
                key={profile.id}
                viewDetailHandler={() => viewDetailHandler(profile)}
                showInfoModal={showInfoModal}
              />
            ))}
          </div>

        </div>
        <div className="right-section">
          <img src={mapImage} alt="map" />
          {showInfoModal && (
            <div>
              <InfoModal profile={selectedProfile} closeModal={
                () => {
                  setShowInfoModal(false)
                  let tempData = [...profilesData]
                  let updated = tempData.map(item => {
                    if (item.id === selectedProfile.id) return {
                      ...item,
                      show: false
                    }
                    return item
                  })
                  setProfilesData(updated)
                }
              } />
              <button className="close" onClick={() => {
                setShowInfoModal(false)
                let tempData = [...profilesData]
                let updated = tempData.map(item => {
                  if (item.id === selectedProfile.id) return {
                    ...item,
                    show: false
                  }
                  return item
                })
                setProfilesData(updated)
              }}
              >
                <svg className="icon">
                  <use xlinkHref={`${sprites}#icon-X`}></use>
                </svg>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

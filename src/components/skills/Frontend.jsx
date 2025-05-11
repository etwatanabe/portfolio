import React from 'react'
import SkillData from './SkillData'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <div className="skills__box">
          <div className="skills__group">
            <SkillData name="teste" level="teste"/>
            <SkillData />
            <SkillData />
          </div>
        </div>
      </h3>
    </div>
  )
}

export default Frontend
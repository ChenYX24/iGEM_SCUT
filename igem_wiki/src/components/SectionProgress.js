import React from 'react'
import SectionProgressCss from '../css/SectionProgress.module.css'

function SectionProgress ({ progress, lFromDeg, rFromDeg, rToDeg, lToDeg }) {
  const circleStyle = {
    '--Lfrom-deg': lFromDeg,
    '--Rfrom-deg': rFromDeg,
    '--Rto-deg': rToDeg,
    '--Lto-deg': lToDeg,
  }

  return (
    <>
      <div className={SectionProgressCss.circle} style={circleStyle}>
        <div className={SectionProgressCss.left}>
          <div className={`${SectionProgressCss.left_circle} ${SectionProgressCss ? SectionProgressCss.animate : ""}`}></div>
        </div>
        <div className={SectionProgressCss.right}>
          <div className={`${SectionProgressCss.right_circle} ${SectionProgressCss ? SectionProgressCss.animate : ""}`}></div>
        </div>
        <div className={SectionProgressCss.inner}></div>
      </div>

    </>
  )
}

export default SectionProgress

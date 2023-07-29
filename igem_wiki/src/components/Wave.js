import WaveCss from "../css/Wave.module.css"
function Wave () {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      <div>
        {/* 海浪 */}
        <svg
          className={WaveCss.waves}
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentleWave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className={WaveCss.parallax}>
            <use xlinkHref="#gentleWave" x={48} fill="rgba(144, 206, 203,0.5)" />
            <use xlinkHref="#gentleWave" x={48} y={3} fill="rgba(237, 215, 199,0.5)" />
            <use xlinkHref="#gentleWave" x={48} y={5} fill="rgba(189, 210, 202,0.5)" />
            <use xlinkHref="#gentleWave" x={48} y={7} fill="rgba(144, 206, 203,0.8)" />
          </g>
        </svg>
        {/* 页尾 */}
        <div className={WaveCss["footPage"]}>
          <h1 className={WaveCss["title"]}>ABOUT US</h1>
          <p className={WaveCss["subtitle"]}>2023 iGEM SCUT-ChinaECO-SHELLS</p>
          <div className={WaveCss["imageRow"]}>
            <img src="https://static.igem.wiki/teams/4621/wiki/scut.png" alt="" height="200px" width="200px" />
            <img src="https://static.igem.wiki/teams/4621/wiki/logo1.png" alt="" height="200px" width="200px" />
            <img src="https://static.igem.wiki/teams/4621/wiki/igem.png" alt="" height="200px" width="200px" />
          </div>
          <div className={WaveCss["imageRow"]}>
            <img src="https://static.igem.wiki/teams/4621/wiki/mathworks.png" alt="" height="200px" width="200px" />
            <img src="https://static.igem.wiki/teams/4621/wiki/biocreatech.png" alt="" height="200px" width="200px" />
            <img src="https://static.igem.wiki/teams/4621/wiki/snapgene.png" alt="" height="200px" width="200px" />
          </div>
          <hr className={WaveCss["line"]} />
          <div className={WaveCss["backToTop"]} onClick={handleBackToTop}>
            <svg className={WaveCss["arrow"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4L4 12h5v8h6v-8h5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span className={WaveCss["text"]}>BACK TO THE TOP</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Wave
import WaveCss from "../css/Wave.module.css"
function Wave () {
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
          <img src={require("../resources/test.jpg")} alt="" height="100px" width="200px" />
        </div>
      </div>
    </>
  )
}
export default Wave
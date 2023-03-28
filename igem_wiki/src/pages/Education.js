import NavBar from "../components/NavBar"
import EducationCss from "../css/Education.module.css"
import Wave from "../components/Wave";
import WaveCss from "../css/Wave.module.css";
function Education () {
    return (
        <>
            <NavBar />
            <div className={EducationCss.container}>
                <div className={EducationCss.backgroundImg}>
                    <img src={require('../assets/education.png')}/>
                </div>
                <p className={EducationCss.title}>Education</p>
                {/*<div className={EducationCss.sea}>*/}
                {/*    <p className={EducationCss.title}>Education</p>*/}
                {/*    <span className={EducationCss.wave}></span>*/}
                {/*    <span className={EducationCss.wave}></span>*/}
                {/*    <span className={EducationCss.wave}></span>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/* 海浪 */}
                    <svg className={EducationCss.waves} viewBox="0 24 150 28" preserveAspectRatio="none"
                         shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave"
                                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                        </defs>
                        <g className={EducationCss.parallax}>
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)"/>
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
                        </g>
                    </svg>
                    {/*<svg*/}
                    {/*    className={EducationCss.waves}*/}
                    {/*    viewBox="0 24 150 28"*/}
                    {/*    preserveAspectRatio="none"*/}
                    {/*>*/}
                    {/*    <defs>*/}
                    {/*        <path*/}
                    {/*            id="gentleWave"*/}
                    {/*            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"*/}
                    {/*        />*/}
                    {/*    </defs>*/}
                    {/*    <g className={EducationCss.parallax}>*/}
                    {/*        <use xlinkHref="#gentleWave" x={48} fill="rgba(144, 206, 203,0.5)" />*/}
                    {/*        <use xlinkHref="#gentleWave" x={48} y={3} fill="rgba(237, 215, 199,0.5)" />*/}
                    {/*        <use xlinkHref="#gentleWave" x={48} y={5} fill="rgba(189, 210, 202,0.5)" />*/}
                    {/*        <use xlinkHref="#gentleWave" x={48} y={7} fill="rgba(144, 206, 203,0.8)" />*/}
                    {/*    </g>*/}
                    {/*</svg>*/}
                    <div className={EducationCss.footPage}>
                        
                    </div>
                {/*</div>*/}
            </div>
        </>
    )
}
export default Education


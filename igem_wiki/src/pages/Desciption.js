import NavBar from "../components/NavBar"
import SideNav from "../components/SideNav"
import DesciptionCss from "../css/Description.module.css"
import { useState, useEffect } from "react"

function Desciption () {
  let NavData = [{ id: 0, text: 'background', isActive: true }, { id: 1, text: 'overview', isActive: false }, { id: 2, text: 'reference', isActive: false },]

  const observer = new IntersectionObserver(ioes => {
    ioes.forEach(ioe => {
      const el = ioe.target
      const intersectionRatio = ioe.intersectionRatio
      // console.log(el)
      if (intersectionRatio > 0 && intersectionRatio <= 1) {
        el.classList.add(`${DesciptionCss._visible}`)
      }
      el.onload = el.onerror = () => observer.unobserve(el)
    })
  })
  const VideoObserver = new IntersectionObserver(ioes => {
    ioes.forEach(ioe => {
      const el = ioe.target
      const intersectionRatio = ioe.intersectionRatio
      if (intersectionRatio > 0 && intersectionRatio <= 1) {
        console.log(el)
        el.play()
      }
      el.onload = el.onerror = () => VideoObserver.unobserve(el)
    })
  })

  useEffect(() => {
    for (let i = 0; i < 14; i += 1) {
      observer.observe(document.querySelector(`.fadeinBox${i + 1}`))
    }
    const video1 = document.querySelector('.video1')
    VideoObserver.observe(video1)
    // console.log(video1)
    video1.addEventListener("ended", function () {
      video1.pause()
    })
  }, [])

  return (
    <>
      <NavBar />
      <div className={DesciptionCss.container}>
        <div className={DesciptionCss.backgroundImg}></div>
        <h1 className={DesciptionCss.title}>Description</h1>
        <div className={DesciptionCss.waveContainer}>
          {/*海浪*/}
          <svg className={DesciptionCss.waves} viewBox="0 24 150 28" preserveAspectRatio="none"
            shape-rendering="auto">
            <defs>
              <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className={DesciptionCss.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
          <div className={DesciptionCss.filling}>
          </div>
        </div>
        <div className={DesciptionCss.articleContainer}>
          <div className={DesciptionCss.topContainer} id="background">
            <h2 id={DesciptionCss.subTitle1} className={DesciptionCss.subTitle}>Background</h2>
            <div className={DesciptionCss.bar}>
              <div className={DesciptionCss.insideBar}></div>
            </div>
            <div className={DesciptionCss.topBox}>
              <div className={DesciptionCss.fadein + " " + "fadeinBox1"}>
                <p className={DesciptionCss.fadeintarget}>{backgroundContent_p1}<span>shell of shrimps </span>and <span>crabs</span></p>
              </div>
              <div className={DesciptionCss.box1 + " " + DesciptionCss.fadein + " " + "fadeinBox2"}>
                <div className={DesciptionCss.sideBar1}></div>
                <div className={DesciptionCss.imgBox + " " + DesciptionCss.fadeintarget}>
                  <img style={{ width: "100%" }} src={require('../assets/description/figure1.png')}></img>
                </div>
              </div>
              <div className={DesciptionCss.fadein + " " + "fadeinBox3"}>
                <p className={DesciptionCss.fadeintarget}>But in the global industry of seafood, this waste is hard to neglect.<span> 6-8 million tons</span> {backgroundContent_p2}</p>
              </div>
              <div className={DesciptionCss.box2}>
                <div className={DesciptionCss.SideBar1}>
                  <div className={DesciptionCss.pillar1}></div>
                  <div className={DesciptionCss.sideBar2}></div>
                </div>
                <div className={DesciptionCss.blankBox}></div>
                <div className={DesciptionCss.contentBox}>

                  <div className={DesciptionCss.helpBox}>
                    <div className={DesciptionCss.fadein + " " + "fadeinBox4"}>
                      <div className={DesciptionCss.sideBox1 + " " + DesciptionCss.fadeintarget} data-delay='1'><p><span>SCUT-China </span>gathers in <span>Guangdong</span>{backgroundContent_p3}</p></div>
                    </div>
                    <div className={DesciptionCss.SideBar2}>
                      <div className={DesciptionCss.sideBar3}></div>
                      <div className={DesciptionCss.pillar2}></div>
                      <div className={DesciptionCss.pillar3}></div>
                    </div>
                  </div>
                  <div className={DesciptionCss.imgBox}>
                    {/* <img style={{ width: "100%" }} src={require('../assets/description/广东省.gif')}></img> */}
                    <video className='video1' muted
                      style={{ width: "100%" }} src={require('../assets/description/GuangDong.mp4')}></video>
                  </div>

                </div>
              </div>

              <div className={DesciptionCss.textBox + " " + DesciptionCss.fadein + " " + "fadeinBox5"} style={{ marginTop: 0 }}>
                <p className={DesciptionCss.fadeintarget}>{backgroundContent_p4}<span>malicious to the environment and human health</span>
                  {backgroundContent_p5}<span>proposing a new way to recycle it </span>
                  is inevitable and of great meaning to this industry.
                </p>
              </div>
              <div className={DesciptionCss.textBox + " " + DesciptionCss.fadein + " " + "fadeinBox6"}>
                <p className={DesciptionCss.fadeintarget}>
                  {backgroundContent_p6}
                  <span>layers of protein-wrapped chitin piled up compactly</span>
                  {backgroundContent_p7}
                  <span>powerful proteinases and chitinases </span>
                  to get crashed.
                </p>
              </div>
              <div className={DesciptionCss.textBox + " " + DesciptionCss.fadein + " " + "fadeinBox14"}>
                <img className={DesciptionCss.fadeintarget} style={{ width: "100%" }} src={require('../assets/description/layer.png')}>
                </img>
              </div>
              <div className={DesciptionCss.textBox + " " + DesciptionCss.fadein + " " + "fadeinBox7"}>
                <p className={DesciptionCss.fadeintarget}>Prof.Luo told us, in his lab, they’ve developed one kind of
                  <span> streptomyces (streptomyces. sp. SCUT-3)</span>
                  {backgroundContent_p8}
                  <span>92%, </span>
                  leaving chitin oligomer and amino acids for further valorization.
                </p>
              </div>
              <div className={DesciptionCss.textBox + " " + DesciptionCss.fadein + " " + "fadeinBox8"}>
                <p className={DesciptionCss.fadeintarget}>
                  This bacterium fits our vision of an industry
                  <span> using shrimp shell as a cheap fermenting material for producing high-value chemicals.</span>
                  {backgroundContent_p9}
                </p>
              </div>
            </div>
          </div>
          <div className={DesciptionCss.midContainer} id="overview">
            <h2 id={DesciptionCss.subTitle2} className={DesciptionCss.subTitle}>Overview</h2>
            <div className={DesciptionCss.bar}>
              <div className={DesciptionCss.insideBar}></div>
            </div>
            <div className={DesciptionCss.midBox}>
              <div className={DesciptionCss.box1 + " " + DesciptionCss.fadein + " " + "fadeinBox9"}>
                <p className={DesciptionCss.fadeintarget}>{overviewContent_p1}</p>
              </div>
              <div className={DesciptionCss.box2 + " " + DesciptionCss.fadein + " " + "fadeinBox10"}>
                <div className={DesciptionCss.fadeintarget}>
                  <p>Our goal is:</p>
                  <p><span>1.</span>The component should be<span> valuable</span>{overviewContent_p2}</p>
                  <p><span>2.</span>{overviewContent_p3}<span>
                    developing tools for further genetic edition
                  </span> take in exogenous gene has a risk. So, it’s better when it is endogenous.
                  </p>
                  <p><span>3.</span>{overviewContent_p4}</p>
                </div>
                <div className={DesciptionCss.sideBar4}></div>
              </div>
              <div className={DesciptionCss.box3 + " " + DesciptionCss.fadein + " " + "fadeinBox11"}>
                <p className={DesciptionCss.fadeintarget}>{overviewContent_p5}
                  <span>two suitable components </span>
                  to synthesize.
                </p>
              </div>
              <div className={DesciptionCss.box4 + " " + DesciptionCss.fadein + " " + "fadeinBox12"}>
                <div className={DesciptionCss.sideBar5}></div>
                <div className={DesciptionCss.fadeintarget}>
                  <p><span>•Ectoine</span></p>
                  <p>
                    Ectoine is widely used as
                    <span> a hydrating component in skincare product and makeup.</span>
                    {overviewContent_p6}
                  </p>
                </div>
              </div>
              <div className={DesciptionCss.box5 + " " + DesciptionCss.fadein + " " + "fadeinBox13"}>
                <div className={DesciptionCss.fadeintarget}>
                  <p><span>•γ-aminobutyric acid(GABA)</span></p>
                  <p>γ-aminobutyric acid(GABA) is
                    <span> an inhibitory neurotransmitter in our human body.</span>
                    It has utility in
                    <span> pharmaceutics, </span>
                    also can be used as
                    <span> food additives.</span>
                    {overviewContent_p7}
                  </p>
                </div>
                <div className={DesciptionCss.sideBar6}></div>
              </div>
            </div>
          </div>


          <div className={DesciptionCss.bottomContainer} id="reference">
            <h2 id={DesciptionCss.subTitle3} className={DesciptionCss.subTitle}>Reference</h2>
            <div className={DesciptionCss.bar}>
              <div className={DesciptionCss.insideBar}></div>
            </div>
            <div className={DesciptionCss.bottomBox} >
              <p>{referenceContent_p1}</p>
              <p>{referenceContent_p2}</p>
              <p>{referenceContent_p3}</p>
              <p>{referenceContent_p4}</p>
            </div>
          </div>
        </div>
        <SideNav data={NavData} />
      </div >
    </>
  )
}

export default Desciption

const backgroundContent_p1 = 'When people buy seafood or make seafood products, they aim to get nutrition from those eatable and savory parts, hardly paying attention to the waste like '

const backgroundContent_p2 = ' tons of shell waste from shrimps and crabs is produced on the earth annually.(Yan & Chen, 2015) With the steady increase of the consumption of shrimp and crab, and the only 40% eatable weight of them, the amount of shell waste is sure to increase in the future. '

const backgroundContent_p3 = ', China. This is a province adjacent to the southern seacoast of the mainland, with a river coming across it.'

const backgroundContent_p4 = 'Traditional strategies of dealing with those shell waste like burning, burying, or even leave them back in the sea, is extremely '
const backgroundContent_p5 = ' (Islam, Khan, & Tanaka, 2004) . The existing chemical methods of degradation fail to fully utilize valuable chemicals, yet is costly in energy. For the promising biochemical resource lies in shell waste, '

const backgroundContent_p6 = "During our interview with Prof.Luo, we discussed a lot about the biological ways to recycle shrimp shell. The chemical structure of shell waste is the trickiest factor in degradation. With "

const backgroundContent_p7 = " like wafer cookies, it's hard to get protein and chitin fully degraded(Demain & Sanchez, 2009). This structure requires bacterium equipped with "

const backgroundContent_p8 = ' which can fully degrade feathers, and they are now testing its ability to deal with other biomass waste, like the skin of fish and shrimp shell. With an inserted gene of powerful chitinase get efficiently expressed by the streptomyces, it can now realize the eco-friendly degradation of most chitin and proteins in shrimp shell at a recycle rate of '

const backgroundContent_p9 = ' That’s the perfect bacteria chassis to carry on further synthesis procedure. So, we get Prof.Luo’s permission to get involved in his research and ask him to be our P.I. Due to the high concentration of nitrogen containing chemicals like amino acids and chitin oligomer, we want to further update this bacterium to see if it can synthesize high value compounds containing nitrogen on the shell waste base.'

const overviewContent_p1 = 'After confirming our project, we buried ourselves in literature research to find out the most suitable component and pathway to synthesize.'

const overviewContent_p2 = " enough for industrial utilization, at the same time, be as close as possible to products in our daily life."

const overviewContent_p3 = "The pathway of synthesizing this component should be compatible in our streptomyces. Due to the novelty of this bacterium and previous experience in the lab, researchers are still "

const overviewContent_p4 = "During our experiment, we should make sure that the component can be enriched during the fermentation and get to a testable level."

const overviewContent_p5 = 'With days spent on general pathway circuits and those pathways started from major amino acids that shell waste creates when degraded, we found '

const overviewContent_p6 = " The synthesizing pathway begin with aspartic acid exists in the streptomyces we use. And the production can be promoted by switch the fermenting environment between low osmotic and high osmotic pressure. In our early attempts, we tested the production of ectoine in the bacterium. Moreover, through literature research, we have found the possible way to improve its producing rate—interfering with two branches on the Ectoine operon, which would be further displayed in Design."

const overviewContent_p7 = " Nowadays, there are already products like milk and chocolate which is mixed with GABA for calming effect. The synthesizing pathway of GABA start from glutamine is also detectible in the streptomyces in this study, but it is an intermediate that is hard to be accumulated. We still need further modifications on the genes downstream to see if the production would be strengthened."

const referenceContent_p1 = "Demain, A. L., & Sanchez, S. (2009). Microbial drug discovery: 80 years of progress. The Journal of Antibiotics, 62(1), 5-16. doi: 10.1038/ja.2008.16"

const referenceContent_p2 = "Islam, M. S., Khan, S., & Tanaka, M. (2004). Waste loading in shrimp and fish processing effluents: potential source of hazards to the coastal and nearshore environments. Marine Pollution Bulletin, 49(1), 103-110. doi: https://doi.org/10.1016/j.marpolbul.2004.01.018"

const referenceContent_p3 = "Shahidi, F., & Synowiecki, J. (1991). Isolation and characterization of nutrients and value-added products from snow crab (Chinoecetes opilio) and shrimp (Pandalus borealis) processing discards. Journal of Agricultural and Food Chemistry, 39, 1527-1532"

const referenceContent_p4 = "Yan, N., & Chen, X. (2015). Sustainability: Don't waste seafood waste. Nature, 524(7564), 155-157. doi: 10.1038/524155a"
import HomeMainCss from "../css/HomeMain.module.css"
function HomeMain () {
  return (
    <>
      <div className={HomeMainCss.MainContent}>
        <div id="Background">
          <h2>Background</h2>
          <div className={HomeMainCss.content}>{BackgroundContent}</div>
        </div>
        <div id="Overview">
          <h2>Overview</h2>
          <div className={HomeMainCss.content}>{OverviewContent}</div>
        </div>
        <div id="References">
          <h2>References</h2>
          <div className={HomeMainCss.content}>{ReferencesContent}</div>
        </div>
      </div >
    </>
  )
}
export default HomeMain


const BackgroundContent = `When people buy seafood or make seafood products, they aim to get nutrition from those eatable and savory parts, hardly paying attention to the waste like shell of shrimps and crabs. But in the global industry of seafood, this waste is hard to neglect. 6-8 million tons of shell waste from shrimps and crabs is produced on the earth annually.(Yan & Chen, 2015) With the steady increase of the consumption of shrimp and crab, and the only 40% eatable weight of them, the amount of shell waste is sure to increase in the future. 
SCUT-China gathers in Guangdong, China. This is a province adjacent to the southern seacoast of the mainland, with a river coming across it. Shrimp is popular from kitchens in advanced restaurants to every family. We know that shrimp shell contains protein and chitin and many biochemical resources(Shahidi & Synowiecki, 1991). It’s a widespread marine biomass. But how exactly is the shell waste be treated? Does it have potential to be fermented and turn into something more valuable? With great curiosity, we search online for some background information. Also, we interviewed Prof.Luo in Biological Science and Engineering School of South China University of Technology, who is specialized in the field of technology in biomass waste recycle, to discuss the potential biotechnology in this industry.
Traditional strategies of dealing with those shell waste like burning, burying, or even leave them back in the sea, is extremely malicious to the environment and human health(Islam, Khan, & Tanaka, 2004) . The existing chemical methods of degradation fail to fully utilize valuable chemicals, yet is costly in energy. For the promising biochemical resource lies in shell waste, proposing a new way to recycle it is inevitable and of great meaning to this industry.
During our interview with Prof.Luo, we discussed a lot about the biological ways to recycle shrimp shell. The chemical structure of shell waste is the trickiest factor in degradation. With layers of protein-wrapped chitin piled up compactly like wafer cookies, it’s hard to get protein and chitin fully degraded(Demain & Sanchez, 2009). This structure requires bacterium equipped with powerful proteinases and chitinases to get crashed.
Prof.Luo told us, in his lab, they’ve developed one kind of streptomyces (streptomyces. sp. SCUT-3) which can fully degrade feathers, and they are now testing its ability to deal with other biomass waste, like the skin of fish and shrimp shell. With an inserted gene of powerful chitinase get efficiently expressed by the streptomyces, it can now realize the eco-friendly degradation of most chitin and proteins in shrimp shell at a recycle rate of 92%, leaving chitin oligomer and amino acids for further valorization.
This bacterium fits our vision of an industry using shrimp shell as a cheap fermenting material for producing high-value chemicals. That’s the perfect bacteria chassis to carry on further synthesis procedure. So, we get Prof.Luo’s permission to get involved in his research and ask him to be our P.I. Due to the high concentration of nitrogen containing chemicals like amino acids and chitin oligomer, we want to further update this bacterium to see if it can synthesize high value compounds containing nitrogen on the shell waste base.`
const OverviewContent = `After confirming our project, we buried ourselves in literature research to find out the most suitable component and pathway to synthesize.
Our goal is:
1.The component should be valuable enough for industrial utilization, at the same time, be as close as possible to products in our daily life.
2.The pathway of synthesizing this component should be compatible in our streptomyces. Due to the novelty of this bacterium and previous experience in the lab, researchers are still developing tools for further genetic edition, take in exogenous gene has a risk. So, it’s better when it is endogenous. 
3.During our experiment, we should make sure that the component can be enriched during the fermentation and get to a testable level.
With days spent on general pathway circuits and those pathways started from major amino acids that shell waste creates when degraded, we found two suitable components to synthesize. 
·Ectoine
Ectoine is widely used as a hydrating component in skincare product and makeup. The synthesizing pathway begin with aspartic acid exists in the streptomyces we use. And the production can be promoted by switch the fermenting environment between low osmotic and high osmotic pressure. In our early attempts, we tested the production of ectoine in the bacterium. Moreover, through literature research, we have found the possible way to improve its producing rate—interfering with two branches on the Ectoine operon, which would be further displayed in Design.
·γ-aminobutyric acid(GABA)
γ-aminobutyric acid(GABA) is an inhibitory neurotransmitter in our human body. It has utility in pharmaceutics, also can be used as food additives. Nowadays, there are already products like milk and chocolate which is mixed with GABA for calming effect. The synthesizing pathway of GABA start from glutamine is also detectible in the streptomyces in this study, but it is an intermediate that is hard to be accumulated. We still need further modifications on the genes downstream to see if the production would be strengthened.`
const ReferencesContent = `Demain, A. L., & Sanchez, S. (2009). Microbial drug discovery: 80 years of progress. The Journal of Antibiotics, 62(1), 5-16. doi:10.1038/ja.2008.16

Islam, M. S., Khan, S., & Tanaka, M. (2004). Waste loading in shrimp and fish processing effluents: potential source of hazards to the coastal and nearshore environments. Marine Pollution Bulletin, 49(1), 103-110. doi: https://doi.org/10.1016/j.marpolbul.2004.01.018

Shahidi, F., & Synowiecki, J. (1991). Isolation and characterization of nutrients and value-added products from snow crab (Chinoecetes opilio) and shrimp (Pandalus borealis) processing discards. Journal of Agricultural and Food Chemistry, 39, 1527-1532

Yan, N., & Chen, X. (2015). Sustainability: Don't waste seafood waste. Nature, 524(7564), 155-157. doi: 10.1038/524155a`

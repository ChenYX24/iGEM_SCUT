// One of graphic styles of Homepage
import "../css/GraphicCard.css"
function GraphicCard () {
  return (
    <div class="graphicCard">
      <div className="title"><h2>This is title</h2></div>
      <div class="card">
        <div class="imgBx">
          <img src={require("../resources/test2.png")} alt="" />
        </div>
        <div class="content">
          <h2>Card One</h2>
          <p>
            If you are getting started with Spring Boot, or “Spring” in general, start by reading this section. It
            answers the basic “what?”, “how?” and “why?” questions.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={require("../resources/test2.png")} alt="" />
        </div>
        <div class="content">
          <h2>Card Two</h2>
          <p>
            If you are getting started with Spring Boot, or “Spring” in general, start by reading this section. It
            answers the basic “what?”, “how?” and “why?” questions.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={require("../resources/test2.png")} alt="" />
        </div>
        <div class="content">
          <h2>Card Three</h2>
          <p>
            If you are getting started with Spring Boot, or “Spring” in general, start by reading this section. It
            answers the basic “what?”, “how?” and “why?” questions.
          </p>
        </div>
      </div>
    </div>

  )
}
export default GraphicCard 
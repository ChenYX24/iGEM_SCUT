// One of graphic styles of Homepage
import "../css/GraphicCard.css"
function GraphicCard () {
  return (
    <div className="graphicCard">
      {/* <div className="title"><h2>This is title</h2></div> */}
      <div className="card">
        <div className="imgBx">
          <img src="https://static.igem.wiki/teams/4621/wiki/logo2.png" alt="" />
        </div>
        <div className="content">
          <h2>Card One</h2>
          <p>

          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src={require("../assets/logo2.png")} alt="" />
        </div>
        <div className="content">
          <h2>Card Two</h2>
          <p>

          </p>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src={require("../assets/logo2.png")} alt="" />
        </div>
        <div className="content">
          <h2>Card Three</h2>
          <p>

          </p>
        </div>
      </div>
    </div>

  )
}
export default GraphicCard 
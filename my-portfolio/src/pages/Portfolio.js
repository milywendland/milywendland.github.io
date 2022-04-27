import BusyBear1 from '../images/BusyBear1.png'
import BusyBear2 from '../images/BusyBear2.png'
import Soon from '../images/Soon.PNG'
import yelpGuesserLanding from '../images/yelpGuesserLanding.jpeg'
import YelpGuesserGame from '../images/YelpGuesserGame.jpeg'

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h2>Projects</h2>
      <div className="project-card-wrapper">
        <div className="project-card">
          <h3>Busy Bear</h3>
          <img
            src={BusyBear1}
            alt="busy bear gameplay"
            className="img-top"
          ></img>
          <img
            src={BusyBear2}
            alt="busy bear gameplay"
            className="img-bottom"
          ></img>
          <p>
            Busy Bear is a cute take on a classic memory card game created with
            HTML, CSS, and JavaScript.
          </p>
          <a href="https://github.com/milywendland/project1_memory_game">
            GitHub
          </a>
          <a href="https://busybear.surge.sh/">Deployed Game</a>
        </div>
        <div className="project-card">
          <h3>Crit Catalog</h3>
          <img src={Soon} alt="crit catalog" className='"img-top'></img>
          <p>
            Crit Catalog is a web app where users can add their favorite
            tabletop and video games to lists. Dont see your favorite game? Add
            it to our database.{' '}
          </p>
        </div>
        <div className="project-card" id="yelp">
          <h3>Yelp Guesser</h3>
          <img
            src={yelpGuesserLanding}
            alt="Yelp Guesser"
            className="img-top"
          ></img>
          <img
            src={YelpGuesserGame}
            alt="yelp guesser"
            className="img-bottom"
          ></img>
          <p>
            Inspired by GeoGuessr. It was created using PostgreSQL, React,
            Express, and Node.Js.
          </p>
          <a href="https://github.com/BLewis739/u3_project_yelp_guesser_f/blob/main/README.md">
            GitHub
          </a>
          <a href="https://yelp-guesser-golden.herokuapp.com/">Deployed Game</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

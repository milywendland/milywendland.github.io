import mily from '../images/mily.PNG'
import milyphoto from '../images/milyphoto.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="milylogo">
        <img src={mily} alt="mily wendland" />
      </div>
      <div className="milyphoto">
        <img src={milyphoto} alt="mily" />
      </div>
      <div className="about">
        <h2>About Me</h2>
      </div>
      <div className="about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          vitae tortor condimentum lacinia quis. Lacinia quis vel eros donec ac
          odio tempor orci. Viverra adipiscing at in tellus integer feugiat.
          Tempor orci dapibus ultrices in iaculis nunc sed. Elementum curabitur
          vitae nunc sed velit dignissim sodales ut.
        </p>
      </div>
    </div>
  )
}

export default Home

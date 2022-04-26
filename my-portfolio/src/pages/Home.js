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
          I have always had a love for design, I started off "coding" on
          MySpace, as many 20-somethings did. I loved being able to take
          something and make it my own. After years in the arts and service
          industries, I felt that something was missing in my daily life. I
          enrolled in General Assembly's Software Engineering Immersive and
          rekindled my love for design.
          <br></br>
          <br></br>A creative problem solver. A detail-oriented Full-Stack and
          Indie Game developer.
          <br></br>
          <br></br>
          In my free time, I play minecraft, rollerskate in the park, and come
          in 5th in team trivia.
        </p>
      </div>
    </div>
  )
}

export default Home

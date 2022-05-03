import mily from '../images/mily.PNG'
import milyphoto from '../images/milyphoto.jpg'

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="milylogo">
        <img src={mily} alt="mily wendland" />
      </div>
      <div className="home">
        <div className="milyphoto">
          <img src={milyphoto} alt="mily" />

          <div className="about">
            <h2>About Me</h2>
            <p>
              A full-stack developer who is creatively driven. I have a
              background in visual arts, craft coffee, and customer service. I
              take pride in everything that I work on whether it’s an app or
              latte art. When I'm not coding, I am cuddling up with my cat,
              gaming (mostly Minecraft), and coming solidly in fourth place at
              team trivia.
            </p>
          </div>
        </div>
        <div className="contact">
          <h3>Contact Me</h3>
          <form
            action="https://public.herotofu.com/v1/3e0c2c70-cafb-11ec-a557-034a17e2da28"
            method="post"
          >
            <div>
              <label for="name">Name: </label>
              <input name="Name" id="name" type="text" required />
            </div>
            <div>
              <label for="email">Email: </label>
              <input name="Email" id="email" type="email" required />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Send me a message."
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home

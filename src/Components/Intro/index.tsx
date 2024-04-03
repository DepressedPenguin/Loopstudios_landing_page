import "./style.css";
import imagebg from "../../img/image-interactive.jpg";

type theme = {
  theme: string;
};

export default function Intro({ theme }: theme) {
  return (
    <>
      <div className={theme}>
        <section className="background">
          <div className="background_leader">
            <img src={imagebg} />
          </div>
          <div className="intro_text background">
            <h1 className="headline_card text">THE LEADER IN INTERACTIVE VR</h1>
            <p className="text">
              Founded in 2011, Loopstudios has been producing world-class
              <br />
              virtual reality projects for some of the best companies around the
              <br />
              globe. Our award-winning creations have tranformed business though
              <br />
              digital experiences that bind to their brand.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

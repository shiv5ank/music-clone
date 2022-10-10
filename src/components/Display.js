import music from "../images/musicicon.png";

const Display = () => {
  return (
    <div className="displayContainer">
      <div className="intro_container">
        <h2 className="intro_head">Listen to your top musics</h2>
        <h2 className="intro_forfree">FOR FREE</h2>
      </div>
      <div className="image_container">
        <img src={music} alt="display_picture"></img>
      </div>
    </div>
  );
};

export default Display;

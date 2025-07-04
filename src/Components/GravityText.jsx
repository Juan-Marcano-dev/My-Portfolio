import "./styles/GravityText.scss";
import Sky from "./Stars";
const GravityText = () => {
  return (
    <>
    
    <div className="gravity-container">
      <div className="horizon"></div>
      <div className="earth"></div>
      <h1 className="title"></h1>
      <h2 className="subtitle"></h2>
    </div>
    <Sky/>
    </>
  );
};

export default GravityText;

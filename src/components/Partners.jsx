import fleet from "../assets/logos/fleet.png";


export const Partners = () => {

  return (
    <div className="partner--container">
      <h2>Partners</h2>
      <div className="logos">
        <div className="logos-slide">
          <img src={fleet} alt="Fleet Logo" />
        </div>
      </div>
    </div>
  );
};
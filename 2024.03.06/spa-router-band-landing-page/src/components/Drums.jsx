import Dan from "../assets/Dan MCMurray.jpg"; // import image from assets folder

function Drums() {
  return (
    <div className="band">
      <img src={Dan} alt="Drums" /> {/* Use image inside the src of the <img /> element */}
    </div>
  );
}

export default Drums;

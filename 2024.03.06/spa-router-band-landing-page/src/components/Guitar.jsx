import Michael from "../assets/Michael Guy 2.jpg"; // import image from assets folder

function Guitar() {
  return (
    <div className="band">
      <img src={Michael} alt="guitar" /> {/* Use image inside the src of the <img /> element */}
    </div>
  );
}

export default Guitar;

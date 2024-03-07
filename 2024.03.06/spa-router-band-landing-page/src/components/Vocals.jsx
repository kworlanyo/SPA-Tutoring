import Matt from "../assets/Matt Crocker 2.webp"; // import image from assets folder

function Vocals() {
  return (
    <div className="band">
      <img src={Matt} alt="vocal" /> {/* Use image inside the src of the <img /> element */}
    </div>
  );
}

export default Vocals;

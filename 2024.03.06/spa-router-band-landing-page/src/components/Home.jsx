import HomeImage from "../assets/theater.webp"; // import image from assets folder
function Home() {
  return (
    <div className="band">
      <img src={HomeImage} alt="home" /> {/* Use image inside the src of the <img /> element */}
    </div>
  );
}

export default Home;

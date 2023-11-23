import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const imagePath = "images/";
    const imageCount = 222;

    const images = Array.from({ length: imageCount }, (_, index) => ({
      id: index + 1,
      src: `${imagePath}${index + 1}.jpeg`,
      alt: `Tiny Fattie ${index + 1}`,
    }));

    setImageList(images);
  }, []);

  const handleDownload = (imageSrc, imageName) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>tiny fatties</h1>
        <p>click to download a cuttie you want</p>
      </div>
      <div className="gallery">
        {imageList.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-item"
            onClick={() =>
              handleDownload(image.src, `tinyfattie_${image.id}.jpg`)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;

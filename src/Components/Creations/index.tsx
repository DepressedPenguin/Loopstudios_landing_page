import "./style.css";
interface ImageItem {
  image: string;
  text: string;
}

interface CreationsProps {
  imagesList: ImageItem[];
  theme: string;
}
export default function Creations({ imagesList, theme }: CreationsProps) {
  console.log(imagesList);

  return (
    <>
      <div className={theme}>
        <div className="headline_creations background">
          <h1 className="text">OUR CREATIONS</h1>
          <button className="button_see_all text">SEE ALL</button>
        </div>
        <section className="galery_section background text">
          {imagesList.length > 0 ? (
            imagesList.map((item, index) => (
              <div className="box_img_galery" key={index}>
                <img src={item.image} alt={item.text} />
                <div className="image_text border">
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No image found</p>
          )}
        </section>{" "}
      </div>
    </>
  );
}

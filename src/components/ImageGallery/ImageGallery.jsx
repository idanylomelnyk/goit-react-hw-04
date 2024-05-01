import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpen, onData }) {
  console.log(images)
  return (
    <ul className={css.list}>
      {images.map((image) => (
        
        <li key={image.id}>
          <ImageCard
            onOpen={onOpen}
            smallImage={image.urls.small}
            regularImage = {image.urls.regular}
            description={image.alt_description}
            author={image.user.first_name}
            likes={image.likes}
            onData = {onData}
            />
        </li>
      ))}
    </ul>
  );
}

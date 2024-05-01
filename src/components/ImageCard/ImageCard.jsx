import css from './ImageCard.module.css'

export default function ImageCard({
  smallImage,
  description,
  onOpen,
  likes,
  author,
  regularImage,
  onData,
}) {
  return (
    <div>
      <img className={css.image}
        src={smallImage}
        alt={description}
        onClick={() => {
          onOpen(true);
          onData(likes, author, regularImage)
        }}
      />
    </div>
  );
}

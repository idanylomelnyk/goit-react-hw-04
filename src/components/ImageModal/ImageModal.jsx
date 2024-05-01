import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FiX, FiInstagram, FiHeart } from "react-icons/fi";

export default function ImageModal({
  onClose,
  isModalOpen,
  currentImage,
  likes,
  author,
}) {
  return (
    <Modal
      className={css.modal}
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        onClose();
      }}>
      <img className={css.image} src={currentImage} alt="" />
      <div className={css.text}>
        <span className={css.wrapper}>
          <FiInstagram />
          {author}
        </span>
        <span className={css.wrapper}>
          <FiHeart />
          {likes}
        </span>
      </div>
      <button
        className={css.button}
        onClick={() => {
          onClose(false);
        }}>
        <FiX className={css.icon} />
      </button>
    </Modal>
  );
}

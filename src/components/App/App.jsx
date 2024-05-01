import { useEffect, useState } from "react";
import { fetchImages } from "../../api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [likes, setLikes] = useState("");
  const [instagram, setInstagram] = useState("");
  
  const emptyInput = () => toast.error("Type something!", {icon: "✍️", position: 'bottom-center'});
  const noImage = () => toast.error("We have no images for you!", {icon: "🥺", position: 'bottom-center'});

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);

        if (data.length === 0) {
          noImage();
        }
        setImages((prev) => {
          return [...prev, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  function handleSubmit(e) {
    e.preventDefault();
    const newQuery = e.target.elements.image.value.trim();
    if (newQuery === "") {
      emptyInput();
    }

    setQuery(newQuery);
    setPage(1);
    setImages([]);
    e.target.reset();
  }
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function imageData(likes, instagram, selectedImage) {
    setLikes(likes);
    setInstagram(instagram);
    setSelectedImage(selectedImage);
  }

  function toggleModal(bool) {
    setIsModalOpen(bool);
  }

  return (
    <div className={css.wrapper}>
      <SearchBar onSubmit={handleSubmit} />
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onOpen={toggleModal}
            onData={imageData}
          />
        )}
        <ImageModal
          onClose={toggleModal}
          isModalOpen={isModalOpen}
          currentImage={selectedImage}
          likes={likes}
          author={instagram}
        />
        {images.length > 11 && (
          <LoadMoreBtn onHandleLoadMore={handleLoadMore} />
        )}

        <Toaster />
      </div>
    </div>
  );
}

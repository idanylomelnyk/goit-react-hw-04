import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onHandleLoadMore }) {
  return (
    <button className={css.button} onClick={onHandleLoadMore}>
      Load more
    </button>
  );
}

import { RotatingLines } from "react-loader-spinner";
import css from './Loader.module.css'

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <RotatingLines
      visible={true}
      height="50"
      width="50"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      strokeColor="orange"
    />
    </div>
  );
}

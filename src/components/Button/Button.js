import PropTypes from "prop-types";
import s from './Button.module.css';

const Button = ({onFetchImage}) => {
  return (
    <button
      type="button"
      className={s.Button}
      onClick={onFetchImage}
    >
      Показать больше
    </button>
  )
};

Button.propTypes = {
  onFetchImage: PropTypes.func.isRequired,
}

export default Button;
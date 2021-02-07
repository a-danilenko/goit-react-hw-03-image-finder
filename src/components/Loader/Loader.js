import { ImSpinner } from 'react-icons/im';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div role="alert">
      <div style={s.spinner}>
        <ImSpinner size="40" className="icon-spin" />
        Грузим...
      </div>
    </div>
  )
}
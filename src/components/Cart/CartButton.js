import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const toggleCartHanldler = () =>{
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHanldler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

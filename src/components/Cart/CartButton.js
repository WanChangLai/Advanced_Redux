import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  //useSelector read the totalQuantity inside the store
  const cartQuantity = useSelector(state=>state.cart.totalQuantity);

  const toggleCartHanldler = () =>{
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHanldler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

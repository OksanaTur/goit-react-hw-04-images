import propTypes from 'prop-types';
import { Btn } from './Button.styled';


export const Button = ({ onClick }) => (
  <Btn onClick={onClick} type="button">
    Load more
  </Btn>
);
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
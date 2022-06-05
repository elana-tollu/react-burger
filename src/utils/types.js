import PropTypes from 'prop-types';

export const INGREDIENT_TYPE = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  });
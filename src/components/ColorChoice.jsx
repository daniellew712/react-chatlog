import './ColorChoice.css';
import PropTypes from 'prop-types';

const colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];

const COLOR_MAP = {
  '🔴': 'red',
  '🟠': 'orange',
  '🟡': 'yellow',
  '🟢': 'green',
  '🔵': 'blue',
  '🟣': 'purple',
};

const ColorChoice = ({ changeColor }) => {
  return (
    <div className ="color-Button">
      {colors.map((color) => {
        return <button key={color} onClick={() => {
          changeColor(COLOR_MAP[color]);
        }}>{color}</button>;
      })}
    </div>
  );
};

ColorChoice.propTypes = {
  changeColor: PropTypes.func.isRequired,
};

export default ColorChoice;
import Radium    from 'radium';
import React     from 'react';
import PropTypes from 'prop-types';
import color     from 'color';

const styles = {
  base: {
    color: '#fff',
    ':hover': {
      background: color('#0074d9')
                  .lighten(0.2)
                  .hexString()
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf([
      'primary',
      'warning'
    ]).isRequired
  };

  render({ kind, children }) {
    return (
      <button
        style={[
          styles.base,
          styles[kind]
        ]}>
        {children}
      </button>
    );
  }
}

export default Radium(Button);
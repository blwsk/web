import React from 'react';
import { DISPLAY_FLEX, FLEX_COLUMN, SLATE } from '../../constants/styles.js';

const withStylesHoc = WrappedComponent => {
  const styles = (
    <style global jsx>{`
      * {
        font-family: 'system-ui', sans-serif;
        font-weight: 400;
        font-size: 22px;
        margin: 0;
        padding: 0;
        color: ${SLATE};
      }

      a {
        text-decoration: none;
      }

      .grid {
        ${DISPLAY_FLEX} margin: 20px;
      }

      .grid-25 {
        width: 25%;
      }

      .grid-75 {
        width: 75%;
      }

      .width-1000 {
        max-width: 1000px;
      }

      .flex-column {
        ${DISPLAY_FLEX} ${FLEX_COLUMN};
      }
    `}</style>
  );

  class WithStyles extends React.Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          {styles}
        </div>
      );
    }
  }

  WithStyles.displayName = `WithStyles(${WrappedComponent.name})`;

  return WithStyles;
};

export default withStylesHoc;

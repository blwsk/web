import React from 'react';
import { routesById } from '../../constants/routes';

function getScreen(pathname) {
  const screenNotFound = '***screen not found***';

  if (!pathname) {
    return screenNotFound;
  }

  const { screen } = routesById[pathname];

  return screen || screenNotFound;
}

const withTrackingHoc = WrappedComponent => {
  class WithTracking extends React.Component {
    constructor(props) {
      super(props);

      this.trackView = this.trackView.bind(this);
      this.trackInteraction = this.trackInteraction.bind(this);

      this.state = {
        screen: getScreen(props.url.pathname),
      };
    }

    componentDidMount() {
      import('mixpanel-browser').then(mixpanel => {
        mixpanel.init('51f028471971e92b7170bda686a48763');
      });
    }

    trackView(screen, ...args) {
      this.setState({ screen });

      import('mixpanel-browser').then(mixpanel =>
        mixpanel.track_pageview(screen, ...args)
      );
    }

    trackInteraction(event, properties = {}) {
      const { screen } = this.state;

      const mergedProperties = {
        screen,
        ...properties,
      };

      import('mixpanel-browser').then(mixpanel =>
        mixpanel.track(event, mergedProperties)
      );
    }

    render() {
      return (
        <WrappedComponent
          trackView={this.trackView}
          trackInteraction={this.trackInteraction}
          {...this.props}
        />
      );
    }
  }

  WithTracking.displayName = `WithTracking(${WrappedComponent.name})`;

  return WithTracking;
};

export default withTrackingHoc;

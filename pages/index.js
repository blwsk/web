import React from 'react';
import wrapPage from '../components/hoc/wrapPage';
import Grid from '../components/Grid';
import makeEmojiButtons from '../utils/makeEmojiButtons';

const text = trackInteraction => makeEmojiButtons(trackInteraction)`
  My name is ${'🌞 Kevin Bielawski'}. I work at ${'💼 HubSpot'} and live in
  ${'🏡 Boston'}. When I'm not working, I ${'🚴 ride bikes'} and ${'🛶 row boats'}.
`;

class Index extends React.Component {
  componentDidMount() {
    this.props.trackView('index');
  }

  render() {
    return (
      <Grid>
        <div className="grid-25">index</div>
        <div className="grid-75">
          {text(this.props.trackInteraction)}
        </div>
      </Grid>
    );
  }
}

export default wrapPage(Index);

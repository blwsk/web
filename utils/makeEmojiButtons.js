import React from 'react';
import { events } from '../constants/tracking';

const makeEmojiButtons = (trackInteraction = () => {}) => (
  strings,
  ...emojiStrings
) => {
  const stringElements = strings.map(str => {
    return (
      <span key={str}>
        {str}
      </span>
    );
  });

  const emojiElements = emojiStrings.map(str => {
    return (
      <button
        key={str}
        className="with-emoji"
        onClick={trackInteraction.bind(null, events.CLICK_EMOJI_BUTTON, {
          str,
        })}
      >
        {str}
      </button>
    );
  });

  return (
    <p className="paragraph">
      {stringElements.reduce((accum, el, i) => {
        return [...accum, el, emojiElements[i]];
      }, [])}
    </p>
  );
};

export default makeEmojiButtons;

function makeEvents(items) {
  return items.reduce((aggregate, item) => {
    return {
      [item]: item.toLowerCase().split('_').join(' '),
      ...aggregate,
    };
  }, {});
}

export const events = makeEvents(['CLICK_EMOJI_BUTTON']);

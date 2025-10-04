function Star({
  star,
  hover,
  rating,
  color,
  ratingClick,
  hoverEnter,
  hoverLeave,
}) {
  return (
    <span
      onClick={() => (rating === star ? ratingClick(0) : ratingClick(star))} //personal implementation to "unclick" stars//
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={() => hoverLeave(null)}
      className='star'
      style={{ color: star <= (hover || rating) ? color : '' }}
    >
      {'\u2605'}
    </span>
  );
}

export default Star;

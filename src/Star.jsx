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
      onClick={() => ratingClick(star)}
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

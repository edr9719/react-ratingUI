const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverLeave,
  hoverEnter,
}) => {
  return (
    <span
      className='star'
      style={{ color: star <= (hover || rating) ? color : '#ccc' }}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={hoverLeave}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;

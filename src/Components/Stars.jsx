import "./styles/stars.scss";

const StarSky = () => {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: Math.random() * window.innerHeight, 
    left: Math.random() * window.innerWidth,
    delay: Math.random() * -6000,
  }));

  return (
    <div className="sky">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            animationDelay: `${star.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default StarSky;

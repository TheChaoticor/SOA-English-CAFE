function Winter() {
  const flakes = Array.from({ length: 30 });

  return (
    <div className="seasonal-layer winter">
      {flakes.map((_, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${12 + Math.random() * 10}s`,
            opacity: 0.25 + Math.random() * 0.25,
            transform: `scale(${0.6 + Math.random() * 0.6})`
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

export default Winter;

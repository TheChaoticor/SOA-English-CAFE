function Autumn() {
  const leaves = Array.from({ length: 22 });

  const leafTypes = ["🍂", "🍁"];

  return (
    <div className="seasonal-layer autumn">
      {leaves.map((_, i) => {
        const leaf =
          leafTypes[Math.floor(Math.random() * leafTypes.length)];

        return (
          <span
            key={i}
            className="leaf"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
              opacity: 0.25 + Math.random() * 0.35,
              transform: `scale(${0.6 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`
            }}
          >
            {leaf}
          </span>
        );
      })}
    </div>
  );
}

export default Autumn;
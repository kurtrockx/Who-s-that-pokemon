function PokemonStats({ stats }) {
  return (
    <div>
      {stats.map((stat) => (
        <p className="text-sm text-white max-sm:text-xs">
          {stat.stat.name}: <span>{stat.base_stat}</span>
        </p>
      ))}
    </div>
  );
}

export default PokemonStats;

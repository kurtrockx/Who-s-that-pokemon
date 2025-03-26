function PokemonStats({ stats }) {
  return (
    <div>
      {stats.map((stat) => (
        <p className="text-sm text-white">
          {stat.stat.name}: <span>{stat.base_stat}</span>
        </p>
      ))}
    </div>
  );
}

export default PokemonStats;

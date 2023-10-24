function List({ activities, isGoodWeather, filteredActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is nice! Go disco:"
          : "Bad weather outside,stay at home,drink wiskey"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}

export default List;

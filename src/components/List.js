function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is nice! Go disco:"
          : "Bad weather outside,stay at home,drink wiskey"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button
              className="delete"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;

import { uid } from "uid";
import React, { useState, useEffect } from "react";
//Components
import useLocalStorage from "use-local-storage";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [weather, setWeather] = useState();
  const initialActivities = [];
  const [activities, setActivities] = useLocalStorage(
    "activities",
    initialActivities
  );
  //------------------------------------

  //--------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      async function startingFetching() {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        const weatherData = await response.json();
        setWeather(weatherData.isGoodWeather);
      }
      startingFetching();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleAddActivity(activity) {
    // console.log(activity);
    setActivities([...activities, { ...activity, id: uid() }]);
  }

  function handleOnDeleteActivity(activityId) {
    const newActivities = activities.filter(
      (activity) => activity.id !== activityId
    );
    setActivities(newActivities);
  }

  const filteredActivites = () => {
    activities.filter((activity) => activity.isGoodWeather === weather);
  };
  console.log(activities);
  return (
    <>
      <List
        isGoodWeather={weather}
        activities={activities}
        filteredActivity={filteredActivites}
      />
      <h1>Weather and Activities:</h1>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;

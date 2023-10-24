import { uid } from "uid";
import useLocalStorage from "use-local-storage";
import Form from "./components/Form";
import React from "react";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const initialActivities = [];
  const [activities, setActivities] = useLocalStorage(
    "activities",
    initialActivities
  );
  //------------------------------------

  //--------------------------------------

  function handleAddActivity(data) {
    // console.log(data);
    setActivities([{ ...activities, ...data, id: uid() }]);
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
      <h1>Add new activity:</h1>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Hello</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="form__input"
        name="nameActivity"
      />

      <label htmlFor="isForGoodWeather">Is it for good weather?</label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        className="form__checkbox"
        name="isGoodWeather"
      />

      <button type="submit">Submit</button>
    </div>
  );
}

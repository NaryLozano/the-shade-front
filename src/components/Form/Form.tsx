import React, { useState } from "react";
import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const formState = {
  name: "mama ru",
  age: 35,
  season: 1,
  rank: "5th",
  hometown: "Barcelona",
  quote: "no t",
  pictureUrl: "url",
};
const Form = (): React.ReactElement => {
  const [formData, setFormdata] = useState(formState);
  const { buttonA11Y, buttonClassName, content } = buttonData;

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata({
      ...formData,
      [event.target.id]: event.target.value.toLowerCase(),
    });
  };
  return (
    <FormStyled className="formulary">
      <label htmlFor="name" className="formulary">
        name
        <input
          className="formulary__input"
          type="text"
          id="name"
          placeholder="mama ru"
          value={formData.name}
          onChange={onChangeForm}
        />
      </label>
      <label htmlFor="age" className="formulary">
        age
        <input
          type="text"
          className="formulary__input"
          id="age"
          placeholder="35"
          value={formData.age}
          onChange={onChangeForm}
        />
      </label>
      <label htmlFor="season" className="formulary">
        season
        <input
          className="formulary__input"
          type="text"
          id="season"
          placeholder="1"
          value={formData.season}
          onChange={onChangeForm}
        />
      </label>
      <label htmlFor="rank" className="formulary">
        rank
        <input
          className="formulary__input"
          type="text"
          id="rank"
          placeholder="5th"
          value={formData.rank}
          onChange={onChangeForm}
        />
      </label>
      <label htmlFor="hometown" className="formulary">
        hometown
        <input
          className="formulary__input"
          type="text"
          id="hometown"
          placeholder="barcelona, cat"
          value={formData.hometown}
          onChange={onChangeForm}
        />
      </label>
      <label htmlFor="quote" className="formulary">
        memorable quote
        <textarea
          className="formulary__area"
          id="quote"
          placeholder="'no t, no shade, no pink lemonade'"
          value={formData.quote}
          onChange={onChangeForm}
        />
      </label>
      <label htmlFor="picture" className="formulary">
        picture url
        <textarea
          className="formulary__area"
          id="picture"
          placeholder="https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e3/Ru_in_drag.jpg/revision/latest/scale-to-width-down/1000?cb=20190725062231"
          value={formData.pictureUrl}
          onChange={onChangeForm}
        />
      </label>
      <Button
        buttonClassName={buttonClassName.primary.dark}
        buttonA11Y={buttonA11Y.add}
        text={content?.add}
        actionOnClick={() => ({})}
      />
    </FormStyled>
  );
};

export default Form;

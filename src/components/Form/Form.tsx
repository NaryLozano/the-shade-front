import React, { useState } from "react";
import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const formState = {
  name: "",
  age: "",
  season: "",
  rank: "",
  hometown: "",
  quote: "",
  pictureUrl: "",
};

interface FormProps {
  submitForm: () => void;
}
const Form = ({ submitForm }: FormProps): React.ReactElement => {
  const [formData, setFormdata] = useState(formState);
  const { buttonA11Y, buttonClassName, content } = buttonData;

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <FormStyled className="formulary" onSubmit={submitForm}>
      <label htmlFor="name" className="formulary">
        name
        <input
          className="formulary__input"
          type="text"
          id="name"
          placeholder="mama ru"
          value={formData.name}
          onChange={onChangeForm}
          required={true}
        />
      </label>
      <label htmlFor="age" className="formulary">
        age
        <input
          type="number"
          className="formulary__input"
          id="age"
          placeholder="35"
          value={formData.age}
          onChange={onChangeForm}
          required={true}
        />
      </label>
      <label htmlFor="season" className="formulary">
        season
        <input
          className="formulary__input"
          type="number"
          id="season"
          placeholder="1"
          value={formData.season}
          onChange={onChangeForm}
          required={true}
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
          required={true}
        />
      </label>
      <label htmlFor="hometown" className="formulary">
        hometown
        <input
          className="formulary__input"
          type="text"
          id="hometown"
          placeholder="barcelona,cat"
          value={formData.hometown}
          onChange={onChangeForm}
          required={true}
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
          required={true}
        />
      </label>
      <label htmlFor="picture" className="formulary">
        picture url
        <textarea
          className="formulary__area"
          id="pictureUrl"
          value={formData.pictureUrl}
          onChange={onChangeForm}
          required={true}
        />
      </label>
      <Button
        buttonClassName={buttonClassName.primary.dark}
        buttonA11Y={buttonA11Y.add}
        text={content?.add}
        actionOnClick={submitForm}
      />
    </FormStyled>
  );
};

export default Form;

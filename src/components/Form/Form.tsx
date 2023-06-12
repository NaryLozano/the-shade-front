import React, { useState } from "react";
import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { QueenStructure } from "../../store/queens/types";

interface FormProps {
  onSubmit: (queenData: QueenStructure) => void;
}
const Form = ({ onSubmit }: FormProps): React.ReactElement => {
  const formState = {
    name: "",
    age: 0,
    season: 0,
    rank: 0,
    hometown: "",
    quote: "",
    image: "",
  };
  const [queenData, setQueenData] = useState(formState);
  const { buttonA11Y, buttonClassName, content } = buttonData;

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQueenData({
      ...queenData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(queenData);
    setQueenData(formState);
  };

  return (
    <FormStyled className="formulary" onSubmit={handleOnSubmit}>
      <label htmlFor="name" className="formulary">
        name
        <input
          className="formulary__input"
          type="text"
          id="name"
          placeholder="mama ru"
          value={queenData.name}
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
          value={queenData.age}
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
          value={queenData.season}
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
          value={queenData.rank}
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
          value={queenData.hometown}
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
          value={queenData.quote}
          onChange={onChangeForm}
          required={true}
        />
      </label>
      <label htmlFor="image" className="formulary">
        picture url
        <input
          className="formulary__area"
          id="image"
          value={queenData.image}
          onChange={onChangeForm}
          required={true}
        />
      </label>
      <Button
        buttonClassName={buttonClassName.primary.dark}
        buttonA11Y={buttonA11Y.add}
        text={content?.add}
      />
    </FormStyled>
  );
};

export default Form;

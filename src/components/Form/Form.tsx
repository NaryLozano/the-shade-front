import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  const { buttonA11Y, buttonClassName, content } = buttonData;
  return (
    <FormStyled>
      <label htmlFor="name" className="formulary">
        name
        <input
          className="formulary__input"
          type="text"
          id="name"
          placeholder="mama ru"
        />
      </label>
      <label htmlFor="age" className="formulary">
        age
        <input
          type="text"
          className="formulary__input"
          id="age"
          placeholder="35"
        />
      </label>
      <label htmlFor="season" className="formulary">
        season
        <input
          className="formulary__input"
          type="text"
          id="season"
          placeholder="1"
        />
      </label>
      <label htmlFor="rank" className="formulary">
        rank
        <input
          className="formulary__input"
          type="text"
          id="rank"
          placeholder="5th"
        />
      </label>
      <label htmlFor="homwtown" className="formulary">
        hometown
        <input
          className="formulary__input"
          type="text"
          id="hometown"
          placeholder="barcelona, cat"
        />
      </label>
      <label htmlFor="quote" className="formulary">
        memorable quote
        <textarea
          className="formulary__area"
          id="quote"
          placeholder="'no t, no shade, no pink lemonade'"
        />
      </label>
      <label htmlFor="picture" className="formulary">
        picture url
        <textarea
          className="formulary__area"
          id="picture"
          placeholder="https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e3/Ru_in_drag.jpg/revision/latest/scale-to-width-down/1000?cb=20190725062231"
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

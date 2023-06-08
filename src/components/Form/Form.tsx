import buttonData from "../../data/button/buttonData";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  const { buttonA11Y, buttonClassName, content } = buttonData;
  return (
    <FormStyled>
      <label htmlFor="name">
        name
        <input type="text" id="name" placeholder="mama ru" />
      </label>
      <label htmlFor="age">
        age
        <input type="text" id="age" placeholder="35" />
      </label>
      season
      <label htmlFor="season">
        <input type="text" id="season" placeholder="1" />
      </label>
      rank
      <label htmlFor="rank">
        <input type="text" id="rank" placeholder="5th" />
      </label>
      hometown
      <label htmlFor="homwtown">
        <input type="text" id="hometown" placeholder="barcelona, cat" />
      </label>
      memorable quote
      <label htmlFor="quote">
        <input
          type="text"
          id="quote"
          placeholder="no t, no shade, no pink lemonade"
        />
      </label>
      picture url
      <label htmlFor="picture">
        <input
          type="text"
          id="picture"
          placeholder="https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e3/Ru_in_drag.jpg/revision/latest/scale-to-width-down/1000?cb=20190725062231"
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

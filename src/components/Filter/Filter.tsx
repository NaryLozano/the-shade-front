import FilterStyled from "./FilterStyled";

interface FilterProps {
  setFilterValue: (filterValue: string) => void;
  setSkip: (skipValue: number) => void;
}
const Filter = ({
  setFilterValue,
  setSkip,
}: FilterProps): React.ReactElement => {
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
    setSkip(0);
  };

  return (
    <div className="filter-container">
      <FilterStyled
        name="season"
        id="season"
        onChange={onChangeSelect}
        aria-label="season"
      >
        <option value="">season</option>
        <option value="1">season 1</option>
        <option value="2">season 2</option>
        <option value="3">season 3</option>
        <option value="4">season 4</option>
        <option value="5">season 5</option>
        <option value="6">season 6</option>
        <option value="7">season 7</option>
        <option value="8">season 8</option>
        <option value="9">season 9</option>
        <option value="10">season 10</option>
        <option value="11">season 11</option>
        <option value="12">season 12</option>
        <option value="13">season 13</option>
        <option value="14">season 14</option>
        <option value="15">season 15</option>
        <option value="16">season 16</option>
      </FilterStyled>
    </div>
  );
};
export default Filter;

import Button from "../_share/Button/Button";

const CategoriesTransactions = ({
  categories,
  handleGoBack,
  handleSetCategory,
}) => {
  return (
    <>
      <Button title={"GoBAck"} cbOnClick={handleGoBack} />
      <h1>Категории</h1>
      <ul>
        {categories.map((el) => (
          <li key={el.name}>
            <p onClick={() => handleSetCategory(el.name)}>{el.name}</p>
            <select name="cat-options">
              <option value="">...</option>
              <option value="edit">edit</option>
              <option value="delete">delete</option>
            </select>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder="Новая категория..." />
        <Button title="Add" type="submit" />
      </form>
    </>
  );
};

export default CategoriesTransactions;

import Button from "../_share/Button/Button";

const CategoriesTransactions = ({
  categories,
  handleToggleCatList,
  setCategory,
}) => {
  return (
    <>
      <Button title={"GoBAck"} cbOnClick={handleToggleCatList} />
      <h1>Категории</h1>
      <ul>
        {categories.map((el) => (
          <li>
            <p onClick={() => setCategory(el.name)}>{el.name}</p>
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

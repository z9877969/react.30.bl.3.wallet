import { useParams } from "react-router-dom";
import { setToLS, getFromLS } from "../utils/apiLocalStorage";

const KEY = "lastCats";

const withLastCategories = (WrappedComponent) => (props) => {
  const { transType } = useParams();
  const lastCategories = getFromLS(KEY);

  const setLastCategory = (category) =>
    lastCategories
      ? setToLS(KEY, {
          ...lastCategories,
          [transType]: category.name,
        })
      : setToLS(KEY, { [transType]: category.name });

  return (
    <WrappedComponent
      {...props}
      lastCategories={lastCategories}
      setLastCategory={setLastCategory}
    />
  );
};

export default withLastCategories;

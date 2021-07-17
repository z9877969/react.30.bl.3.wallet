import css from "./LabelInput.module.css";

const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  cbOnChange,
  cbOnClick,
  placeholder = "",
}) => {
  return (
    <label className={css.label}>
      <p>{title}</p>
      {cbOnChange ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={cbOnChange}
          placeholder={placeholder}
        />
      ) : (
        <input type={type} name={name} value={value} onClick={cbOnClick} />
      )}
    </label>
  );
};

export default LabelInput;

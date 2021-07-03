import css from "./LabelInput.module.css";

const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  cbOnChange,
  placeholder = "",
}) => {
  return (
    <label className={css.label}>
      <p>{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={cbOnChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default LabelInput;

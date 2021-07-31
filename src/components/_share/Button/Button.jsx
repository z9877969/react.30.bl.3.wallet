const spriteLink = "/path/to/sprite"

const Button = ({ title, type = "button", iconId, cbOnClick,  }) => {
  return (
    <button type={type} onClick={cbOnClick}>
      {title ? (
        title
      ) : (
        <svg>
          <use href={spriteLink + "#" + iconId}></use>
        </svg>
      )}
    </button>
  );
};

export default Button;

import './Input.css';

function Input({
  value,
  onChange,
  type,
  goal,
  textLabel,
  error
}) {
  return (
    <div className="field">
      <label htmlFor={goal}>{textLabel}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={goal}
      />
      {error && (
        <div id={`${goal}-error`} className="error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default Input;
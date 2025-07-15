import { useState } from 'react'
import Input from './Input'
import './Form.css'

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const errorMessages = {
  email: 'Введите корректный email',
  password: 'Пароль должен быть не менее 6 символов',
};

function Form() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const validators = {
    email: (value) => !regex.test(value),
    password: (value) => value.length < 6,
  };

  const handleChange = (field, value, validator, errorText) => {
    setValues(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: validator(value) ? errorText : null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: validators.email(values.email) ? errorMessages.email : null,
      password: validators.password(values.password) ? errorMessages.password : null,
    };

    setErrors(newErrors);

    const isFormValid = !newErrors.email && !newErrors.password;
    if (isFormValid) {
      console.log(values);
    } else {
      alert("Форма невалидна, исправьте ошибки");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value, validators.email, errorMessages.email)}
        type="text"
        goal="email"
        textLabel="Ваш email"
        error={errors.email}
      />
      <Input
        value={values.password}
        onChange={(e) => handleChange('password', e.target.value, validators.password, errorMessages.password)}
        type="password"
        goal="password"
        textLabel="Пароль"
        error={errors.password}
      />
      <button className="form-submit" type="submit">Отправить</button>
    </form>
  );
}

export default Form

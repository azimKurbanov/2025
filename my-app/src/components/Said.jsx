import React, { useState } from 'react';

const InputForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted form:', form);
    // Здесь можно отправить данные на сервер
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start shadow-lg">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Хотите бесплатную консультацию?</h2>
        <p className="text-lg font-semibold">Оставляйте заявку</p>
        <p className="mt-4 text-sm text-white/90">
          Оставляйте заявку и наши менеджеры свяжутся с вами в ближайшее время
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
        <div>
          <label htmlFor="name" className="text-sm">Ваше имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full text-black"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm">Ваш телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ваш телефон"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">Ваш e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ваш e-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full text-black"
          />
        </div>

        <p className="text-xs text-white/80">
          Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности
        </p>

        <button
          type="submit"
          className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default InputForm;
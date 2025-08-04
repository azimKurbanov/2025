import React from 'react';
import Settings from './assets/Settings.png';
import Auto from './assets/Auto.png';
import Analysis from './assets/Analysis.png';
import Forecast from './assets/Forecast.svg';
import Supply from './assets/Supply.png';
import Asort from './assets/Asort.svg';
import Buy from './assets/Buy.png';

const Card = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10 space-y-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Settings} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Управление запасами</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полке (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщика.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Auto} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Автозаказ товаров</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с различными видами спроса для разных видов товаров. Автоматически подбирается метод расчета и позволяет внести корректировки в выполненные расчеты.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Analysis} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Анализ магазина</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек – это показатели, которые анализирует сервис 1С-Товары, а также предлагает инструменты для управления ценой и торговой наценкой.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Forecast} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Прогнозирование спроса</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
          Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Supply} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Управление поставками</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
           Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Asort} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Управление ассортиментом</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
           Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остатков, периоды дефицита, размер оптимального остатка.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={Buy} alt="icon" className="w-10 h-10" />
            <h2 className="text-lg font-semibold">Управление продажами</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
           Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.
          </p>
          <button className="mt-auto w-fit px-4 py-2 text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

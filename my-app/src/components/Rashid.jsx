import React from 'react'

const App = () => {
  return (
    <div className=' bg-[#F7F8F8] h-[100vh]'>
      <div className=' px-[30px] py-[40px]'>
        <h1 className=' text-2xl text-[#3D4641] font-[600]'>Ответы на вопросы</h1>
      </div>
      <div>
        {['С чего начать работу с 1С-Товары?'].map(f => (
          <div className=' w-full flex justify-center'>
             <details key={f} className=' shadow   mb-4 px-[40px] w-[1470px] bg-white py-[15px] rounded-[30px] border-[1px] border-white'>
                          <summary className=' cursor-pointer text-[#3D4641] relative marker:text-[#616764]'>{f}</summary>
              <div className=' ml-2 text-sm mt-[20px] text-[#6F7973]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</div>
              <ul className=' list-disc'>
                <p className='ml-2 text-sm mt-[20px] text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
              </ul>
                      </details>
                     </div>
        ))}
        {['Как подключить 1С-Ритейл Чекер* и 1С-Товары?'].map(f => (
          <div className=' w-full flex justify-center'>
            <details key={f} className=' shadow   mb-4 px-[40px] transition-[0.5s] w-[1470px] bg-white py-[15px] rounded-[30px] border-[1px] border-white'>
                          <summary className=' text-[#3D4641] relative marker:text-[#616764] cursor-pointer'>{f}</summary>
              <div className=' ml-2 text-sm mt-[20px] text-[#6F7973]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</div>
              <ul className=' list-disc'>
                <p className='ml-2 text-sm mt-[20px] text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
              </ul>
                      </details>
                      </div>
        ))}
        {['Средний чек, о чем нам может рассказать?'].map(f => (
          <div className=' w-full flex justify-center'>
            <details key={f} className=' shadow    mb-4 px-[40px] transition-[0.5s] w-[1470px] bg-white py-[15px] rounded-[30px] border-[1px] border-white'>
                          <summary className=' text-[#3D4641] relative marker:text-[#616764] cursor-pointer'>{f}</summary>
              <div className=' ml-2 text-sm mt-[20px] text-[#6F7973]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</div>
              <ul className=' list-disc'>
                <p className='ml-2 text-sm mt-[20px] text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
              </ul>
                      </details>
                      </div>
        ))}
        {['Сценарии автозаказа сервиса 1С-Товары'].map(f => (
          <div className=' w-full flex justify-center'>
            <details key={f} className=' shadow    mb-4 px-[40px] transition-[0.5s] w-[1470px] bg-white py-[15px] rounded-[30px] border-[1px] border-white'>
                          <summary className=' text-[#3D4641] relative marker:text-[#616764] cursor-pointer'>{f}</summary>
              <div className=' ml-2 text-sm mt-[20px] text-[#6F7973]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</div>
              <ul className=' list-disc'>
                <p className='ml-2 text-sm mt-[20px] text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
              </ul>
                      </details>
                      </div>
        ))}
        {['Как подключить 1С-Ритейл Чекер* и 1С-Товары?'].map(f => (
          <div className=' w-full flex justify-center'>
            <details key={f} className=' shadow    mb-4 px-[40px] transition-[0.5s] w-[1470px] bg-white py-[15px] rounded-[30px] border-[1px] border-white'>
                          <summary className=' text-[#3D4641] relative marker:text-[#616764] cursor-pointer'>{f}</summary>
              <div className=' ml-2 text-sm mt-[20px] text-[#6F7973]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</div>
              <ul className=' list-disc'>
                <p className='ml-2 text-sm mt-[20px] text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
              </ul>
                      </details>
                      </div>
        ))}
        {['Методы и формулы расчета торговой наценки'].map(f => (
          <div className=' w-full flex justify-center'>
            <details key={f} className=' mb-4 px-[40px] transition-[0.5s] w-[1470px] bg-white py-[15px] rounded-[30px] border-[1px] border-white'>
                          <summary className=' text-[#3D4641] relative marker:text-[#616764] cursor-pointer'>{f}</summary>
              <div className=' ml-2 text-sm mt-[20px] text-[#6F7973]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</div>
              <ul className=' list-disc'>
                <p className='ml-2 text-sm mt-[20px] text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                <li className='ml-6 text-sm mt-[20px] text-[#6F7973]'>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
              </ul>
                      </details>
                      </div>
                  ))}
      </div>
    </div>
  )
}

export default App
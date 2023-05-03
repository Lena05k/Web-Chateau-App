import React, { useEffect } from 'react';
import '../../input.css';
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';
import FoutrhBlock from './FoutrhBlock';
import FifthPage from './FifthPage';
import SixthBlock from './SixthBlock';

const App = () => {
  useEffect(() => {
    document.body.classList.add('w-full', 'h-full', 'min-h-screen', 'pt-10', 'bg-black-850', 'text-white', 'font-gilroy');
  });
  return (
    <div>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FoutrhBlock />
      <FifthPage />
      <SixthBlock />
    </div>
  );
};

export default App;

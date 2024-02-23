import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');
  const [textColor, setTextColor] = useState('white');

  const handleButtonClick = (buttonColor) => {
    setColor(buttonColor);
    // Conditionally set text color to white only for the "Black" button
    setTextColor(buttonColor === 'black' ? 'white' : 'black');
  };

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <h1 
        className='flex justify-center items-center h-screen text-9xl font-bold text-center'
        style={{ color: textColor, borderBottom: `4px solid ${textColor}` }}
      >
        React Color with Vite
      </h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => handleButtonClick('red')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => handleButtonClick('green')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => handleButtonClick('pink')}
            className="outline-none px-3 py-2 rounded-full shadow-lg text-black font-bold"
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
          <button
            onClick={() => handleButtonClick('yellow')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleButtonClick('orange')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold"
            style={{ backgroundColor: 'orange' }}
          >
            Orange
          </button>
          <button
            onClick={() => handleButtonClick('white')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold"
            style={{ backgroundColor: 'gray' }}
          >
            White
          </button>
          <button
            onClick={() => handleButtonClick('black')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold'
            style={{ backgroundColor: 'black' }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

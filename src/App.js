import { useState, useEffect } from 'react';
import { Article } from './Article';
import data from './data';

function App() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>

      <section className='articles'>
        {data.map((item) => {
          return <Article id={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;

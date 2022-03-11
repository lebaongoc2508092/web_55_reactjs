import { useState, useEffect } from 'react';
function App() {
  const [count,setCount] = useState(0);
  /** 
   * 1st args : function that will run after every changes of dependencies
   * 2nd args : array of dependencies
   */
  useEffect(() => {
    document.title = `You have click ${count} times`
  }, [count])

  return (
    <div>
      <button 
      onClick={() => {
        setCount(count + 1)
      }}
      >
        Increase
      </button>
      {count}
    </div>
  );
}

export default App;

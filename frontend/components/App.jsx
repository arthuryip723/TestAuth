import React from 'react';

const App = ({children}) => (
  <div>
    <header>
      <h1>
        This is Header!
      </h1>
    </header>
    {children}
  </div>
);

export default App;
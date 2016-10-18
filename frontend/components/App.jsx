import React from 'react';

// const App = ({children}) => (
//   <div>
//     <header>
//       <h1>
//         This is Header!
//       </h1>
//     </header>
//     {children}
//   </div>
// );

const App = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1>
            This is Header!
          </h1>
        </header>
        {this.props.children}
      </div>
    );
  }
});

export default App;
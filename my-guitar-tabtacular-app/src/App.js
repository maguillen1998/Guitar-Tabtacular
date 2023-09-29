// AnotherFile.js
import React from 'react';
import MyComponent from './components/testComponent.js'; // Relative path to MyComponent.js

class AnotherFile extends React.Component {
  render() {
    return (
      <div>
        <h1>This is another file</h1>
        <MyComponent /> {/* Render the imported component */}
      </div>
    );
  }
}

export default AnotherFile;
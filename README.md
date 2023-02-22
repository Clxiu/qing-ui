# Qing UI
Qing UI is a React-based frontend component library aimed at providing high-quality, easy-to-use, and beautiful UI components.

## Features
Simple and easy-to-use API
Highly customizable styles
Responsive design
Supports theme customization
## Installation
Install via npm:
```npm install qing-ui```
## Usage
Global Import
Add the following code in your index.js file:
```
import React from 'react'
import ReactDOM from 'react-dom'
import QingUI from 'qing-ui'
import 'qing-ui/dist/qing-ui.css'

ReactDOM.render(
  <QingUI>
    <App />
  </QingUI>,
  document.getElementById('root')
)
```
Now, you can use Qing UI components in your React application.

## Local Import
In your component file, import only the component(s) you need:
```
import { Button } from 'qing-ui'

function MyComponent() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  )
}
```
## Documentation
For more information on components and API usage, please refer to the official documentation.

## Contributing
If you find any issues or have any good ideas and suggestions, please let us know through GitHub issues or pull requests. We are happy to hear your feedback and suggestions.

## License
MIT
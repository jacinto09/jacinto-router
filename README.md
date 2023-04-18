
# Basic Router for React

Basic router for your React applications

## Installation

npm i jacinto-router


## Getting Started
1. Import the Router component from the jacinto-router package:

```javascript
import { Router } from 'jacinto-router'
```
2. Wrap your application with the Router component
```javascript
import { Router } from 'jacinto-router'
import Home from './Home'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
```
3. Use the Link component to navigate through your application

```javascript
import { Link } from 'jacinto-router';

<Link to='/'>Go to Home</Link>
```
Link also has target prop so you can change it when u need it
```javascript
import { Link } from 'jacinto-router';

<Link to='/' target='_blank'>Go to Home</Link>
```
# And thats it you can use it!
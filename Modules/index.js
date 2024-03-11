// CommonJS Syntax
// commonjsModuleA.js
const commonjsDependency = require('./commonjsDependency');

// ...

// Exporting
module.exports = { /* exported functions or variables from commonjsModuleA */ };

// commonjsModuleB.js
const commonjsData = require('./commonjsData');

// ...

// Exporting
module.exports = { /* exported functions or variables from commonjsModuleB */ };


// ES6 Module Syntax
// es6ModuleA.js
import es6Dependency from './es6Dependency';

// ...

// Exporting
export { /* exported functions or variables from es6ModuleA */ };

// es6ModuleB.js
import es6Data from './es6Data';

// ...

// Exporting
export { /* exported functions or variables from es6ModuleB */ };


// HTML File for Browser Environment
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Module Example</title>
  <!-- For ES6 Modules -->
  <script type="module" src="es6Main.js"></script>
  <!-- For CommonJS Modules -->
  <script defer src="commonjsMain.js"></script>
</head>
<body>
  <!-- Your HTML content here -->
</body>
</html>


// JavaScript File for Browser Environment (es6Main.js)
// es6Main.js

import moduleA from './es6ModuleA';
import moduleB from './es6ModuleB';

// Your application logic using moduleA and moduleB


// JavaScript File for Browser Environment (commonjsMain.js)
// commonjsMain.js
const moduleA = require('./commonjsModuleA');
const moduleB = require('./commonjsModuleB');

// Your application logic using moduleA and moduleB

// questions array from which random questions are selected
exports.QuizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "Highly Textual Markup Language",
      "Hyper Transfer Markup Language",
    ],
    answer: 1,
  },
  {
    question: "Which HTML element is used for creating an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    answer: 1,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Custom Style Sheets",
      "Computer Style Sheets",
    ],
    answer: 2,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "color", "text-style", "font-color"],
    answer: 2,
  },
  {
    question: "Which of the following is NOT a valid JavaScript variable name?",
    options: ["myVariable", "123variable", "$variable", "_variable"],
    answer: 1,
  },
  {
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    options: [
      "To add a new element to the web page",
      "To change the background color of an element",
      "To attach an event handler function to an element",
      "To create a new event in JavaScript",
    ],
    answer: 3,
  },
  {
    question: "How do you comment out multiple lines in CSS?",
    options: [
      "/* This is a comment */",
      "// This is a comment //",
      "<!-- This is a comment -->",
      "// This is a comment",
    ],
    answer: 1,
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 2,
  },
  {
    question:
      "What is the purpose of the 'console.log()' function in JavaScript?",
    options: [
      "To log into the console of a computer",
      "To display text on the web page",
      "To print text on the printer",
      "To log messages to the browser's console for debugging",
    ],
    answer: 4,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "border", "spacing"],
    answer: 1,
  },

  {
    question: "What is React?",
    options: [
      "A JavaScript framework for building web applications",
      "A programming language",
      "A code editor",
      "A database management system",
    ],
    answer: 1,
  },
  {
    question: "What is the main purpose of JSX in React?",
    options: [
      "To define JavaScript functions",
      "To style web pages",
      "To create reusable components",
      "To define HTML elements in JavaScript",
    ],
    answer: 4,
  },
  {
    question: "In React, what is a component?",
    options: [
      "A built-in JavaScript function",
      "A separate JavaScript file",
      "A reusable UI element",
      "A CSS stylesheet",
    ],
    answer: 3,
  },
  {
    question: "What does React use to manage the state of a component?",
    options: ["Props", "State", "Methods", "Variables"],
    answer: 2,
  },
  {
    question:
      "Which React lifecycle method is called after a component is rendered?",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "componentDidUpdate",
      "render",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of the 'useState' hook in React?",
    options: [
      "To define CSS styles for components",
      "To manage component state in functional components",
      "To create a new React component",
      "To define props for components",
    ],
    answer: 2,
  },
  {
    question:
      "In React, how do you pass data from a parent component to a child component?",
    options: [
      "Using the 'render' method",
      "Using the 'setState' method",
      "Using the 'props' system",
      "Using the 'useEffect' hook",
    ],
    answer: 3,
  },
  {
    question:
      "What is the purpose of the 'key' prop in React when rendering lists?",
    options: [
      "It sets the background color of list items",
      "It helps React identify which items have changed, added, or removed",
      "It defines the order of list items",
      "It applies a CSS class to list items",
    ],
    answer: 2,
  },
  {
    question:
      "Which tool can you use to create a new React application quickly?",
    options: [
      "Visual Studio Code",
      "Node.js",
      "React Native",
      "Create React App",
    ],
    answer: 4,
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      "To style React components",
      "To manage the state of React components",
      "To create animations in React",
      "To handle navigation and routing in React applications",
    ],
    answer: 4,
  },

  {
    question:
      "What does JavaScript primarily allow you to do in web development?",
    options: [
      "Style web pages",
      "Animate elements",
      "Create interactive web applications",
      "Manage databases",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is not a data type in JavaScript?",
    options: ["String", "Number", "Boolean", "Float"],
    answer: 4,
  },
  {
    question: "What is the purpose of the 'var' keyword in JavaScript?",
    options: [
      "To declare a function",
      "To declare a variable with block scope",
      "To declare a variable with function scope",
      "To declare a global variable",
    ],
    answer: 3,
  },
  {
    question: "What is the result of '3' + 2 in JavaScript?",
    options: ["5", "32", "Invalid operation", "Undefined"],
    answer: 2,
  },
  {
    question: "Which keyword is used to declare a function in JavaScript?",
    options: ["function", "method", "func", "def"],
    answer: 1,
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A way to hide data in JavaScript",
      "A function that is defined inside another function",
      "A way to remove unused variables",
      "A built-in JavaScript object",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the 'setTimeout' function in JavaScript?",
    options: [
      "To set the current time",
      "To delay the execution of a function",
      "To measure the time taken by a function",
      "To create a timer object",
    ],
    answer: 2,
  },
  {
    question: "What is the JavaScript event loop responsible for?",
    options: [
      "Handling mouse events",
      "Executing JavaScript code in a sequential manner",
      "Managing asynchronous tasks and callbacks",
      "Rendering web pages",
    ],
    answer: 3,
  },
  {
    question: "How can you comment out a single line of code in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "' This is a comment",
    ],
    answer: 1,
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: [
      "Not a Normal Number",
      "Not a Null",
      "No Answer Needed",
      "Not a Number",
    ],
    answer: 4,
  },
];

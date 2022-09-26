import React from 'react';
import './style.css';

export default function App() {
  React.useEffect(() => {
    // Defining our first promise
    let firstPromise = async () => {
      let getData = await fetch('https://api.github.com/users/ejirocodes');
      return getData.json();
    };

    // Defining our second promise
    let secondPromise = async () => {
      let getData2 = await fetch(
        'https://api.github.com/users/ejirocodes/repos'
      );
      return getData2.json();
    };

    // Defining our third promise
    let thirdPromise = async () => {
      let getData2 = await fetch(
        'https://api.github.com/users/ejirocodes/followers'
      );
      return getData2.json();
    };

    // Defining our fourth promise
    let fourthPromise = async () => {
      let getData2 = await fetch(
        'https://api.github.com/users/ejirocodes/following'
      );
      return getData2.json();
    };

    // Async function to perform execution of all promise
    let promiseExecution = async () => {
      let promise = await Promise.all([
        firstPromise(),
        secondPromise(),
        thirdPromise(),
        fourthPromise(),
      ]);
      console.log(promise);
    };

    // Function call
    promiseExecution();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}

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
      console.log('using async await', promise);
    };

    // Function call
    promiseExecution();
  }, []);

  React.useEffect(() => {
    let result = () => {
      Promise.all([
        fetch('https://api.github.com/users/ejirocodes'),
        fetch('https://api.github.com/users/ejirocodes/repos'),
        fetch('https://api.github.com/users/ejirocodes/followers'),
      ])
        .then(function (responses) {
          return Promise.all(
            responses.map(function (res) {
              return res.json();
            })
          );
        })
        .then(function (data) {
          console.log('using callback', data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    result();
  });

  React.useEffect(() => {
    const urls = [
      'https://api.github.com/users/ejirocodes/repos',
      'https://api.github.com/users/ejirocodes',
    ];

    const getData = async () => {
      // setLoading(true);
      const [result1, result2] = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );
      // // setLoading(false);
      // setDataOne(result1);
      // setDataTwo(result2);
      console.log('result1 and result2', result1, result2);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}

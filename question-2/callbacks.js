// Name : Drasti Parikh
//Student Id : 101419828

const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'resolved success!' });
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('{error: rejected exception!}'));
      }, 500);
    });
  };

  resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  
  rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
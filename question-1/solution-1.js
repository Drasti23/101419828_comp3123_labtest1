// Name : Drasti Parikh
//Student Id : 101419828

function lowerCaseWords (mixed_array){
    return new Promise ((resolve,reject)=>{
        if (Array.isArray(mixed_array)) {
            const loweredcaseWords = [];
      for (const element of mixed_array) {
        if (typeof element === 'string') {
          loweredcaseWords.push(element.toLowerCase());
        }
      }
      resolve(loweredcaseWords);
    } else {
      reject(new Error('Your provided input is not an array.'));
    }
    });
}

const mixed_array = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixed_array)
.then(output => console.log(output))
.catch(error => console.log(error));
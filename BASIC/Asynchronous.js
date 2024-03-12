console.clear();

console.log("FROM ASYNCHRONOUS FILE");

// SetTimeout( function , time(in ms)  );
{
setTimeout(() => {
  console.log("2000");
}, 2000);
function Hello() {
  console.log("Hello ");
}
setTimeout(Hello, 2000);

let aq1 = 0;
function Hello() {
  aq1 =  200;
}
 setTimeout(Hello, 5000);
console.log(aq1)
}
// CallBack Functions

{function F1(A, B) {
  return A + B;
}
let F2 = (A, B, FA) => {
  return FA(A, B);
};
F2(10, 20, F1);

function F3(A, B) {
  return A + B;
}
let F4 = (FA) => {
  return FA();
};
let F5 = F4(() => {
  return F3(10, 20);
});}

// CALL-BACK FUNCTION
// CALL-BACK HELL.

{const getData = (Data, DD) => {
  setTimeout(() => {
    console.log("DATA : ", Data);
    if (DD) {
      DD(Data);
    }
  }, 2000);
};
console.log("Fetching 1...");

getData(10, () => {
  console.log("Fetching 2...");
  getData(20, () => {
    console.log("Fetching 3...");
    getData(30);
  });
});
}


                // PROMISE

{
const getData = (Data, DD) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA : ", Data);
      resolve("200");
      if (DD) {
        DD(Data);
      }
    }, 2000);
  });
};
let y = getData(10);
y.then((res) => {
  console.log(res);
});
}{
const getData = (Data, DD) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA : ", Data);
      reject("400");
      if (DD) {
        DD(Data);
      }
    }, 2000);
  });
};
let y = getData(10);
y.catch((res) => {
  console.log(res);
});}

// PROMISE - CHAINING
// 1-->
{const getData = (Data, DD) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA : ", Data);
      resolve("200");
      if (DD) {
        DD(Data);
      }
    }, 2000);
  });
};
console.log("Fetching 1...");
getData(10).then((res) => {
  console.log(res);
  console.log("Fetching 2...");
  getData(20).then((res) => {
    console.log(res);
    console.log("Fetching 3...");
    getData(30).then((res) => {
      console.log(res);
    });
  });
});
}
//              /2-->
{
const getData = (Data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA : ", Data);
      resolve("200");
    }, 2000);
  });
};
console.log("Fetching 1...");
getData(10)
  .then((res) => {
    console.log(res);
    console.log("Fetching 2...");
    return getData(20);
  })
  .then((res) => {
    console.log(res);
    console.log("Fetching 3...");
    return getData(30);
  })
  .then((res) => {
    console.log(res);
  });}

// Async-Await

// 1 -->
{function getData(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data : ", i);
      resolve(200);
    }, 1000);
  });
}
async function P() {
  console.log("fetching 1...");
  await getData(10);
  console.log("fetching 2...");
  await getData(20);
  console.log("fetching 3...");
  await getData(30);
}
P();

2-->
function getData(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data : ", i);
      resolve(200);
    }, 1000);
  });
}
(async () => {
  console.log("fetching 1...");
  await getData(10);
  console.log("fetching 2...");
  await getData(20);
  console.log("fetching 3...");
  await getData(30);
})();
}
// 3-->
{
function getData(i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data : ", i);
        resolve(200);
      }, 1000);
    });
  }
  function getData1(i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(i);
        resolve(200);
      }, 1000);
    });
  }
  async function P() {
    await getData1("fetching 1...");
    await getData(10);
    await getData1("fetching 2...");
    await getData(20);
    await getData1("fetching 3...");
    await getData(30);
  }
  P();

}
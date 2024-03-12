console.clear();

console.log("FROM API ");

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
  console.log("Getting Data...");
  let response = await fetch(URL);
  console.log(response);
  console.log(response.json());
  console.log(
    response.json().then((e) => {
      console.log(e);
    })
  );

  let JO = response.json();
  console.log(JO);
  console.log(
    JO.then((e) => {
      console.log(e);
      console.log(e[0].text);
    })
  );

  console.log(response.text);
};
getFacts();

(async () => {
  let Ap = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    console.log(Ap);
    console.log(Ap.json());
    console.log(Ap.headers);
    console.log(Ap.text());
    console.log(Ap.status);
    console.log(Ap.ok);
    console.log(Ap.url);
    console.log(Ap.statusText);
    console.log(Ap.type);
    console.log(Ap.bodyUsed);
    console.log(Ap.redirected);

  let Data = Ap.json();
  console.log(Data);
    console.log(
      Data.then((e) => {
        console.log("1.. ", e);
      })
    );
    console.log(
      Data.catch((e) => {
        console.log("2.. ", e);
      })
    );
    console.log(
      Data.finally((e) => {
        console.log("3.. ", e);
      })
    );
})();



////               XMLHttpRequest

const URL2 = "https://cat-fact.herokuapp.com/factsl";

const req = new XMLHttpRequest();

req.onload = () => {
  console.log("SUCCESS")
}

req.onerror = () => {
  console.log("ERROR");
}

req.open("GET", URL);
req.send();


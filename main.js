let input = document.getElementById("input-search");
let results = document.getElementById("results");
let fetchData;

if (input) {
  input.addEventListener("input", onChange);
}

function onChange(e) {
  if (fetchData) {
    clearTimeout(fetchData);
  }
  fetchData = setTimeout(() => {
    fetch("./data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        results.innerHTML = "";
        if (data && data.people && e.target.value) {
          let searchResult = data.people.filter(
            (dj) =>
              dj.name.toString().includes(e.target.value) ||
              dj.contact.toString().includes(e.target.value) ||
              dj.constain.toString() === e.target.value
          );
          searchResult.forEach((sR) => {
            let items = document.createElement("span");
            items.innerText = `Name: ${sR.name}, contact: ${sR.contact}`;
            results && results.appendChild(items);
          });
        }
      });
  }, 3000);
}

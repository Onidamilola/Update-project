console.log("hello world");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://hyxjrwcnavfiqbzfchdf.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5eGpyd2NuYXZmaXFiemZjaGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNjczMzEsImV4cCI6MjAzMzg0MzMzMX0.2rS0BC6SuLqqASYHe_LZk26H63AL736rxUOzhBvRl4k",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5eGpyd2NuYXZmaXFiemZjaGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNjczMzEsImV4cCI6MjAzMzg0MzMzMX0.2rS0BC6SuLqqASYHe_LZk26H63AL736rxUOzhBvRl4k",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  const filteredData = data.filter((fact) => fact.category == "society");

  createFactsList(filteredData);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map((fact) => `<li>${fact.test}</li>`);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});

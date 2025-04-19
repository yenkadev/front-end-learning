/**
 * IIFE
 * what: is a Js function that runs as soon as it is defined
 * when: function has only one call
 * why: shorter, no need to name it
 */
(function () {
  console.log("This is IIFE function");
})();

(() => {
  console.log("This is IIFE function");
})();

((a, b) => {
  console.log("sum a + b: ", a + b);
})(10, 10);

(async () => {
  console.log("This is IIFE function");
})();

/**
 * Ap dung vao thuc te
 */
function main() {
  console.log("Js");
}
main();

(() => {
  console.log("Js");
})();


function App() {
  useEffect(() => {
    async function fetchData() {
      // fetch data
    }
    fetchData();
  }, [])
}

function App() {
  useEffect(() => {
    (async () => {
      // fetch data
    })();
  }, [])
}

/**
 * Block scope
 */
(() => {
  var name = "Js";
})();
console.log("name", name);

{
  let name = "Js";
}



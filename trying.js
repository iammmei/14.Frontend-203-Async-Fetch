//fetch API works you pass the url as the first proprety then it has a second proprety

// console;
// fetch("https://reqres.in/api/users")
//   //for the fetch to return us a response use dot then
//   .then((res) => console.log(res));

// fetch("becode.json")
//   .then((res) => {
//     if (res.ok) {
//       console.log("SUCCES");
//     } else {
//       console.log("Not Successful");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));

fetch("becode.json").then((res) => console.log(res));

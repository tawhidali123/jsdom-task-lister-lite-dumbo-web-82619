document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let submit = document.querySelector("#create-task-form");
  let post = document.querySelector("#tasks");

  submit.addEventListener("submit", function(event){
    event.preventDefault();
    let text = event.target.value

    let li = document.createElement("li");

    // post.innerHTML(text)

    post.innerText = text;
    // post.appendChild(holder);

  })







    // let userSubmit = document.querySelector("#create-task-form").value;
    // let showList = document.querySelector("#tasks")

    // let li = document.createElement("li");

    // userSubmit.append(showList);

    // console.log(userSubmit)
  


});

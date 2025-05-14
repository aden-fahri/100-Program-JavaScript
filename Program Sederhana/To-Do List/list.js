function addTask() {
  let inputBox = document.getElementById("input-box");
  let listContainer = document.getElementById("list-container");

  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00D7";
  li.appendChild(span);

  inputBox.value = ""; 
}

document.getElementById("list-container").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
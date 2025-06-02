const rows = [
  {
    firstName: "Amayuri",
    lastName: "Mizuki",
    age: 16,
  },
  {
    firstName: "Ajisai",
    lastName: "Sena",
    age: 17,
  },
  {
    firstName: "Amasawa",
    lastName: "Mashiro",
    age: 17,
  },
  {
    firstName: "Shinrai",
    lastName: "Yuyu",
    age: 18,
  },
  {
    firstName: "Kawaguchi",
    lastName: "Ren",
    age: 15,
  },
];

let sortOrder = "asc";
let sortField = "firstName";
let prevField = "";

const sort = (arr, field, element) => {
  sortField = field;
  sortOrder = prevField === field && sortOrder === "asc" ? "desc" : "asc";
  prevField = field;

  document.querySelectorAll("thead th").forEach((th) => {
    th.classList.remove("active");
    const icon = th.querySelector("i");
    icon.className = "fa-solid";
  });

  if (element) {
    element.classList.add("active");
    element.querySelector("i").className = `fa-solid fa-arrow-${
      sortOrder === "asc" ? "up" : "down"
    }`;
  }

  return arr.sort((a, b) => {
    const valA = a[field];
    const valB = b[field];

    if (typeof valA === "string") {
      return sortOrder === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    } else {
      return sortOrder === "asc" ? valA - valB : valB - valA;
    }
  });
};

const sortRows = (field, element) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = sort(rows, field, element)
    .map(
      (row) => `
        <tr>
          <td>${row.firstName}</td>
          <td>${row.lastName}</td>
          <td>${row.age}</td>
        </tr>`
    )
    .join("");
};

sortRows("firstName", document.querySelector("thead th:first-child"));

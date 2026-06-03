const modal = document.querySelector("#myModal");
const modalButton = document.querySelector("#closeModal");
modal.showModal();

modal.innerHTML = `
<p>Course: ${courses.subject}</p>
<p>Course: ${courses.subject}</p>
<p>Course: ${courses.subject}</p>
<p>Course: ${courses.subject}</p>
<p>Course: ${courses.subject}</p>
`;

console.log(courses);
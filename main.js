
const people = [
    {

        name: 'John',
        age: 25,
        hobbies: ['reading', 'swimming'],
        gender: 'male',
        profession: 'teacher'
    },
    {
        name: 'Jane',
        age: 30,
        hobbies: ['painting', 'dancing'],
        gender: 'female',
        profession: 'engineer'
    },
    {
        name: 'Bob',
        age: 40,
        hobbies: ['hiking', 'cooking'],
        gender: 'male',
        profession: 'doctor'
    },
    {
        name: 'Alice',
        age: 20,
        hobbies: ['singing', 'playing guitar'],
        gender: 'female',
        profession: 'student'
    },
    {
        name: 'Mike',
        age: 35,
        hobbies: ['running', 'playing basketball'],
        gender: 'male',
        profession: 'programmer'
    }
];

 const peopleTest = document.querySelector('#people')

const peopleHtml = people.map(person => {
    const peopleDiv = document.createElement('div');
    peopleDiv.innerHTML = `
    <div>
    <ul class="bg-white p-3 text-black">
      <li> Name: ${person.name}</li>
      <li> Age : ${person.age}</li>
      <li> Hobbies : ${person.hobbies}</li>
      <li> Gender : ${person.gender}</li>
      <li> Profession : ${person.profession}</li>
    </ul>
  </div>
  `
  return peopleDiv
});

peopleHtml.forEach((personDiv) => {
    peopleTest.appendChild(personDiv)
})

console.table(peopleHtml);

// Append the created elements to the #people div
// peopleHtml.forEach((personDiv) => {
//     peopleList.appendChild(personDiv);
//   });



const ul = document.createElement('ul');
document.getElementById('app').append(ul);

// console.log(app);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    const li = document.createElement('li');
    li.append("Fizz");
    ul.append(li);
    li.style.color = "red";
    console.log("Fizz");   
  } else if (i % 3 !== 0 && i % 5 === 0) {
    const li = document.createElement('li');
    li.append("Buzz");
    ul.append(li);
    li.style.color = "blue";
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    const li = document.createElement('li');
    li.append("BuzzFizz");
    ul.append(li);
    li.style.color = "green";
    console.log("BuzzFizz");   
  } else if (i % 3 !== 0 && i % 5 !== 0) {
    const li = document.createElement('li');
    li.append(i);
    ul.append(li);
    li.style.color = "black";
    console.log(i);
  }
}




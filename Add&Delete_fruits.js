document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fruits = document.querySelector('.fruits');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Select the input element
      const fruitToAdd = document.getElementById('fruit-to-add');
  
      // Create the li element
      const newLi = document.createElement('li');
      newLi.className = 'fruit';
      newLi.innerHTML = `${fruitToAdd.value}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
  
      // Adding li as the last element of the unordered list
      fruits.appendChild(newLi);
  
      // Clear the input field after adding a fruit
      fruitToAdd.value = '';
    });
  
    fruits.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
      }
    });
  
    // Add "Edit" button to every existing li element
    const existingFruits = document.querySelectorAll('.fruit');
    existingFruits.forEach(function (fruit) {
      const editButton = document.createElement('button');
      editButton.className = 'edit-btn';
      editButton.textContent = 'Edit';
      fruit.appendChild(editButton);
    });
  });
  
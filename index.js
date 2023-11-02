let input = document.getElementById('text');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul');
let remove = document.getElementById('remove');

btn.addEventListener('click', function () {
    if (input.value) {
        let li = document.createElement('li');
        li.innerHTML = input.value
        ul.appendChild(li)
        input.value = '';
    } else {
        alert("Bo'sh joyni saqlab bo'lmaydi")
    }
});


// Get references to the HTML elements
// const input = document.getElementById('text');
// const btn = document.getElementById('btn');
// const ul = document.getElementById('ul');
// const remove = document.getElementById('remove');

// // Add a click event listener to the "saqlash" (save) button
// btn.addEventListener('click', function () {
//     if (input.value) {
//         // Create a new list item (li) and set its content to the input value
//         const li = document.createElement('li');
//         li.textContent = input.value;

//         // Append the new list item to the unordered list (ul)
//         ul.appendChild(li);

//         // Clear the input field
//         input.value = '';
//     }
// });

// // Add a click event listener to the remove button
// remove.addEventListener('click', function () {
//     // Remove the last item from the unordered list
//     const items = ul.getElementsByTagName('li');
//     if (items.length > 0) {
//         ul.removeChild(items[items.length - 1]);
//     }
// });



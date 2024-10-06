let navData = async () => {
   let res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
   let data = await res.json();
   navDisplayData(data.categories);
 };
 
 // Move this function definition above `navData()`
 let navDisplayData = (items) => {
   let nav_container = document.getElementById("categories");
   nav_container.classList = "md:flex justify-evenly mx-auto shadow-xl";
 
   for (let item of items) {
     console.log(item.category);
 
     let btn_div = document.createElement("div");
 
     btn_div.innerHTML = `
       <button onclick="handleSpinner('${item.category}')" class="btn m-3 btn-category text-xl font-bold">
         <img class="w-7 h-7" src="${item.category_icon}">
         ${item.category}
       </button>
     `;
 
     nav_container.appendChild(btn_div);
   }
 };
 
 // Ensure this runs after all function definitions
 navData();
 
 let loadAllData = async () => {
   let res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
   let data = await res.json();
   displayAllData(data.pets);
 };
 
 loadAllData();
 
 let categoryAllData = async (categoryName) => {
   document.getElementById("spinner").style.display = "none";
   document.getElementById("card").style.display = "grid";
 
   let res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
   let data = await res.json();
   displayAllData(data.data);
 };
 
 let displayAllData = (items) => {
   let item_container = document.getElementById("card");
   item_container.innerHTML = '';  // Clear the container before appending new data
 
   // Check if items is an array and has elements
   if (Array.isArray(items) && items.length > 0) {
     for (let item of items) {
       let breed = item.breed ? item.breed : "Breed not available";
       let birthDate = item.date_of_birth ? item.date_of_birth : "Date of birth not available";
       let gender = item.gender ? item.gender : "Gender not specified";
       let price = item.price ? `$${item.price}` : "Price not available";
 
       let cardDiv = document.createElement("div");
 
       cardDiv.innerHTML = `
         <img src="${item.image}" alt="Mister Tartosh" class="w-full h-40 object-cover rounded-t-lg">
         <h3 class="text-xl font-semibold mt-4">${item.pet_name}</h3>
         <p class="text-sm text-gray-600">Breed: ${breed}</p>
         <p class="text-sm text-gray-600">Birth: ${birthDate}</p>
         <p class="text-sm text-gray-600">Gender: ${gender}</p>
         <p class="text-sm font-semibold text-green-500">Price: ${price}</p>
         <div class="mt-4 flex justify-between">
           <button class="bg-blue-500 text-white py-1 px-3 rounded-md">Adopt</button>
           <button class="bg-blue-500 text-white py-1 px-3 rounded-md">Adopt</button>
           <button class="bg-gray-200 text-gray-700 py-1 px-3 rounded-md">Details</button>
         </div>
       `;
 
       item_container.appendChild(cardDiv);
     }
   } else {
     // If items is not an array or it's empty, display a message
     item_container.innerHTML = `<p class="text-xl text-gray-600">No pets available in this category.</p>`;
   }
 };
 
 
 let handleSpinner = (categoryName) => {
   document.getElementById("spinner").style.display = "block";
   document.getElementById("card").style.display = "none";
 
   setTimeout(function () {
     categoryAllData(categoryName);
   }, 2000);
 };
 
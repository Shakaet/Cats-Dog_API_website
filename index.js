

 let navData= async()=>{

    let res= await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    let data= await res.json()
    navDisplayData(data.categories)
 }

 navData()


 let loadAllData=async()=>{
     document.getElementById("spinner").style.display="none"
     document.getElementById("card").style.display="grid"

     let res= await fetch("https://openapi.programming-hero.com/api/peddy/pets")
     let data= await res.json()
    console.log(data)




    

   


 }


 let handleSpinner=()=>{
    document.getElementById("spinner").style.display="block"
    document.getElementById("card").style.display="none"
    
    setTimeout(function(){
        loadAllData()
    },2000)
 }


 let navDisplayData=(items)=>{

    let nav_container =document.getElementById("categories")
    nav_container.classList=" flex justify-evenly py-2 shadow-xl"

    for(let item of items){
        console.log(item.category)

        let btn_div=document.createElement("div")
        // btn_div.classList="flex"

        btn_div.innerHTML=`

    

        

        <button onclick="handleSpinner()" class="btn m-3  btn-category text-xl font-bold">

         <img class="w-7 h-7" src="${item.category_icon}">
        
        
        ${item.category} </button>
        
        
        
        `
        nav_container.appendChild(btn_div)




    }


 }
let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")



form.addEventListener("submit",function(e){
e.preventDefault()
let item = document.getElementById("item").value
let li = document.createElement("li")//
let btn = document.createElement("button")
btn.appendChild(document.createTextNode("X"))
li.appendChild(document.createTextNode(item))
li.appendChild(btn)
btn.className='btn btn-danger btn-sm float-right delete'
li.className="list-group-item"
itemList.appendChild(li)
document.getElementById("item").value = ''
})


   
itemList.addEventListener("click",function(e){
if(e.target.classList.contains("delete")){
if(confirm("are u sure u want to delete item")){
 //  console.log(e.target.parentElement)
 itemList.removeChild(e.target.parentElement)
}
}else{
    alert("bhai bhagg ja")
}
})



filter.addEventListener("keypress",function(e){
let value = e.target.value.toLowerCase()
let li = document.getElementsByTagName("li")
Array.from(li).forEach(function(item){
if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
    item.style.display = "block"
}else{
    item.style.display = "none"

}
})
})
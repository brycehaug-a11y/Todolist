let addBtn = document.getElementById("addBtn")
let cancelModal = document.getElementById("cancel-modal")
let closeModal = document.getElementById("close-modal")
let modelTitle = document.getElementById("insert-title")
let submitModel = document.getElementById("submit-model")
let taskDesc = document.getElementById("task-desc")
let todoSection = document.getElementById("todo-section")
let modalBsckdrop = document.getElementById ("modal-backdrop")

console.log(addBtn);

// App Variable
var cardId = 0

// Todo List Object 
class ToDoListItem {
    constructor(title, description) {
        /**
         * @description 
         * @param {string} title
         * @param {string} description
         */
            this.title = title
            this.description = description
            this.createAt = new Date ()
            this.lastUpdatedAt = Date()
    }
}

// list<TodoListItem
var listItems = [
    new ToDoListItem("Hello", "World")
    

]
/**
 * @description This function will update our grid to show all of our list items1
 */
function updatedcards() {
    todoSection.innerHTML = ""
    cardId = 0
    listItems.forEach((todoItem)=>{
        let item = document.createElement("div")
        const cardNumber = cardId
        item.id = `card-${cardId}`
        
        item.innerHTML = `
        <div class="card">
            <h4>${todoItem.title}</h4>
            <p>${todoItem.description}<p>
            <div class="cardBtns">
                <button id="card-${cardId}-ok" class="ok btn"><span class="material-symbols-outlined"> check </span></button>
                <button id="card-${cardId}-exit" class="exit btn"><span class="material-symbols-outlined">cancel</span></button>
            </div>
        </div>`
        todoSection.appendChild(item)
        document.getElementById(`card-${cardId}-ok`) .addEventListener("click", ()=> 
         {
            alert(`Clicked Ok card-${cardId}`)
        })
        document.getElementById(`card-${cardId}-exit`) .addEventListener("click", ()=>{
            if(!confirm("Are you sure")) return 
            deleteCard(todoItem)
    })
            cardId += 1
    })
}
updatedcards()
/**
 * @description This creates a new todo list item
 * @param {string} title 
 * @param {string} description 
 * @returns {ToDoListItem}
 */
function createCard(title, description) {
    const newCard = new ToDoListItem(title, description)
    listItems.push(newCard)
    updatedcards()
    return newCard
}
/**
 * @description Delete a list item based on a value TodoListItems
 * @param {ToDoListItem} item 
 */

function deleteCard(deleteItem) {
    listItems = listItems.filter((item)=>{
        return item.title.toLowerCase() !== deleteItem.title.toLowerCase()
    })
    updatedcards()
}
function closeTheModal() {
    modalBsckdrop.setAttribute("hidden","")
}
// Window Events 
addBtn.addEventListener("click", ()=> {
    modalBsckdrop.removeAttribute("hidden")
})
cancelModal.addEventListener("click", ()=> {
    closeTheModal()
})
submitModel.addEventListener("click", (e)=> {
    closeTheModal()
    e.preventDefault()
    console.log(modelTitle);
    
    createCard(modelTitle.value, taskDesc.value)
})
// The set interval is a timer, it runs every 250ms and it checks if our modalBackdrop contains theHTML attribute of hidden
// setInterval(()=> {
//     if(modalBsckdrop.getAttribute("hidden") != null){
//         // Hide the Modal
//     } else {
//         // Show the Model
//     }
// }, 250)
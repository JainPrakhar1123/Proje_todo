const form=document.querySelector('.add');
const getnewUi=document.querySelector('.todos');
const search=document.querySelector('.search input');


const addnewtodo=(todo)=>{
    const addHtml=`
     <li class="list-group-item d-flex justify-content-between align-item-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete"></i>    
     </li>`;

     getnewUi.innerHTML+=addHtml;
};


form.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=form.add.value.trim();   //trim allowed only the content part and trim space part
    // console.log(todo);

    if(todo.length){              //will prevent to add blank todo
        addnewtodo(todo);
        form.reset();             //will reset the submit text button
    }

    
});


//delete todo

getnewUi.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filteredTodos=(term)=>{
    Array.from(getnewUi.children)
    .filter((todo)=>   !todo.textContent.includes(term))
     .forEach((todo)=> todo.classList.add('filtered'));
    Array.from(getnewUi.children)
    .filter((todo)=>   todo.textContent.includes(term))
     .forEach((todo)=> todo.classList.remove('filtered'));

};

//keyup method
search.addEventListener('keyup',()=>{
    const term=search.value.trim();
    filteredTodos(term);
});

const text = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const myDiv = document.getElementById('myDiv');
const Darktheme = document.getElementById("changeTheme");
const Lighttheme1 = document.getElementById("changeTheme1");

addBtn.addEventListener('click',()=>{
    if(text.value){
        //creating div element
        const container = document.createElement('div');
        container.classList.add('container');
        container.textContent += text.value + '\n';
        //creating button elements
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
        const doneBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        doneBtn.classList.add('doneBtn');
        delBtn.classList.add('delBtn');
        doneBtn.textContent = 'Done';
        delBtn.textContent = 'Del';
        //append the element to another div
        btnDiv.appendChild(doneBtn);
        btnDiv.appendChild(delBtn);
        myDiv.appendChild(container)
        myDiv.appendChild(btnDiv);
        //adding functionality to button i created
        doneBtn.addEventListener('click',()=>{
            container.style.textDecoration = 'line-through';
            container.style.color = 'green';
        })
        delBtn.addEventListener('click',()=>{
            container.textContent = '';
            btnDiv.removeChild(doneBtn);
            btnDiv.removeChild(delBtn);
        })
    }
    else{
        myDiv.textContent = 'Please enter task!!'
    }
})
clearBtn.addEventListener('click',()=>{
    text.value = '';
})
Darktheme.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'black'
})
Lighttheme1.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white'
})
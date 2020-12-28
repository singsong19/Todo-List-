window.onload = function() {

function append(value){
    var ul = document.querySelector('ul')
    const item = document.createElement('li');//<li>
    const deleteBtn = document.createElement('button');//태그로써의 역할 : <buttopn></buttopn>
    item.innerHTML = '<input type="checkbox">' + value
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>' //<button><i class="fas fa-trash"></i></button>
    item.appendChild(deleteBtn); //<li><button></button></li>
    ul.appendChild(item)

    deleteBtn.onclick = deleteToDo
}

// append('할일1')
// append('할일2')
// append() : 함수를 바로 호출해라
// append : 해당하는 함수와 연결만! 호출은 아님


const button2 = document.querySelector('button');
button2.addEventListener('click', () => {
    const text = document.querySelector('input');
    value = text.value;
    append(value);

    text.value = '';
})


function deleteToDo(e){
    // const remove = document.querySelector(이벤트에 해당하는 객체_쓰레기통)
    const remove = e.target.parentNode.parentNode;
    remove.parentNode.removeChild(remove);
}
};
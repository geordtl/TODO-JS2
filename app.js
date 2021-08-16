//pop remove o ultimo item da lista de uma matriz
    let tasks = Array()

//criando um novo to-do
    function newTODO(){
 
    let li = document.createElement("li")
    li.id = tasks.length
    let inputValue = document.getElementById("textInput").value
    let textN = document.createTextNode(inputValue)
    li.value = textN

    tasks.push(inputValue)
    console.log(tasks);  //exibindo os valores do array

    li.appendChild(textN) //acrescenta ao elemento selecionado o que for declarado nos parênteses.

    if (inputValue === '') {
        alert("Escreva um novo to-do!")        
    } else {
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById("textInput").value = '';

//close button em cada item
    let myNodelist = document.getElementsByTagName("LI")
    let i
    for (i = 0; i < myNodelist; i++){
        let span = document.createElement("SPAN")
        span.className = "close"
        span.appendChild(texto)
        myNodelist[i].appendChild(span)
    }

//click
    let close = document.getElementsByClassName("close")
        for (i = 0; i < close; i++) {
            close[i].onClick = function() {
                let div = this.parentElement
                div.style.display = "none"
            }
        }
    }

//check
    let list = document.querySelector('ul')
    list.addEventListener('click', function(ev) {
        let li = ev.target
        li.classList.toggle('done')
        tasks.splice()

        // document.getElementById("myUl").removeChild(ev.target)
        // console.log(ev.target);
    }, false)


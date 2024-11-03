const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark') 
})

chk.addEventListener('change', () => {
    document.body.classList.toggle('white')
})

const div = document.querySelector(".nome");
const text = "Joaquim de Assis Santana";

function textTypingEffect(element, text, i = 0){
    element.textContent += text[i];
    



    if (i == text.length - 1){
        return;
    }
    
        setTimeout(() => 
            textTypingEffect(element, text, i + 1), 21);
        
}


textTypingEffect(div, text);

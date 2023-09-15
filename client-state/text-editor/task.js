const storedText = localStorage.getItem('text');
const textEditor = document.getElementById('editor');
if(storedText !== null) {
    textEditor.value = storedText;
}

textEditor.addEventListener('input', () => {
    localStorage.setItem('text', textEditor.value);
})
const removeBtn = document.getElementById('remove_btn');
removeBtn.addEventListener('click', () => {
    textEditor.value = '';
    localStorage.removeItem('text');
})
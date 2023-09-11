const notepadText=document.getElementById('textarea');
const savebtn=document.getElementById('savebtn');
const clearbtn=document.getElementById('deletebtn');

// Save the text in local storage on clicking save btn
savebtn.addEventListener('click',()=>{
    const textTosave=notepadText.value;
    localStorage.setItem('YourText',textTosave);
})

// Save the text in the notepad textarea on reload
window.addEventListener('load',()=>{
    const savedText=localStorage.getItem('YourText');
    if(savedText){
        notepadText.value=savedText;
    }
});

// Clear the text in the notepad and localStorage when the Clear button is clicked
clearbtn.addEventListener('click', () => {
    notepadText.value = '';
    localStorage.removeItem('YourText');
});


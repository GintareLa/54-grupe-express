
console.log('Client JS logic....');

// const formDOM = document.forms[0];
const formDOM = document.getElementById('text_form');

if (formDOM) {
    const textareaDOM = formDOM.querySelector('textarea');
  

    formDOM.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        text: textareaDOM.value
    };

    

    const result = await fetch('./api/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const resultData = await result.json();
  
    console.log(resultData);
   
    });
}

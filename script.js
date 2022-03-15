// $(document).ready(()=>{
  
//   $('.advice-btn').on('click', ()=>{
//     $.get('https://api.adviceslip.com/advice', (data)=>{
//       let obj = JSON.parse(data)
//       let item = obj.slip
//       $('.card-advice-no').text(`advice #${item.id}`)
//       $('.card-quote').html(`&ldquo;${item.advice}&rdquo;`)
//   })
//   })
// })

const btn = document.querySelector('#reloadBtn');
const NO = document.querySelector(".card__content__advice-no");
const quote = document.querySelector("#advice");

btn.addEventListener('click', ()=>{
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data =>{ 
      NO.textContent = 'Advice #'+data.slip.id
      quote.innerHTML = `&ldquo; ${data.slip.advice} &rdquo;`
    })
  
})


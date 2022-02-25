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

// js fetch method # not compulsery but its nice to know since jquery is not so relevant 
var adviceText, reloadBtn
adviceText = document.getElementById('advice')
reloadBtn = document.getElementById('reloadBtn')

// not complete
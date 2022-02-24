$(document).ready(()=>{
  
  $('.advice-btn').on('click', ()=>{
    $.get('https://api.adviceslip.com/advice', (data)=>{
      let obj = JSON.parse(data)
      let item = obj.slip
      $('.card-advice-no').text(`advice #${item.id}`)
      $('.card-quote').html(`&ldquo;${item.advice}&rdquo;`)
  })
  })
})
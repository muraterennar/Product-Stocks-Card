let input = document.getElementById('basket_count');
let increase_btn = document.getElementById('increase_btn');
let decrease_btn = document.getElementById('decrease_btn');

window.onload = ()=>{
    fetch('http://localhost:3000/api')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Veriyi JSON formatına dönüştür
  })
  .then(data => {
    console.log(data.StokFiyatListesi); // Alınan veriyi kullan
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

  
}

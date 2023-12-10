// ---------CAROSELDEKİ RESİMLER OTOMATİK DEĞİŞTİRMEK İÇİN-------

setInterval(function () {
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));
    carousel.next(); 
}, 6000); 

// ---------CAROSELDEKİ RESİMLER OTOMATİK DEĞİŞTİRMEK İÇİN-------


$(document).ready(function(){
    $(".sidebar ul li").click(function(){
      $(this).nextUntil("li").slideToggle();
    });
  });

  // --------------- AÇILIR KATEGORİ LİSTE-------

  const kategoriler = document.querySelectorAll('.kategori a');

  kategoriler.forEach(kategori => {
      kategori.addEventListener('click', function (e) {
          e.preventDefault(); 
  
          const altKategoriler = this.nextElementSibling;
  
          if (altKategoriler.style.maxHeight) {
              altKategoriler.style.maxHeight = null;
          } else {
              kategoriler.forEach(digerKategori => {
                  if (digerKategori !== this && digerKategori.nextElementSibling) {
                      digerKategori.nextElementSibling.style.maxHeight = null;
                  }
              });
  
              altKategoriler.style.maxHeight = altKategoriler.scrollHeight + 'px';
          }
      });
  });

    // --------------- AÇILIR KATEGORİ LİSTE-------

    document.addEventListener('DOMContentLoaded', function() {
      const minPriceRange = document.getElementById('min-price-range');
      const maxPriceRange = document.getElementById('max-price-range');
      const minPriceLabel = document.getElementById('min-price');
      const maxPriceLabel = document.getElementById('max-price');
    
      minPriceRange.oninput = function() {
        if (parseInt(minPriceRange.value) > parseInt(maxPriceRange.value)) {
          minPriceRange.value = maxPriceRange.value;
        }
        minPriceLabel.textContent = `${minPriceRange.value} TL`;
      };
    
      maxPriceRange.oninput = function() {
        if (parseInt(maxPriceRange.value) < parseInt(minPriceRange.value)) {
          maxPriceRange.value = minPriceRange.value;
        }
        maxPriceLabel.textContent = `${maxPriceRange.value} TL`;
      };
    });
    
    
    
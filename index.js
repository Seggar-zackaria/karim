    const carousel = document.getElementById("myCarousel");
    let Index = 0;

    function showNextItem() {
      const items = document.getElementsByClassName("item");
      if (items.length === 0) return;

      
      items[Index].style.transform = "translateX(-100%)";
      Index = (Index + 1) % items.length;
      
      items[Index].style.transform = "translateX(0)";
    }

    async function fetchImages() {
      const apiKey = 
        'live_nRZRY41B3AscAkhdI5cxp1c1n5lmvwviohqO1JXXHBIFUKTrW7DJKGahKsR1Y37z'  
      const apiUrl =
        "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=" + apiKey;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const carouselItems = data.map((item) => {
          return `<div class="item"><img src="${item.url}" alt="Cat Image"></div>`;
        });

        carousel.innerHTML = carouselItems.join("");
        setInterval(showNextItem, 3000); 
      } catch (error) {
        console.error("Error", error);
      }
    }

    fetchImages();

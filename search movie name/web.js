function search()
      {
        let input = document.getElementById("input").value;
        let items = document.querySelectorAll(".card");
        items.forEach((item) => {
          if (item.innerText.toLowerCase().includes(input.toLowerCase())) {
            item.style.display = "";
          }   
          else {
            item.style.display = "none";
          }
        });
      }
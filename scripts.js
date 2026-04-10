const hpMemoryContainer = document.getElementById("hp-mem-list1")


function hpMemSF1(){
    let myLi = ""

    hpMemList.forEach((item,index) =>{
        myLi += `
        <li class="hp-mem-sf1" data-index="${index}">
            <p>${item.map}</p>
            <p>${item.world}</p>
            <p>${item.location}</p>
            <p>${item.item}</p>
        </li>
        `
        hpMemoryContainer.innerHTML = myLi
    })



 const allItems = hpMemoryContainer.querySelectorAll(".hp-mem-sf1");
 const savedActiveItems = JSON.parse(localStorage.getItem("activeItems")) || [];

  allItems.forEach(item => {
    const index = Number(item.dataset.index);
        if (savedActiveItems.includes(index)) {
      item.classList.add("active");
    }

    item.addEventListener("click", () => {
      item.classList.toggle("active");
        const activeIndices = Array.from(allItems)
        .filter(i => i.classList.contains("active"))
        .map(i => Number(i.dataset.index));

      localStorage.setItem("activeItems", JSON.stringify(activeIndices));
    });
  });
}





hpMemSF1()
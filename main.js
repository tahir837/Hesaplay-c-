// Html elemanlarına erişme

var form = document.querySelector("#expense-form");
var expenseNameInput = document.querySelector("#expense-name")
var expenseAmountInput = document.querySelector("#expense-amount")
var expenseArea = document.querySelector("#expense-area")



form.addEventListener("submit", (e) => {
    // Sayfa yenilemesini engelle

    e.preventDefault();
    
    

    // Inputların dolu olup olmadığını kontrol et
     if(expenseNameInput.value =="" && expenseAmountInput.value==""){
        alert("İnputları Doldurunuz")
        
        return;
     }
     // İnput değerlerine erişerek  bunları birer değiişkene aktar.
   var expenseName = expenseNameInput.value;
   var expenseAmount = expenseAmountInput.value;
     
  
    
   // Elde edilen değerle bir harcama elemanı oluştur
   
 var expenseDiv =  document.createElement("div")

 // oluşturulan elemana "expense" classını ekle
 

 expenseDiv.classList.add("expense")




 // oluşturulan elemanın html içeriğini belirle

 expenseDiv.innerHTML = ` <h2>${expenseName}</h2>
    <h3>${expenseAmount} TL</h3>
    <img id='delete-btn' src="./images/trash.png" alt="" />`



// oluşturulan expense elemanın Html kısmına ekle
    
    expenseArea.appendChild(expenseDiv) 

      // Inpurları sıfırla
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
})

expenseArea.addEventListener("click", (e) => {
  // Tıklanılan elemana eriş
  var element = e.target
  // Eğer tıklanılan eleman sil resmiyse silme işlemini tetikle
  if(element.id === "delete-btn") {
    // Tıklanılan elemanı ekrandan kaldır
    element.parentElement.remove()

    
  }
})
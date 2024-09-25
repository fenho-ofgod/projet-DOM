var produit = document.getElementsByClassName('box');


for (let i = 0; i < produit.length; i++) {
    let btnPlus = produit[i].children[4].children[2];
    let nombre = produit[i].children[4].children[1];
    let somme = produit[i].children[3].children[1];
    let prixUnitaire = produit[i].children[2].children[1];
    let qty = 0; // Initialize quantity
    let prixUnit = parseInt(prixUnitaire.innerText);

    btnPlus.addEventListener('click', function () {
        qty++;
        nombre.innerText = qty;
        let totalUnitaire = prixUnit * qty;
        somme.innerText = totalUnitaire;
        updateTotal();
    });

    let btnMoins = produit[i].children[4].children[0];
    btnMoins.addEventListener('click', function () {
        qty--;
        if (qty < 0) {
            qty = 0;
        }
        nombre.innerText = qty;
        let totalUnitaire = prixUnit * qty;
        somme.innerText = totalUnitaire;
        updateTotal();
    });

    // Delete item

    var btn_del = document.querySelectorAll('.box');

    var icon1 = produit[i].children[5].children[1]
     
    let box = produit[i]
    

    if(box){
       icon1.addEventListener('click',function(){
            box.remove();
        })
    }

    //let icon1 = produit[i].children[5].children[1];
    //icon1.addEventListener('click', function () {
       // overallTotal -= parseInt(somme.innerText);
        //box.remove();
        //updateTotal();
   // });

    // Update overall total display


    

    var btnvar1 = document.getElementById('btnh1');

    function toggle1(){
        if(btnvar1.style.color =='red'){
       btnvar1.style.color = 'grey'
        }
        else{
            btnvar1.style.color = 'red'
        }
    }
   
    var btnvar2 = document.getElementById('btnh2');

    function toggle2(){
        if(btnvar2.style.color =='red'){
            btnvar2.style.color = 'grey'
        }
        else{
            btnvar2.style.color = 'red'
        }
   }
   var btnvar3 = document.getElementById('btnh3');

    function toggle3(){
        if(btnvar3.style.color =='red'){
            btnvar3.style.color = 'grey'
        }
        else{
            btnvar3.style.color = 'red'
        }
    }

    }

    var totalCommandeElement = document.getElementById('tyu');
    var overallTotal = 0;

    function updateTotal() {
        overallTotal = 0; // Reset total
        for (let j = 0; j < produit.length; j++) {
            let itemTotal = parseInt(produit[j].children[3].children[1].innerText) || 0;
            overallTotal += itemTotal;
        }
        totalCommandeElement.innerText = overallTotal;
    }

    








//var produit=document.getElementsByClassName('box')
//for(let i=0; i<produit.length;i++){
   // let btnPlus=produit[i].children[4].children[2]
   // let nombre=produit[i].children[4].children[1]
   // let somme=produit[i].children[3].children[1]
   // let prixUnitaire=produit[i].children[2].children[1]
   // let qty=parseInt(nombre.innerText)
   // let prixUnit=parseInt(prixUnitaire.innerText)

   // btnPlus.addEventListener('click', function(){
        //qty++
        //nombre.innerText=qty
       // somme.innerText=prixUnit*qty
   // })
   // let btnMoins=produit[i].children[4].children[0]
   // btnMoins.addEventListener('click',function(){
      //  qty--
       // if(qty<1){
          //  qty=0
       // }
       // nombre.innerText=qty
       // somme.innerText=prixUnit*qty
   // })
    

    //------supprimer les articles----------//

    //var btn_del = document.querySelectorAll('.box');

    //var icon1 = produit[i].children[5].children[1]
     
   // let box = produit[i]
    

   // if(box){
       // icon1.addEventListener('click',function(){
           // box.remove();
       // })
   // }

   
    



  // var totalCommande = []; 
      
 // for(let i = 0; i <produit.length;i++){

  // let totalUnitaire = produit[i].children[3].children[1]
   
   
 //  totalCommande.push(totalUnitaire)

   //console.log(totalCommande);

//}

 //  const reducer = (accumulator, currentValue) => accumulator + currentValue;
   
  // const prixTotal = totalCommande.reduce(reducer,0);
  // console.log(prixTotal);


   // for(let i = 0; i <produit.length;i++){
       // console.log(produit[i].prixUnitaire);
  //  }



    

    


   


    

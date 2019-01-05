


 // api_key: 4ef29bda-5272-4fe0-8fcb-1620adad2291






//COUNTER
var y=100000;
var ab;
var netBalance=0;

 var expenditure = 0;


function signup()
         {
            x = document.getElementById("name").value;
            // document.getElementById("username").innerHTML=x;
            y = document.getElementById("bala").value;
            // document.getElementById("availbal").innerHTML=parseInt(y);
            console.log(x);
            console.log(y);
            localStorage.setItem('fullname',x)
            localStorage.setItem('balance',y)
            // xx=document.getElementById("name");
           


           

         }
         function getdata()

         {
            // yy= document.getElementById("bala");
            // if(yy.style.display==="none")
            // {
            //     yy.style.display="inline";
            // }
             fn=localStorage.getItem('fullname');//full name
             ab=localStorage.getItem('balance');//available balance
             document.getElementById("username").innerHTML=fn;
             document.getElementById("availbal").innerHTML=parseInt(ab);
             console.log(fn);
             console.log(ab);
             if(fn)
             {
                 document.getElementById('btsignup').style.display="none"
                 document.getElementById('btlogout').style.display="display"
                 document.getElementById('bal').style.display="display"
             }
             else{
                document.getElementById('btsignup').style.display="block"
                document.getElementById('btlogout').style.display="none"
                document.getElementById('bal').style.display="none"
             }
         }
         function logout()
         {
             localStorage.clear();
             location.href="index.html";
         } 


function increaseValued() {
    var value = parseInt(document.getElementById('numberd').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberd').value = value;
  }
 
 
  function increaseValueb() {
    var value = parseInt(document.getElementById('numberb').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberb').value = value;
  }
 
 
  function increaseValuee() {
    var value = parseInt(document.getElementById('numbere').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbere').value = value;
  }
 
  function decreaseValuee() {
    var value = parseInt(document.getElementById('numbere').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numbere').value = value;
  }
 
 
  function decreaseValueb() {
    var value = parseInt(document.getElementById('numberb').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numberb').value = value;
  }
 
 
  function decreaseValued() {
    var value = parseInt(document.getElementById('numberd').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numberd').value = value;
  }
 


 var netBalance;

 var expenditure = 0;

 netBalance = y;
 console.log(y);

 netBalance = parseInt(y);



 console.log(netBalance)


 
 
 var nb;
 var ne;
 var nd;
 var ccb = 0;
 var cce = 0;
 var ccd = 0;
 var rrr = 0;
 var nnb = 0;
 var nne = 0;
 var nnd = 0;
 
 
  function catchBought(no,nm,cp)
  {
      no = parseInt(no);
      vl = no * cp;
      if (ccb == 0 && nm == "BITCOIN")
      {
         appendRow(nm,no,vl);
         ccb = rrr + 1;
         rrr++;
         nnb = no;
         expenditure = expenditure + vl;
      }
      else if (cce == 0 && nm == "ETHEREUM")
      {
         appendRow(nm,no,vl);
         cce = rrr + 1;
         rrr++;
         nne = no;
         expenditure = expenditure + vl;
      }
      else if (ccd == 0 && nm == "DASH")
      {
         appendRow(nm,no,vl);
         ccd = rrr+1;
         rrr++;
         nnd = no;
         expenditure = expenditure + vl;
      }
 
      else
      {
         
         
         
         if(nm == "BITCOIN")
         {
           nnb = no + nnb;
           var newr = document.getElementById("myTable").rows[ccb].cells;
           newr[0].innerHTML = "BITCOIN";
           newr[1].innerHTML = nnb;
           newr[2].innerHTML = nnb * cp;
           expenditure = expenditure + (nnb * cp);
         }
 
         if(nm == "ETHEREUM")
         {
           nne = no + nne;
           var newr = document.getElementById("myTable").rows[cce].cells;
           newr[0].innerHTML = "ETHEREUM";
           newr[1].innerHTML = nne;
           newr[2].innerHTML = nne * cp;
           expenditure = expenditure + (nne * cp);
         }
 
         if(nm == "DASH")
         {
           nnd = no + nnd;
           var newr = document.getElementById("myTable").rows[ccd].cells;
           newr[0].innerHTML = "DASH";
           newr[1].innerHTML = nnd;
           newr[2].innerHTML = nnd * cp;
           expenditure = expenditure + (nnd * cp);
         }
      }
 
      return;
  }
 
 
  function appendRow(nm,no,vl) {
   var nami;
   if(nm == "BITCOIN"){
     nami = 1
   }
   else if (nm == "ETHEREUM"){
     nami = 2
   }
   else{
     nami = 3
   }
  var table = document.getElementById("myTable");
  var row = table.insertRow(myTable.rows.length);
  var nc1  = row.insertCell(0);                            //nc1 is value of cell 1 of the row
  var nc2  = row.insertCell(1);
  var nc3  = row.insertCell(2);
  var nc4  = row.insertCell(3);
  var nc5  = row.insertCell(4);
  nc1.innerHTML = nm;
  nc2.innerHTML = no;
  nc3.innerHTML = vl;
  nc4.innerHTML = `<form>
                            <div class="value-button" id="decrease" onclick="decreaseValueb()" >-</div>
                            <input type="number" id="sellno${nami}" value="0" />
                            <div class="value-button" id="increase" onclick="increaseValueb()" >+</div>
                          </form>`;
  nc5.innerHTML = nc5.innerHTML = `<button class="btn btn-primary" id = "becho${nami}" onclick="sell(${nami})">SELL</button>`;
 return;
 }
 
 
  //Confirm to buy
  var nett;
 
 function buy()
 {
   let a= confirm("Are you sure you want to buy?");
   if(a)
   {
        nb = document.getElementById('numberb').value;
        ne = document.getElementById('numbere').value;
        nd = document.getElementById('numberd').value;
        document.getElementById('numberb').value = '';
        document.getElementById('numbere').value = '';
        document.getElementById('numberd').value = '';
       console.log("HI");
       bought();
       console.log(expenditure);

       console.log(netBalance);

       nett = ((netBalance) - expenditure).toString();
       localStorage.setItem('balance',nett)
       document.getElementById("leftBalance").innerHTML = nett;
   }
 
 }
 
 
 //nb=noumber of bitcoins
 function bought()
 {
 
    if(nb != 0)
    {
        catchBought(nb,"BITCOIN",bitcoin)
    }
    if(ne != 0)
    {
        catchBought(ne,"ETHEREUM",ethereum)
    }
    if(nd != 0)
    {
        catchBought(nd,"DASH",dash)
    }
 
 
 }
 
 var sellidb;
 var sellide;
 var sellidd;
 var getsell;
 
 
 function sell(getsell){
  let a= confirm("Are you sure you want to sell?");
  if(a)
  {
    if(getsell == 1)
    {
        sellidb = document.getElementById('sellno1').value;
        document.getElementById('sellno1').value = '';
        var newr = document.getElementById("myTable").rows[ccb].cells;
        newr[1].innerHTML = nnb - sellidb;
 
    }
    else if(getsell == 2)
    {
        sellide = document.getElementById('sellno2').value;
        document.getElementById('sellno2').value = '';
        var newr = document.getElementById("myTable").rows[cce].cells;
        newr[1].innerHTML = nne - sellide;
    }
    else
    {
        sellidd = document.getElementById('sellno3').value;
        document.getElementById('sellno3').value = '';
        var newr = document.getElementById("myTable").rows[ccd].cells;
        newr[1].innerHTML = nnd - sellidd;
    }
  }
      document.getElementById("leftBalance").innerHTML = netBalance - expenditure;
 }








 
 var content;
 var ethereum;
 var dash;
 var initethereum;
 var initdash;
 var cngd;
 var cnge;
 
 var content2;
 var initbitcoin;
 var bitcoin;
 var cngb;
 
 
 var  xhttp = new XMLHttpRequest();
 var  xhttpB = new XMLHttpRequest();
 
     
 var content;
 var ethereum;
 var dash;
 var initethereum;
 var initdash;
 var cngd;
 var cnge;
 
 var content2;
 var initbitcoin;
 var bitcoin;
 var cngb;
 
 
 var  xhttp = new XMLHttpRequest();
 var  xhttpB = new XMLHttpRequest();
 //INITIAL API HIT
                         xhttp.onreadystatechange = function()
                         {
                             if (this.readyState == 4 && this.status == 200)
                             {
                                 content= JSON.parse(xhttp.responseText);
                                     console.log(content);
                                     initethereum=content.ETH.USD;
                                     document.getElementById("eop").innerHTML=initethereum;
                                     initdash=content.DASH.USD;
                                     document.getElementById("dop").innerHTML=initdash;
                             }
                         };
                         xhttp.open("GET", "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=26dd808c2fb11b0ba21e6812bb913dbe9a657d422d5f868a641bee142c1f4a8d26dd808c2fb11b0ba21e6812bb913dbe9a657d422d5f868a641bee142c1f4a8d", true);
                         xhttp.send();
 
 
 
 
 
 
                         xhttpB.onreadystatechange = function()
                         {
                             if (this.readyState == 4 && this.status == 200)
                             {
                                 content2= JSON.parse(xhttpB.responseText);
                                     console.log(content2);
                                     initbitcoin=content2.bpi.USD.rate_float;
                                     document.getElementById("bop").innerHTML=initbitcoin;
                             }
                         };
                         xhttpB.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
                         xhttpB.send();
 
 
 
         //CHANGING VALUES
 
        var x= setInterval(() => {
            xhttp.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    content= JSON.parse(xhttp.responseText);
                        console.log(content);
                        ethereum=content.ETH.USD;
                        cnge=initethereum-ethereum;
                        document.getElementById("ecp").innerHTML=ethereum;
                        document.getElementById("ce").innerHTML=cnge.toFixed(4);
                        dash=content.DASH.USD;
                        cngd=initdash-dash;
                        document.getElementById("dcp").innerHTML=dash;
                        document.getElementById("cd").innerHTML=cngd.toFixed(4);
                }
            };
            xhttp.open("GET", "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=26dd808c2fb11b0ba21e6812bb913dbe9a657d422d5f868a641bee142c1f4a8d26dd808c2fb11b0ba21e6812bb913dbe9a657d422d5f868a641bee142c1f4a8d", true);
            xhttp.send();
 
 
 
 
 
 
            xhttpB.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    content2= JSON.parse(xhttpB.responseText);
                        console.log(content2);
                        bitcoin=content2.bpi.USD.rate_float;
                        cngb=initbitcoin-bitcoin;
                        document.getElementById("bcp").innerHTML=bitcoin;
                        document.getElementById("cb").innerHTML=cngb.toFixed(4);
                }
            };
            xhttpB.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
            xhttpB.send();
 
 
         }, (5000));

        
 
         // function signup()
         // {
         //    x= document.getElementById("name").value;
         //    // document.getElementById("username").innerHTML=x;
         //    y= document.getElementById("bala").value;
         //    // document.getElementById("availbal").innerHTML=parseInt(y);
         //    console.log(x);
         //    console.log(y);
         //    localStorage.setItem('fullname',x)
         //    localStorage.setItem('balance',y)
         //    // xx=document.getElementById("name");
           


           

         // }
         // function getdata()

         // {
         //    // yy= document.getElementById("bala");
         //    // if(yy.style.display==="none")
         //    // {
         //    //     yy.style.display="inline";
         //    // }
         //     fn=localStorage.getItem('fullname');//full name
         //     ab=localStorage.getItem('balance');//available balance
         //     document.getElementById("username").innerHTML=fn;
         //     document.getElementById("availbal").innerHTML=parseInt(ab);
         //     console.log(fn);
         //     console.log(ab);
         //     if(fn)
         //     {
         //         document.getElementById('btsignup').style.display="none"
         //         document.getElementById('btlogout').style.display="display"
         //         document.getElementById('bal').style.display="display"
         //     }
         //     else{
         //        document.getElementById('btsignup').style.display="block"
         //        document.getElementById('btlogout').style.display="none"
         //        document.getElementById('bal').style.display="none"
         //     }
         // }
         // function logout()
         // {
         //     localStorage.clear();
         //     location.href="index.html";
         // } 
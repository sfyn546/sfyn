var count=0;
a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
a=shuffleArray(a);

function settingarray()
{
   for (var i=0;i<=20;i++)
   {
    document.getElementById("para"+((i+1).toString())).innerText=a[i];
   }

}
function settingarrayRowwise()
{
    document.getElementById("para1").innerText=a[0];
    document.getElementById("para8").innerText=a[1];
    document.getElementById("para15").innerText=a[2];
    document.getElementById("para2").innerText=a[3];
    document.getElementById("para9").innerText=a[4];
    document.getElementById("para16").innerText=a[5];
    document.getElementById("para3").innerText=a[6];
    document.getElementById("para10").innerText=a[7];
  document.getElementById("para17").innerText=a[8];
  document.getElementById("para4").innerText=a[9];
  document.getElementById("para11").innerText=a[10];
  document.getElementById("para18").innerText=a[11];
    document.getElementById("para5").innerText=a[12];
    document.getElementById("para12").innerText=a[13];
    document.getElementById("para19").innerText=a[14];
    document.getElementById("para6").innerText=a[15];
    document.getElementById("para13").innerText=a[16];
    document.getElementById("para20").innerText=a[17];
    document.getElementById("para7").innerText=a[18];
    document.getElementById("para14").innerText=a[19];
    document.getElementById("para21").innerText=a[20];
}

function rowSelector(r)
{

if(count<=2)
{
    merge(r);
}

else
{
window.location.href='index.html';
}
count=count+1;

}

function merge(r)
{
    if(count==0 &&r==0)
    {
    alert("Select the row where you find your Number");
    document.getElementById('nexts').style.display='none';
    }
    b=[a[0],a[3],a[6],a[9],a[12],a[15],a[18]];
    c=[a[1],a[4],a[7],a[10],a[13],a[16],a[19]];

    d=[a[2],a[5],a[8],a[11],a[14],a[17],a[20]];
    var i;
   

   //for(var j=0;j<=6;j++)
    //{
      //  b[j]=a[j+k];
        //c[j]=a[j+7];
        //d[j]=a[j+14];
    //}*/


    if(r==1)
    {
        for(i=0;i<=6;i++)
        {
            a[i]=c[i];
            a[i+7]=b[i];
            a[i+14]=d[i];
        }
    }


    
  else  if(r==2)
    {
        for(i=0;i<=6;i++)
        {
            a[i]=b[i];
            a[i+7]=c[i];
            a[i+14]=d[i];
        }
    }
    
    else if(r==3)
    {
        for(i=0;i<=6;i++)
        {
            a[i]=b[i];
            a[i+7]=d[i];
            a[i+14]=c[i];
        }
    }

   else
   {
    console.log(a); 
   
   }
   
    if(count<2)
    settingarrayRowwise();
    else
    {
    alert("Your Number was  :" +a[10]);

    window.location.href='index.html';
    }
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

return array;

}
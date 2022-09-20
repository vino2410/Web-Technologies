let Active=()=>
{
    //alert("fun called")
    let sm=document.forms['supermarket'].Nname.value
    let sm1=document.forms['supermarket'].Mname.value
    let sm2=document.forms['supermarket'].Ename.value
    let sm3=document.forms['supermarket'].csid.value
    let act=true;
    if (sm.length<=0)
    {
        //alert("error gonna raise")
        document.getElementById("namdet").innerHTML="Name should not be empty"
        act=false;
    }
    
    if (sm1.length<=0)
    {
      document.getElementById("mobdet").innerHTML="Ph Num should not be empty"
      act=false;
    }
    if (sm2.length<=0)
    {
        document.getElementById("emdet").innerHTML="Email should not be empty"
    }
    if (sm3.length<=0)
    {
        document.getElementById("iddet").innerHTML="Customer Id should not be empty"
    }
    return act;
    
}
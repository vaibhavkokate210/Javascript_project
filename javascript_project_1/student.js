let calcy=()=>
{
    let web=document.getElementById("wd").value;
    let math=document.getElementById("maths").value;
    let comp=document.getElementById("comp").value; 
    let phy=document.getElementById("phy").value;
    let grade="";

    let gotMarks=parseFloat(web)+parseFloat(math)+parseFloat(comp)+parseFloat(phy);
    
    let percentage=(gotMarks/400)*100;

    if(percentage>=80 && percentage<=100)
    grade="A+";
    else if(percentage>=60 && percentage<80)
    grade="A";
    else if(percentage>=50 && percentage<60)
    grade="B";
    else if(percentage>=35 && percentage<50)
    grade="C";
    else
    grade="F";

    if(percentage>=35)
    {
        document.getElementById("showData").innerHTML=`You got ${gotMarks} out of 400 & Got ${percentage}%
                    with Grade ${grade}</br>Congrats You are Pass`; 
    }
    else
    {
        document.getElementById("showData").innerHTML=`You got ${gotMarks} out of 400 & Got ${percentage}%
                    with Grade ${grade}</br>Congrats You are Fail`;
    }
}
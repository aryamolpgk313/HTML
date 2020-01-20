function details()
    {
var st=new XMLHttpRequest();
st.onload=function(){  
    var responseObject=JSON.parse(st.responseText);
    var newContent='';
    number=document.getElementById('num').value;
    for (var i=0;i<responseObject.students.length;i++)//loops through object 6
    {
        if(number==responseObject.students[i].Rollno)
        {
        newContent +='<div class="student">';
        newContent +='<p><b>'+responseObject.students[i].Name+'</b><br>';
        newContent +=responseObject.students[i].Rollno+'<br>';
        newContent +=responseObject.students[i].Department+'<br>';
        newContent +=responseObject.students[i].Place+'<br>';
        newContent +=responseObject.students[i].Year+'</p>';
        newContent +='</div>';
    }    
    document.getElementById('content').innerHTML=newContent;//7
    }
  };
st.open('GET','stud.json',true);
st.send(null);//send request 3
    }
    
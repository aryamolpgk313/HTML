var xhr=new XMLHttpRequest();//create XMLHttpRequest object 1
xhr.onload=function(){      //when ready state changes
    //following condition will not work locally-only on a server 
    //if(xhr.ststus===200)    //if server status is ok

    var responseObject=JSON.parse(xhr.responseText);//4
    //Build up string with new content(could also usen DOM manipulation)
    var newContent=''; //5
    for (var i=0;i<responseObject.events.length;i++)//loops through object 6
    {
     newContent +='<div class="event">';
     newContent +='<img src="'+responseObject.events[i].map+'"';
     newContent +='alt="'+responseObject.events[i].location+'"/>';
     newContent +='<p><b>'+responseObject.events[i].location+'</b><br>';
     newContent +=responseObject.events[i].date+'</p>';
     newContent +='</div>';

    }
    //Update the page with the new content
      document.getElementById('content').innerHTML=newContent;//7
};
  xhr.open('GET','data.json',true);//prepare request 2
  xhr.send(null);//send request 3



var audio = new Audio("success.mpeg");
function  displayInConsole(){
    console.log("Hello!!!");
    
    var city1 = document.querySelector('#cname').value;
    console.log("Name of the city is "+city1)
    if(city1 == ""){
        alert('city is empty')
    }
    
    var name = document.querySelector('#name').value;
    console.log("Name of the person is "+name)
    if (name == "") {
        alert("Name must be filled out");
    }
    var cnum = document.querySelector('#cnum').value;
    console.log("Contact number is "+cnum)
    if (cnum == "") {
        alert("Number must be filled out");
    }
    if(cnum.length!=10){
        alert("Enter a valid Phone Number");
    }
    var bgroup = document.querySelector('#bgroup').value;
    console.log(bgroup);
    if(bgroup == ""){
        alert("Blood Group must be filled out");
    }
    var positiveData = document.querySelector('#positive').value;
    console.log(positiveData);
    if(positiveData == ""){
        alert("Please Select Positive Date");
    }
    var negativeData = document.querySelector('#negative').value;
    console.log(negativeData);
    if(negativeData == ""){
        alert("Please Select Negative Date");
    }
    var message = document.querySelector('#subject').value;
    console.log(message);
    
    if(name!=""&&city1!=""&&cnum!=""&&cnum.length==10&&bgroup!=""&&positiveData!=null&&negativeData!=null){
        audio.play();
        console.log("Submitted Successfully!!")
        alert("Submission Successful");
        
    }
    
  }


let form=document.getElementById("form")
form.addEventListener("submit",get_data)
let tbody=document.querySelector("tbody")
let emp_arr=[]
function get_data(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let employee_id=document.getElementById("employee_id").value;
    let department=document.getElementById("department").value;
    let experience=document.getElementById("experience").value;
    let e_mail=document.getElementById("e_mail").value;
    let mobile_no=document.getElementById("mobile_no").value;

    let emp_obj={
        name,
        employee_id,
        department,
        experience,
        e_mail,
        mobile_no
    }
    emp_arr.push(emp_obj)
    intotable(emp_arr)
    
}

function intotable(data){
    tbody.innerHTML="";
    for (i=0;i<data.length;i++){
           row=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=data[i].name;
        let td2=document.createElement("td")
        td2.innerText=data[i].employee_id;
        let td3=document.createElement("td")
        td3.innerText=data[i].department;
        let td4=document.createElement("td")
        td4.innerText=data[i].experience;
        let td5=document.createElement("td")
        td5.innerText=data[i].e_mail;
        let td6=document.createElement("td")
        td6.innerText=data[i].mobile_no;
            td7=document.createElement("td")
        roledecider(data[i].experience)
        let td8=document.createElement("td")
        td8.innerText="Delete";
        td8.addEventListener("click",remove_row)
        td8.setAttribute("class","delete")
        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(row)
        }   
}

function remove_row(){
    event.target.parentNode.remove();
}


function roledecider(experience){
    if(experience<=2){
        td7.innerText="Trainee"
        row.style.backgroundColor="rgb(255, 229, 180)";
    }
   else if(experience>2 && experience<=6){
        td7.innerText="Junior"
        row.style.backgroundColor="rgb(204, 229, 255)";
    }
    else{
        td7.innerText="Senior"
        row.style.backgroundColor="rgb(204, 255, 204)";
    }
}
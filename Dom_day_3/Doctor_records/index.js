let form=document.getElementById("form")

let submit=document.getElementById("submit")

form.addEventListener("submit",get_data)

let table=document.getElementById("table");
let tbody=document.querySelector("tbody");


let doc_arr=[]
function get_data(){
    event.preventDefault();
    let doctor_name=document.getElementById("name")
    let doctor_id=document.getElementById("doctor_id")
    let specialization=document.getElementById("specialization")
    let experience=document.getElementById("experience")
    let e_mail=document.getElementById("e_mail")
    let mobile_no=document.getElementById("mobile_no")
let doc_obj={
    doctor_name:doctor_name.value,
    doctor_id:doctor_id.value,
    specialization:specialization.value,
    experience:experience.value,
    e_mail:e_mail.value,
    mobile_no:mobile_no.value,
}
doc_arr.push(doc_obj)
into_table(doc_arr)

}

function into_table(data){
    tbody.innerHTML="";
    for (i=0;i<data.length;i++){
        let row=document.createElement("tr")
        row.setAttribute("class","itsrow")
        let td1=document.createElement("td")
        td1.innerText=data[i].doctor_name;
        let td2=document.createElement("td")
        td2.innerText=data[i].doctor_id;
        let td3=document.createElement("td")
        td3.innerText=data[i].specialization;
        let td4=document.createElement("td")
        td4.innerText=data[i].experience;
        let td5=document.createElement("td")
        td5.innerText=data[i].e_mail;
        let td6=document.createElement("td")
        td6.innerText=data[i].mobile_no;
            td7=document.createElement("td")
        role_decider(data[i].experience,row);
        let td8=document.createElement("td")
        td8.innerText="Delete";
        td8.addEventListener("click",todelete)
        td8.setAttribute("class","delete")
        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(row)
    }
}

function todelete(){
    event.target.parentNode.remove()
}

function role_decider(experience,row){
    
    if (experience<=3){
        td7.innerText="Trainee"
        row.style.backgroundColor="rgb(255, 229, 180)"
    }
    else if (experience>3 && experience<=5){
        td7.innerText="Junior"
        row.style.backgroundColor="rgb(204, 229, 255)"
    }
    else{
        td7.innerText="Senior"
        row.style.backgroundColor="rgb(204, 255, 204)"
    }
}
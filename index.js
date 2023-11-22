const cardNAme = document.querySelector("#cardNAme");
const personName = document.querySelector("#personName");
const Name = document.querySelector("#name");
const jobTitle = document.querySelector("#jobTitle");
const fin = document.querySelector("#fin");
const age = document.querySelector("#age");
const linkedin = document.querySelector("#linkedin");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const experiance = document.querySelector("#expireance");





const person = {
    fullname:" Yusif Aliev",
    age: 22,
    fin:"xxxxxx",
    linkedin:"https://www.linkedin.com/in/yusif-aliev-079a661a7/",
    phone: +994554671749,
    email:"yusif.aliyev.25@mail.ru",
    expireance:"2 years",
    jobs:[
        {job1:"SakurAz"},
        {job2:"EAcamp"},
        {job3: "remote job"}
    ]
}

Name.innerHTML = person.fullname;
jobTitle.innerHTML = person.jobs[1].job2;
fin.innerHTML = person.fin;
age.innerHTML = person.age;
fin.innerHTML = person.fin;
linkedin.innerHTML = person.linkedin;
phone.innerHTML = person.phone;
experiance.innerHTML = person.expireance;
email.innerHTML= person.email;

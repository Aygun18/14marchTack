let name = document.querySelector("#name")
let surname = document.querySelector("#surname")
let age = document.querySelector("#age")
let gender = document.getElementsByName("Radio")
let email = document.querySelector("#email")
let submit = document.querySelector("#submit")
let tbody = document.querySelector("#tbody")
var valueGender = "";
var checkedRadio = 0;


submit.addEventListener("click", function () {
    if ((name.value == "" && surname.value == "" && age.value == "" && email.value == "") && (gender[0].checked == false || gender[1].checked == false)) {
        window.alert("Please fill in all fields before submitting");
    }
    else {
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                valueGender = gender[i].value;
                console.log(valueGender);
                checkedRadio = i;
            }
        }
        tbody.innerHTML += `<tr>
            <td>${name.value}</td>
            <td>${surname.value}</td>
            <td>${age.value}</td>
            <td>${valueGender}</td>
            <td>${email.value}</td>
                 </tr>`
        name.value = "";
        surname.value = "";
        age.value = "";
        email.value = "";
        gender[checkedRadio].checked = false;
    }
})
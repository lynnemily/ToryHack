window.onload = readjson;

function readjson(event){
    var urlParams = new URLSearchParams(window.location.search);
    var userIDInput = urlParams.get('name');
    console.log(userIDInput);
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data.CompanyData[0].UserID);
        for(let i=0; i<data.CompanyData.length; i++)
        {
            console.log("user id input", userIDInput, "data user id", data.CompanyData[i].UserID.toString().trim());
            if(userIDInput == data.CompanyData[i].UserID){
                    var companyhello = document.querySelector(".companyName");
                    companyhello.innerHTML = data.CompanyData[i].Company;
                    var contacthello = document.querySelector(".contact");
                    contacthello.innerHTML = data.CompanyData[i].Contact;
            }
        }
    

    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function redirect() {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        var userIDInput = document.querySelector(".form-container > input[name='UserID']").value;
        console.log(data.CompanyData[0].UserID);
        for(let i=0; i<data.CompanyData.length; i++)
        {
            if(userIDInput == data.CompanyData[i].UserID){
                window.location.href = "company.html?name="+ data.CompanyData[i].UserID;
            }
        }
    });
}

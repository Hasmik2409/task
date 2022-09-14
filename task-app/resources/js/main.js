
async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }


    return response.json();
}


async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });

        if(responseData.global_error){
            globalErr();
            return ;
        }
        success();
        return responseData;
    } catch (error) {
        let errors = JSON.parse(error.toString().slice(7)).errors;
        isInserted(errors);
        return error;
    }
}


const myForm = document.getElementById('myForm');
myForm.addEventListener('submit',handleFormSubmit);


function insertData(errors){
    for (let key in errors){
        let className = document.getElementsByClassName(key);
        let input = className[0];
        let errorTag = className[1];

        errorTag.innerHTML = errors[key];
        errorTag.style.display = "block";
        input.style.borderColor = "red";
        errorTag.style.position = "absolute";
    }

}

function isInserted(errors){
    let inputNames = ['full_name', 'email', 'address', 'notes'];


    inputNames.forEach((notError) => {
        let className = document.getElementsByClassName(notError);
        let input = className[0];
        let errorTag = className[1];
        errorTag.innerHTML = '';
        errorTag.style.display = "none";
        input.style.borderColor = "#00000000";
        errorTag.style.position = "static";
    })
    insertData(errors);
}

function success(){
    let containerTag = document.getElementsByClassName('container');
    let container = containerTag[0];
    container.style.display = "none"

    let errAlert = document.getElementsByClassName('alert');
    let alert = errAlert[0];
    alert.style.display = "none"

    let popupTag = document.getElementsByClassName('popup');
    let popup = popupTag[0];
    popup.style.display = "block";
    document.body.style.backgroundColor = "#CCCCCCFF"
}

function globalErr(){
    let errPopup = document.getElementsByClassName('alert');
    let globalAlert = errPopup[0];
    globalAlert.style.display = "block";
}



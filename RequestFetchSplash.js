const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
.then(response => {
    if(response.status === 200) {
        return response.json();
    }
}).then(data => console.log(data))
.catch(err => console.log(err));
 
let imagelink;


function submitHandler() {
    console.log("click");
    const fileInput = document.getElementById('fileInput');
    
    console.log(fileInput.files);
    const image = fileInput.files[0];

    // ===============Multipart file=====================
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = 'S8MJUJYbRRoVgQ6q6BUu4ceF';

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey
        },
        body: formData
    })
        .then(function (reponse) {
            return reponse.blob()
        })
        .then(function (blob) {
            console.log(blob);
            const url = URL.createObjectURL(blob);
            imagelink = url;
            const img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);
        })
        .catch();
}


function downloadFile() {
    let a = document.createElement('a'); //<a></a>
    a.href = imagelink;
    a.download = 'A-newDownload.png';
    document.body.appendChild(a);
    let anchorElement = document.createElement('a'); //<a></a>
    anchorElement.href = imagelink;
    anchorElement.download = 'A-newDownload.png';
    document.body.appendChild(anchorElement);

    a.click();
    anchorElement.click();

    document.body.removeChild(a);
    document.body.removeChild(anchorElement);
}


 

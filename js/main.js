fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(res => {


        res.json().then(data => {
            $(document).ready(() => {
                for(i=0; i<data.length; i++){
                    $('figure').append(`<img src=${data[i].url}></img>`)
                }
            });
            console.log(data[0]);
        });
    });
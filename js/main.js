// fetch('https://jsonplaceholder.typicode.com/photos/')
//     .then(res => {


//         res.json().then(data => {
//             $(document).ready(() => {
//                 for(const obj of data){
//                     $('figure').append(`<img src=${obj.url}></img>`)
//                 }
//             });
//         });
//     })
//     .catch(error => console.log(error))



function filterID() {
    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(res => {
        if(!res.ok){
            console.log('Something Wrong!');
            return;
        }

        res.json()
        .then(data => {
            $(document).ready(()=>{

                $('figure').empty();

                const selectValue = document.forms["selectPhoto_form"]["photoID"].value;
                let imgNum = 0;
                let startIndex = 0;

                if(selectValue == 'all'){
                    startIndex = 0;
                    imgNum = 500;
                }else{
                    startIndex = parseInt(selectValue);
                    imgNum = 100;
                }

                for(i=startIndex; i<startIndex+imgNum; i++){
                    $('figure').append(`<div><img src=${data[i].url}></img><h3>Title: ${data[i].title}</h3><h4>Album ID: ${data[i].albumId}</h4><h4>ID: ${data[i].id}</h4></div>`)
                }
            })
        });
    })
}
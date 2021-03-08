// fetch('https://jsonplaceholder.typicode.com/photos/')
//     .then(res => {


//         res.json().then(data => {
//             $(document).ready(() => {
//                 for(const imgData of data){
//                     $('figure').append(`<img src=${imgData.url}></img>`)
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
                let startIndex = 0;
                let endIndex = 0;

                // $('figure').append(`<img src=${data.filter((value, index) => {
                    
                
                //     if(index==0){
                //         return value;
                //     }
                // }).url}></img>`)

                
                switch(selectValue){
                    case 'all':
                        startIndex = 0;
                        endIndex = data.length;
                        break;
                    case '0':
                        startIndex = 0;
                        endIndex = 100;
                        break;
                    case '100':
                        startIndex = 100;
                        endIndex = 200;
                        break;
                    case '200':
                        startIndex = 200;
                        endIndex = 300;
                        break;
                    case '300':
                        startIndex = 300;
                        endIndex = 400;
                        break;
                    case '400':
                        startIndex = 400;
                        endIndex = 500;
                        break;
                };

                for(i=startIndex; i<endIndex; i++){
                    $('figure').append(`<div><img src=${data[i].url}></img><h3>Title: ${data[i].title}</h3><h4>Album ID: ${data[i].albumId}</h4><h4>ID: ${data[i].id}</h4></div>`)
                }
                
                
            })
        });
    })
}
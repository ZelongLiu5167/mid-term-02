window.addEventListener('load', () => {
    document.getElementById('button-comic').addEventListener('click', () => {
        let nacomic = document.getElementById('answer-comic').value;
        console.log(nacomic);

        // creating the object 
        let obj = {"name": nacomic};

        // stringify the object
        let jsonData = JSON.stringify(obj);

        fetch('/nacomic', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {console.log(data)});
    });

    document.getElementById('record-comic').addEventListener('click', () => {

        fetch('/getcomic')
        .then(resp => resp.json())
        .then(data => {
            document.getElementById('list-comic-01').innerHTML = '';
            document.getElementById('list-comic-02').innerHTML = '';
            document.getElementById('list-comic-03').innerHTML = '';
            document.getElementById('list-comic-04').innerHTML = '';
            document.getElementById('list-comic-05').innerHTML = '';
            document.getElementById('list-comic-06').innerHTML = '';
            console.log(data.data);

            if (data.data.length > 0) {
                const selectedIndexes = new Set();

                while (selectedIndexes.size < 6) {
                    const randomIndex = Math.floor(Math.random() * data.data.length);
                    selectedIndexes.add(randomIndex);
                }


                const [randomIndex1, randomIndex2, randomIndex3, randomIndex4, randomIndex5, randomIndex6] = [...selectedIndexes];


                let elt1 = document.createElement('p');
                elt1.innerHTML = data.data[randomIndex1].comic;
                document.getElementById('list-comic-01').appendChild(elt1);

                let elt2 = document.createElement('p');
                elt2.innerHTML = data.data[randomIndex2].comic;
                document.getElementById('list-comic-02').appendChild(elt2);

                let elt3 = document.createElement('p');
                elt3.innerHTML = data.data[randomIndex3].comic;
                document.getElementById('list-comic-03').appendChild(elt3);

                let elt4 = document.createElement('p');
                elt4.innerHTML = data.data[randomIndex4].comic;
                document.getElementById('list-comic-04').appendChild(elt4);

                let elt5 = document.createElement('p');
                elt5.innerHTML = data.data[randomIndex5].comic;
                document.getElementById('list-comic-05').appendChild(elt5);

                let elt6 = document.createElement('p');
                elt6.innerHTML = data.data[randomIndex6].comic;
                document.getElementById('list-comic-06').appendChild(elt6);
            } else {

                document.getElementById('list-comic-01').innerHTML = '<p>No comic records found.</p>';
                document.getElementById('list-comic-02').innerHTML = '<p>No comic records found.</p>';
                document.getElementById('list-comic-03').innerHTML = '<p>No comic records found.</p>';
                document.getElementById('list-comic-04').innerHTML = '<p>No comic records found.</p>';
                document.getElementById('list-comic-05').innerHTML = '<p>No comic records found.</p>';
                document.getElementById('list-comic-06').innerHTML = '<p>No comic records found.</p>';
            }
        });
    });
});

const recordcomicButton = document.getElementById("record-comic");
const comicImages = document.querySelectorAll(".image-item img"); 
const comicLists = document.querySelectorAll(".list-comic");
const comicFont = document.querySelectorAll(".input-container");



recordcomicButton.addEventListener("click", () => {
    comicLists.forEach(img => {
        img.style.display = "block"; 
    });
});
recordcomicButton.addEventListener("click", () => {
    comicImages.forEach(img => {
        img.style.display = "block"; 
    });
});
recordcomicButton.addEventListener("click", () => {
    comicFont.forEach(img => {
        img.style.display = "none"; 
    });
});
 
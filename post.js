function loadData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => displayPost(data))
  }

  loadData();

  function displayPost(datas) {
    // console.log(datas);
    const postBox = document.getElementById('post');
    for (const data of datas){
        const createdDiv = document.createElement('div');
        createdDiv.classList.add('box');
        // console.log(data);
        createdDiv.innerHTML=`
        <h3>Title: ${data.title}</h3>
        <h5>ID: ${data.id}</h5>
        <p>Des: ${data.body}</p>`

        postBox.appendChild(createdDiv);
    }
  }
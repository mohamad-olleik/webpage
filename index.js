fetch('https://trainingapi-wuay.onrender.com/data')
      .then(response => response.json())
      .then(json => {
        let users=document.getElementById('users');
        json.forEach(element => {
            let user=document.createElement('option');
            user.innerHTML=element;
            users.appendChild(user);

            
        });
      })

      alert('full stack training')
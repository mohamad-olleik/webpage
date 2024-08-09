fetch('https://trainingapi-wuay.onrender.com/data')
      .then(response => response.json())
      .then(json => console.log(json))

      alert('full stack training')
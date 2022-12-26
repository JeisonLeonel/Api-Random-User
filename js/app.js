document.addEventListener('DOMContentLoaded',() => {
    feachData();
})
const feachData = async() => {
    try {
        const res = await fetch('https://randomuser.me/api?gender')
        const data = await res.json()
        apiRandom(data)
    }
    catch(error) {
    }
};

function apiRandom(user) {

    const select = document.getElementById('gender').value;
    const main = document.querySelector('.content-main');    
    const template = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    const clone = template.cloneNode(true);

    if (select.value === 'men' && user.results[0].gender === 'male') {
        clone.querySelector('.img-card').setAttribute('src', user.results[0].picture.large);
        clone.querySelector('#name').innerHTML = `${user.results[0].name.first} ${user.results[0].name.last}`;
        clone.querySelector('#mail').innerHTML = user.results[0].email;
        clone.querySelector('#cumple').innerHTML = user.results[0].dob.date;
        clone.querySelector('#map').innerHTML = `${user.results[0].location.street.number} ${user.results[0].location.street.name} `  
        clone.getElementById('phone').innerHTML = user.results[0].phone;
        clone.querySelector('#password').innerHTML = user.results[0].login.password;
        
        fragment.appendChild(clone); 
        main.appendChild(fragment); 

    }

    else if (select.value === 'woman' && user.results[0].gender === 'female'){
        clone.querySelector('.img-card').setAttribute('src', user.results[0].picture.large);
        clone.querySelector('#name').innerHTML = `${user.results[0].name.first} ${user.results[0].name.last}`;
        clone.querySelector('#mail').innerHTML = user.results[0].email;
        clone.querySelector('#cumple').innerHTML = user.results[0].dob.date;
        clone.querySelector('#map').innerHTML = `${user.results[0].location.street.number} ${user.results[0].location.street.name} `  
        clone.getElementById('phone').innerHTML = user.results[0].phone;
        clone.querySelector('#password').innerHTML = user.results[0].login.password;
        
        fragment.appendChild(clone);  
        main.appendChild(fragment);
    }

    else {
        clone.querySelector('.img-card').setAttribute('src', user.results[0].picture.large);
        clone.querySelector('#name').innerHTML = `${user.results[0].name.first} ${user.results[0].name.last}`;
        clone.querySelector('#mail').innerHTML = user.results[0].email;
        clone.querySelector('#cumple').innerHTML = user.results[0].dob.date;
        clone.querySelector('#map').innerHTML = `${user.results[0].location.street.number} ${user.results[0].location.street.name} `  
        clone.getElementById('phone').innerHTML = user.results[0].phone;
        clone.querySelector('#password').innerHTML = user.results[0].login.password;

        fragment.appendChild(clone);  
        main.appendChild(fragment);
    }
    console.log(user.results[0].gender)
}
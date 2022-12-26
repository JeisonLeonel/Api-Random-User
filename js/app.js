const select = document.getElementById('gender');
const male = document.getElementById('male');
const female = document.getElementById('female');

select.addEventListener('change',  (event)=> {

    female.addEventListener('click', () => {
        selectFemale();
    })

    male.addEventListener('click', () => {
        selectMale();
    })

    if(event.target.value === 'female'){
        selectFemale();
    }
    else if(event.target.value === 'male'){
        selectMale();
    }
})

const selectMale = async() => {
        const res = await fetch('https://randomuser.me/api/?gender=male')
        const data = await res.json()
        dataPerson(data); 
};
const selectFemale = async() => {
        const res = await fetch('https://randomuser.me/api/?gender=female')
        const data = await res.json()
        dataPerson(data);
}

/*ocument.addEventListener('DOMContentLoaded',() => {
    feachData();
})*/

const dataPerson = (data) => {
    const persona = {
        img : data.results[0].picture.large,
        nombre : data.results[0].name.first,
        apellido : data.results[0].name.last,
        cumpleaños : data.results[0].dob.date,
        email : data.results[0].email,
        calleNumber : data.results[0].location.street.number,
        calleName : data.results[0].location.street.name,
        telefono : data.results[0].phone,
        contraseña : data.results[0].login.password
    }
    apiRandom(persona);
}

/*const feachData = async() => {
    try {
        const res = await fetch('https://randomuser.me/api')
        const data = await res.json()

        dataPerson(data)
    }
    catch(error) {
        console.log(error)
    }
};*/

const apiRandom = (user) => {
    
    const main = document.querySelector('.content-main');    
    const template = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    const clone = template.cloneNode(true);

    clone.querySelector('.img-card').setAttribute('src', user.img);
    clone.querySelector('#name').innerHTML = `${user.nombre} ${user.apellido}`;
    clone.querySelector('#mail').innerHTML = user.email;
    clone.querySelector('#cumple').innerHTML = user.cumpleaños;
    clone.querySelector('#map').innerHTML = `${user.calleNumber} ${user.calleName} `  
    clone.getElementById('phone').innerHTML = user.telefono;
    clone.querySelector('#password').innerHTML = user.contraseña;

    fragment.appendChild(clone);  
    main.appendChild(fragment);
};
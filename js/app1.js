const select = document.querySelector('#gender');
const male = document.querySelector('#male');
const female = document.querySelector('#female');

select.addEventListener('change',  (event)=> {

    female.addEventListener( 'click', (event) => {
        selectFemale();
    })

    male.addEventListener( 'click', (event) => {
        selectMale();
    })

    if(event.target.value === 'female'){
        selectFemale();
    }else if(event.target.value === 'male'){
        selectMale();
    }
})
    
const selectFemale = async () => {
    const res = await fetch(`https://randomuser.me/api/?gender=female`)
    const data = await res.json();
    dataPerson(data);
}
const selectMale = async () => {
    const res = await fetch(`https://randomuser.me/api/?gender=male`)
    const data = await res.json();
    dataPerson(data);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const dataPerson = (data) =>{
    const user = {
        img : data.results[0].picture.large,
        nombre : data.results[0].name.first,
        apellido : data.results[0].name.last,
        cumpleanos : data.results[0].dob.date,
        email : data.results[0].email,
        telefono : data.results[0].phone,
        calleNumber : data.results[0].location.street.number,
        calleName : data.results[0].location.street.name,
        contraseña : data.results[0].login.password
    }
    
    
    pintarCard(user);
}

const fetchData = async () =>{
    try {
        const res = await fetch(`https://randomuser.me/api/`);
        const data = await res.json();

        dataPerson(data);

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCard = (user) => {
    const main = document.querySelector('.content-main');    
    const template = document.getElementById('template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.img-card').setAttribute('src', user.img);
    clone.querySelector('#name').textContent = `${user.nombre} ${user.apellido}`;
    clone.querySelector('#mail').textContent = user.email;
    clone.querySelector('#cumple').textContent = user.cumpleaños;
    clone.querySelector('#map').textContent = `${user.calleNumber} ${user.calleName} `  
    clone.getElementById('phone').textContent = user.telefono;
    clone.querySelector('#password').textContents = user.contraseña;

    fragment.appendChild(clone);
    main.appendChild(fragment);
}
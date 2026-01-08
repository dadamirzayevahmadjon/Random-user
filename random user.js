const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')
const userName =document.querySelector
// refresh
formButton.addEventListener('click', (e) => {
  e.preventDefault()
  reload()
  clearBtn.classList.remove('hidden')
} )

// search by name
form["form__input"].addEventListener('input', () => {
  const inputValue = form['form_input'].value.toLowerCase
 const name = document.querySelectorAll('.user_name')
 console.log(name)

 name.forEach((item) => {
   if(item.lastElementChild.textContent.toLowerCase().includes(inputValue)
   ){
   item.parentElement.classList.remove('hidden')
   }else{
    item.parentElement.classList.add('hidden')
   }
  })

})



//clear
clearBtn.addEventListener('click', (e) => {
  e.preventDefault()
  user.innerHTML=''
  clearBtn.classList.add('hidden')
})



//get result and update UI

const updateUI =(data) => {
user.innerHTML = ''
data.forEach((element) => {
    console.log(item)
    const {gender, name, picture, location , dob} = item
})
}
 user.innerHTML += `

 <ul id="user" class="user">
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="${picture.large}"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>-${name.title}${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${dob.age}</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-${location.city}, ${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>-Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="real madrid.jpg"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhmadjon Dadamirzaev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 13 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Namangan, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
          </ul>
          `

// delete user
document.addEventListener('click',(e) => {
  if(e.target.classList [0] === 'user_delete--btn') {
    e.target.parentElement.remove()
  }
 console.log(user.children.length)
  if(!user.children.length) {
    clearBtn.classList.add('hidden')
  }
})






























































































































































































































































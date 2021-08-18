let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let openPopup = () => {
    popup.classList.add('popup_active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

let closePopup = () => {
    popup.classList.remove('popup_active');
}

let formSubmitHandler = evt => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
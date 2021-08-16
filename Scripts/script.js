let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__text_name');
let profileJob = document.querySelector('.profile__text_job');

let popupOpen = () => {
    popup.classList.add('popup_active');
}
let popupClose = () => {
    popup.classList.remove('popup_active');
}
let formSubmitHandler = evt => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}
let editProfile = () => {
    popupOpen();
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', editProfile);
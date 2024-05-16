import 'animate.css';

// Importer la bibliothèque Animate.css

// Sélectionner l'élément que vous souhaitez animer
const element = document.querySelector('.votre-element');

// Ajouter une classe d'animation à l'élément
element.classList.add('animate__animated', 'animate__fadeIn');

// Écouter l'événement de fin d'animation
element.addEventListener('animationend', () => {
    // Code à exécuter après la fin de l'animation
});
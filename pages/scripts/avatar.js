// // Floating Avatar Setup
// const avatar = document.createElement('img');
// avatar.src = 'assets/avatar.png'; // avatar image
// avatar.alt = 'Assistant Avatar';
// avatar.id = 'floating-avatar';
// document.body.appendChild(avatar);

// // Style Avatar via JS
// Object.assign(avatar.style, {
//   position: 'fixed',
//   width: '60px',
//   height: '60px',
//   pointerEvents: 'none',
//   zIndex: 9999,
//   transition: 'transform 0.1s ease-out',
// });

// // Update Avatar Position on Mouse Move
// document.addEventListener('mousemove', (e) => {
//   avatar.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`;
// });



// Revised from the above code and works
const avatar = document.querySelector('.floating-avatar');

document.addEventListener('mousemove', (e) => {
  if (avatar) {
    avatar.style.left = `${e.clientX}px`;
    avatar.style.top = `${e.clientY}px`;
  }
});

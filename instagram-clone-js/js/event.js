
const buttons = document.querySelectorAll('.icon-btn');
// console.log(buttons);

buttons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const pushed = event.target.textContent;
    const attached = event.currentTarget.textContent;

    console.log(
      `눌린 것: ${pushed} · 리스너를 붙인 것: ${attached} · 둘이 같은가${event.target === event.currentTarget}`,
    );
  });
});

const navs = document.querySelectorAll('#navList > li');
const sections = document.querySelectorAll('section');

navs.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    sections.forEach((sec, i) => {
      sec.classList.add('hidden');
      navs[i].classList.remove('active');
    });
    ele.classList.add('active');
    sections[index].classList.remove('hidden');
  });
});

(function(){
  const dropdown = document.getElementById('classic-dropdown');
  if(!dropdown) return;

  const toggle = dropdown.querySelector('.dropdown-toggle');
  const list = dropdown.querySelector('.dropdown-list');
  const items = Array.from(list.querySelectorAll('li'));
  let focusedIndex = 0;
  const TRANSITION_MS = 360;

  function openDropdown(){
    dropdown.classList.add('open');
    dropdown.setAttribute('aria-expanded','true');
    list.focus();
    items.forEach(i => i.setAttribute('aria-selected','false'));
    items[focusedIndex].setAttribute('aria-selected','true');
  }
  function closeDropdown(){
    dropdown.classList.remove('open');
    dropdown.setAttribute('aria-expanded','false');
  }

  function animateAndNavigate(href){
    if(!href) { closeDropdown(); return; }
    document.body.classList.add('page-exit');
    requestAnimationFrame(()=> document.body.classList.add('page-exit-active'));
    setTimeout(()=> {
      window.location.href = href;
    }, TRANSITION_MS);
  }

  function selectIndex(i){
    const item = items[i];
    if(!item) return;
    const labelText = item.textContent.trim();
    const arrow = toggle.querySelector('.arrow');
    toggle.textContent = labelText;
    if(arrow) toggle.appendChild(arrow);
    const href = item.getAttribute('data-href');
    animateAndNavigate(href);
  }

  toggle.addEventListener('click', (e)=>{
    if(dropdown.classList.contains('open')) closeDropdown(); else openDropdown();
  });

  items.forEach((it, idx)=>{
    it.addEventListener('click', (ev)=> {
      ev.preventDefault();
      selectIndex(idx);
    });
    it.addEventListener('mouseover', ()=> {
      items.forEach(i=> i.setAttribute('aria-selected','false'));
      it.setAttribute('aria-selected','true');
      focusedIndex = idx;
    });
  });
  dropdown.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowDown'){ e.preventDefault(); focusedIndex = Math.min(items.length-1, focusedIndex+1); items.forEach(i=> i.setAttribute('aria-selected','false')); items[focusedIndex].setAttribute('aria-selected','true'); items[focusedIndex].scrollIntoView({block:'nearest'}); }
    if(e.key === 'ArrowUp'){ e.preventDefault(); focusedIndex = Math.max(0, focusedIndex-1); items.forEach(i=> i.setAttribute('aria-selected','false')); items[focusedIndex].setAttribute('aria-selected','true'); items[focusedIndex].scrollIntoView({block:'nearest'}); }
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); if(!dropdown.classList.contains('open')) openDropdown(); else selectIndex(focusedIndex); }
    if(e.key === 'Escape'){ closeDropdown(); }
  });
  document.addEventListener('click', (e)=>{
    if(!dropdown.contains(e.target)) closeDropdown();
  });
  document.body.classList.add('page-enter');
  requestAnimationFrame(()=> {
    document.body.classList.add('page-enter-active');
    setTimeout(()=> {
      document.body.classList.remove('page-enter');
      document.body.classList.remove('page-enter-active');
    }, TRANSITION_MS);
  });

})();
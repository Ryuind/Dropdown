

function dropdownFunc() {
    document.querySelector('[data-dropdown-list]').classList.toggle('showDropdown');
}

document.querySelector('[data-dropdown-button]').addEventListener('click', dropdownFunc);

window.onclick = function(event) {
    if (!event.target.matches('[data-dropdown-button]')) {
      let dropdowns = document.querySelectorAll('[data-dropdown-list]');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showDropdown')) {
          openDropdown.classList.remove('showDropdown');
        }
      }
    }
  }

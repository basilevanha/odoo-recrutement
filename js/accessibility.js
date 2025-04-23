// This script enhances the accessibility of the navigation menu by adding keyboard navigation support.
document.querySelectorAll('[js-nav-horizontal] [js-nav-link]').forEach((tab, index, allTabs) => {
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        allTabs[(index + 1) % allTabs.length].focus();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        allTabs[(index - 1 + allTabs.length) % allTabs.length].focus();
      }
    });
  });

  document.querySelectorAll('[js-nav-vertical] [js-nav-link]').forEach((tab, index, allTabs) => {
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        allTabs[(index + 1) % allTabs.length].focus();
      }
      if ( e.key === 'ArrowUp') {
        e.preventDefault();
        allTabs[(index - 1 + allTabs.length) % allTabs.length].focus();
      }
    });
  });
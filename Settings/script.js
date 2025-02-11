document.addEventListener('DOMContentLoaded', () => {
  // Sidebar navigation
  const menuItems = document.querySelectorAll('.sidebar li');
  const sections = document.querySelectorAll('.settings-section');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active state from all menu items
      menuItems.forEach(i => i.classList.remove('active'));
      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));
      // Activate clicked menu item and show corresponding section
      item.classList.add('active');
      const sectionToShow = document.getElementById(item.getAttribute('data-section'));
      if (sectionToShow) {
        sectionToShow.classList.add('active');
      }
    });
  });

  // Toggle sidebar minimization
  const toggleSidebarBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('minimized');
  });

  // Toggle Dark Mode styling dynamically for Appearance settings
  const darkModeCheckbox = document.getElementById('darkMode');
  darkModeCheckbox && darkModeCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.style.color = '#eee';
    } else {
      document.body.style.backgroundColor = '#f4f6f8';
      document.body.style.color = '#333';
    }
  });
});

// Mock save function to simulate settings saving
function saveSettings(section) {
  alert(`${section} settings have been saved!`);
}
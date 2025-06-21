document.addEventListener("DOMContentLoaded", function () {
  const sidebarTrigger = document.getElementById('main-header_sidebar-toggle');

  sidebarTrigger.addEventListener('click', function () {
    document.body.classList.toggle('sidebar-open');
  });
});
function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        if (!event.target.matches('.dropbtn, .dropbtn img')) {
            if (dropdowns[i].style.display === 'block') {
                dropdowns[i].style.display = 'none';
            }
        }
    }
}

function myFunction(){
    const dummy1 = document.getElementById('dummy1');
    const checkbox = document.getElementById('sidebar-active');
    const open = document.getElementById('open');
    if(checkbox.checked == true){
        open.style.display = "none";
        dummy1.style.display = "block";
    }
    else{
        open.style.display = "block";
        dummy1.style.display = "none";
    }
}
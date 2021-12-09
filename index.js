var roomtext = document.querySelector('#roomid');

function handle(e) {
    e.preventDefault()
}

roomtext.addEventListener('change', () => {
    if (roomtext.value !== 'CX10019AB') {
        var joinpage = document.querySelector('.joinlink');
        var x = joinpage.addEventListener('click', handle);
        roomtext.style.background = '#ff2222';

        alert('Please enter correct room code');
    } else {
        var joinpage = document.querySelector('.joinlink');
        joinpage.removeEventListener('click', handle);
        roomtext.style.background = '#52ff00';
    }
});
(function(){
    const txtMessage = document.getElementById('message');
    const btnSave = document.getElementById('saveBtn');

    btnSave.addEventListener('click',function(){
        var firebaseRef = firebase.database();
        var message = txtMessage.value;
        firebaseRef.ref('users/' + "sujeets207/data").push({ message});
    })
})();
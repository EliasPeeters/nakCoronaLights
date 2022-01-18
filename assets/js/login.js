function login() {
    let form = document.getElementById("form");

    var pwdObj = document.getElementById('pwd');
    var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(pwdObj.value);
    var hash = hashObj.getHash("HEX");

    pwdObj.value = hash;
    console.log(hash)

    form.submit();
}

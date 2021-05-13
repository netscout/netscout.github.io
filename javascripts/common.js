function copyToClipboard(elId) {
    console.log(elId);
    const el = document.getElementById(elId);

    var tempElem = document.createElement('textarea');
    tempElem.value = el.innerText;
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
}

const rand_0_100000 = () => Math.floor(Math.random() * 100001);
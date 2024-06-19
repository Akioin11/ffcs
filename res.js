const subs = {
    'MAT': {
        'Link': 'https://drive.google.com/drive/folders/\n1TAZ6zXNSp52osmmJLtnFteFaZRWw8UaN?usp=sharing',
    },
    'CHY': {
        'Link': 'https://drive.google.com/drive/folders/1O\noCrLh0BBA1H6d-BTCRN96kw_8G_d9eU?usp=sharing',
    },
    'CSE': {
        'Link': 'https://drive.google.com/drive/folders/1QDG\n35uQJaDkVJjGL_880f2GPrqZ9HHiH?usp=sharing',
    },
    'EEE': {
        'Link': 'https://drive.google.com/drive/folders/1BBrLyL92ognwOMVdqbt_WOWtTFXZOzkP?usp=sharing',
    },
    'PHY': {
        'Link': 'https://drive.google.com/drive/folders/1jWkpIwzHXxKHLWIIRA3KTH8EQADCJ_IK?usp=sharing',
    },
    'ENG': {
        'Link': 'https://drive.google.com/drive/folders/1kMODA7_lkoXGImE-XMYeefPtv-XWZCA3?usp=sharing',
    },
    'HUM': {
        'Link': 'https://drive.google.com/drive/folders/1luZOzHLdsIW_L66HBQ_nz2ZXCoigQgn-?usp=sharing',
    },
    'CSA': {
        'Link': 'https://drive.google.com/drive/folders/1Yz0mIB-KL_iTWkG1rHfFP9Rd2CTNX2ZU?usp=sharing',
    },

};

var originalDropdownOptions1 = Array.from(document.getElementById("dropdownres").options);

function filterDropdownres() {
    var subjectinput = document.getElementById("subjectinput").value.toLowerCase();
    var dropdownres = document.getElementById("dropdownres");

    dropdownres.innerHTML = "";

    var filteredOptions1 = originalDropdownOptions1.filter(function (option) {
        return option.text.toLowerCase().includes(subjectinput);
    });

    for (var i = 0; i < filteredOptions1.length; i++) {
        dropdownres.appendChild(filteredOptions1[i]);
    }
}

document.getElementById("submitres").addEventListener('click', function () {
    let dropdownr = document.getElementById("dropdownres");
    let selectedres = dropdownr.value;

    if (selectedres in subs) {
        let subject = document.getElementById("subject");
        let Link = subs[selectedres]['Link'];
        let clickh = `Click Here!`
        subject.innerHTML = `<a href="${Link}" target="_blank">${Link}</a><br>`;
    } else {
        let subject = document.getElementById("subject");
        subject.innerHTML = `Please Select a Course from the Dropdown list`;
        subject.setAttribute("style", `color: #f0ff00;`);
    }
});




document.getElementById("submitres").addEventListener('click', function () {
    let dropdownr = document.getElementById("dropdownres");
    let selectedres = dropdownr.value;

    if (selectedres in subs) {
        let subject = document.getElementById("subject");
        let Link = subs[selectedres]['Link'];
        subject.innerHTML = `<a href="${Link}" target="_blank">${Link}</a><br>`;
    } else {
        let subject = document.getElementById("subject");
        subject.innerHTML = `Please Select a Course from the Dropdown list`;
    }
});

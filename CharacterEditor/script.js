const anzahlSpalten = [];
const muster = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', 'rgb(189, 20, 20)', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

function load(eingabe) {
    if (eingabe != null) {
        document.getElementById('grid-container').innerHTML = '';
        for (let i = 0; i < eingabe * eingabe; i++) {
            document.getElementById("grid-container").insertAdjacentHTML("beforeend", '<div class="grid-item" id="feld' + i + '"></div>');
            // if (i = 0) {
            //     document.getElementsByTagName('head')[0].appendChild('<style> #div-container {display:grid; grid-template-areas}')
            // }
        }
    } else {
        for (let i = 0; i < 256; i++) {
            document.getElementById("grid-container").insertAdjacentHTML("beforeend", '<div class="grid-item" id="feld' + i + '"></div>');
        }
    }
    // for (let i = 0; i < 16; i++) {

    // }
    const feld = document.querySelectorAll('.grid-item');
    for (let i = 0; i < feld.length; i++) {
        feld[i].addEventListener('mousedown', () => {
            document.getElementById('feld' + i).style.backgroundColor = document.getElementById('farbAuswahl').value;
        })
    }

    document.getElementById('rainbow').addEventListener('click', () => {
        for (let i = 0; i < feld.length; i++) {
            feld[i].addEventListener('mousedown', () => {
                document.getElementById('feld' + i).style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            })
        }
    })

    document.getElementById('groesse').innerHTML = '';

    document.getElementById('groesse').innerHTML = eingabe ? anzahlSpalten.length + 'x' + anzahlSpalten.length : '32x32';

    document.getElementById('farbAuswahl').addEventListener('change', () => {
        for (let i = 0; i < feld.length; i++) {
            feld[i].addEventListener('mouseover', () => {
                document.getElementById('feld' + i).style.backgroundColor = document.getElementById('farbAuswahl').value;
            })
        }
    })


    document.getElementById('speicherplatz1').addEventListener('click', () => {
        muster.length = 0;
        for (let i = 0; i < feld.length; i++) {
            muster.push(document.getElementById('feld' + i).style.backgroundColor);
        }
        let avatar1 = {
            muster : muster,
        }
        document.getElementById("saving").innerHTML = "Saving...";
        document.getElementById("saving").style.animation="saveAnim 1s forwards";
    })

    document.getElementById('muster1').addEventListener('click', () => {
        let anzahlFelder = Math.sqrt(muster.length);
        document.getElementById('anzahlFelder').value = anzahlFelder;
        neuesFeld();
        for (let i = 0; i < feld.length; i++) {
            document.getElementById('feld' + i).style.backgroundColor = muster[i];

        }
                    document.getElementById("Painting").innerHTML = muster;
                            document.getElementById("saving").innerHTML = "Loading...";
                            document.getElementById("saving").style.animation="loadAnim 1s forwards";
    })

}


function neuesFeld() {
    document.getElementById('anzahlFelder').addEventListener('click', () => {
        let anzahlFelder = 32;
        for (let i = 0; i < anzahlFelder; i++) {
            anzahlSpalten.push(800 / anzahlFelder + 'px');
        }

        let string = anzahlSpalten.toString();
        let cleanString = string.replace(/,/g, ' ');
        document.getElementById('grid-container').style.gridTemplateColumns = cleanString;
        load(anzahlFelder);
        anzahlSpalten.length = 0;
    });
}

function setField() {
        let anzahlFelder = 32;
        for (let i = 0; i < anzahlFelder; i++) {
            anzahlSpalten.push(800 / anzahlFelder + 'px');
        }

        let string = anzahlSpalten.toString();
        let cleanString = string.replace(/,/g, ' ');
        document.getElementById('grid-container').style.gridTemplateColumns = cleanString;
        load(anzahlFelder);
        anzahlSpalten.length = 0;
}

neuesFeld();
load();
setField();

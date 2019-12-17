window.onload = function () {
    let cena = 0;
    let iloscElewKoszyku = 0;

    let buttons = [
        document.getElementById('bt1'),
        document.getElementById('bt2'),
        document.getElementById('bt3'),
        document.getElementById('bt4'),
        document.getElementById('bt5'),
        document.getElementById('bt6'),
        document.getElementById('bt7'),
        document.getElementById('bt8'),
        document.getElementById('bt9'),
        document.getElementById('bt10'),
        document.getElementById('bt11'),
        document.getElementById('bt12'),
        document.getElementById('bt13'),
        document.getElementById('bt14'),


    ]
    let baskett = document.getElementById('basket');
    let usunKup = document.getElementById('usunKup');



// dodanie do listy zakupów boxa

    for (let i = 0; i < buttons.length; i++) {
        console.log(baskett.length)
        buttons[i].addEventListener('click', function () {
            let coZaznacza = buttons[i].parentElement.parentElement.id;
            let iloscWkoszyku = document.getElementById('basket').childElementCount;
            if(iloscWkoszyku<8){
                console.log('ponad')


            let nowyElement = document.createElement('div');
            nowyElement.classList.add('box');
                nowyElement.classList.add('boxgrafika');
            nowyElement.setAttribute('id',iloscElewKoszyku);
            console.log(nowyElement.id)

            let nowyElement2 = document.createElement('div');
            nowyElement2.classList.add('icon-trash-empty');

            let cenatymczasowa = sprawdzanieKasy(buttons[i].id);
            nowyElement.textContent = '\xa0' + coZaznacza + '\xa0=\xa0' + cenatymczasowa + ' zł';
            nowyElement.name = cenatymczasowa;
            nowyElement.appendChild(nowyElement2)

            baskett.appendChild(nowyElement);
            cena = cena + cenatymczasowa;
            document.getElementById('cenaKoszyk').textContent = 'Suma :\xa0' + cena + ' \xa0zł';
            alert('Kupiles ' + coZaznacza + '\xa0 za \xa0' + cenatymczasowa + '\xa0 zł')
            iloscElewKoszyku++;

            }
        else alert('za dużo elementów w koszyku')});
    }


   //usuwanie poszczególnego elementu koszyka.
    baskett.addEventListener('click', function (e) {
        console.log(e);

        if (e.target.className.includes('icon-trash-empty')) {
            cena = cena - e.target.parentElement.name;
            document.getElementById('cenaKoszyk').textContent = 'Suma :\xa0' + cena + ' \xa0zł';
            // let rodzic = this.parentElement;
            console.log(e.target.parentElement.id)
            console.log(this.children)
            var element = document.getElementById(e.target.parentElement.id)
            element.parentNode.removeChild(element);

        }
    });



    // Usuwanie i Kupowanie całości koszyka
    usunKup.addEventListener('click', function (e) {
        console.log(e);
        if (e.target.className.includes('usunKoszyk')) {
            cena = 0;
            document.getElementById('cenaKoszyk').textContent = 'Suma :\xa0' + cena + ' \xa0zł';
            while (baskett.firstChild) {
                baskett.removeChild(baskett.firstChild)
            }
        } else if (e.target.className.includes('kupKoszyk')) {
            if (cena == 0) alert('Aby kupić musisz wybrać przedmioty');
            else {
                alert('Kupiłeś rośliny \xa0\xa0za: ' + cena + '\xa0\xa0 zł');
                while (baskett.firstChild) {
                    baskett.removeChild(baskett.firstChild)
                }
                cena = 0;
                document.getElementById('cenaKoszyk').textContent = 'Suma :\xa0' + cena + ' \xa0zł';

            }
        }


    });

    function sprawdzanieKasy(cena) {
        let cenaKwiatka = 0;
        switch (cena) {
            case 'bt1':
                return cenaKwiatka = 30;

                break;
            case 'bt2':
                return cenaKwiatka = 40;
                break;
            case 'bt3':
                return cenaKwiatka = 50;
                break;
            case 'bt4':
                return cenaKwiatka = 30;
                break;
            case 'bt5':
                return cenaKwiatka = 40;
                break;
            case 'bt6':
                return cenaKwiatka = 50;
                break;
            case 'bt7':
                return cenaKwiatka = 60;
                break;
            case 'bt8':
                return cenaKwiatka = 70;
                break;
            case 'bt9':
                return cenaKwiatka = 30;
                break;
            case 'bt10':
                return cenaKwiatka = 20;
                break;
            case 'bt11':
                return cenaKwiatka = 10;
                break;
            case 'bt12':
                return cenaKwiatka = 15;
                break;
            case 'bt13':
                return cenaKwiatka = 40;
                break;
            case 'bt14':
                return cenaKwiatka = 30;
                break;


        }

/////
    }
}


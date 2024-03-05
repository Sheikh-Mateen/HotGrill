
class movement {
    movepages() {
        let btns = document.querySelectorAll('nav ul li');
        let pages = document.querySelectorAll('.move');
        let ncart = document.querySelector('.nav-cart');
        let bp = document.querySelector('#billing-page');
        let p = document.querySelector('.e-m');
        let p2 = document.querySelector('.e-m2');
        ncart.addEventListener('click', () => {
            for (var i = 0; i < btns.length; i++) {
                pages[i].style.display = 'none';
            }
            bp.style.display = `block`;

        })

        p.addEventListener('click', () => {
            for (var i = 0; i < btns.length; i++) {
                if (i == 0) {
                    pages[i].style.display = 'block';
                }
                else {
                    pages[i].style.display = 'none';
                }
            }
        })
        p2.addEventListener('click', () => {
            for (var i = 0; i < btns.length; i++) {
                if (i == 0) {
                    pages[i].style.display = 'block';
                }
                else {
                    pages[i].style.display = 'none';
                }
            }
        })
        console.log(pages);
        for (var i = 0; i < btns.length; i++) {
            if (i == 0) {
                pages[i].style.display = 'block';
            }
            else {
                pages[i].style.display = 'none';
            }
        }
        ncart.addEventListener('click', () => {

        })
        btns.forEach((ele, ind) => {
            ele.addEventListener('click', () => {
                bp.style.display = `none`;
                for (var i = 0; i < btns.length; i++) {
                    if (i == ind) {
                        pages[i].style.display = `block`;
                    }
                    else {
                        pages[i].style.display = `none`;
                    }
                }
            })
        })
    }
    constructor() {
        this.movepages();
    }
}
class menupage {
    cgmovement() {
        let choicegradeburgers = document.querySelectorAll('#menu-page .choice-grade .cg .cg-img');
        let selectgradeburgers = document.querySelectorAll('#menu-page .select-grade .cg .cg-img');
        let thirdgradeburgers = document.querySelectorAll('#menu-page .third-grade .cg .cg-img');
        let extras = document.querySelectorAll('#menu-page .fourth-grade .cg .cg-img');
        console.log(extras)
        choicegradeburgers[0].style.backgroundImage = "url(men-bur1.png)";
        choicegradeburgers[1].style.backgroundImage = "url(men-bur2.png)";
        choicegradeburgers[2].style.backgroundImage = "url(men-bur3.png)";
        selectgradeburgers[0].style.backgroundImage = "url(men-bur4.png)";
        selectgradeburgers[1].style.backgroundImage = "url(men-bur5.png)";
        selectgradeburgers[2].style.backgroundImage = "url(men-bur6.png)";
        thirdgradeburgers[0].style.backgroundImage = "url(men-bur7.png)";
        thirdgradeburgers[1].style.backgroundImage = "url(men-bur8.png)";
        thirdgradeburgers[2].style.backgroundImage = "url(men-bur9.png)";
        extras[0].style.backgroundImage = "url(mustard.png)";
        extras[1].style.backgroundImage = "url(hot.png)";
        extras[2].style.backgroundImage = "url(s1.png)";
    }
    arrayinstall() {
        let sum = 0;
        let choicegradeburgers = document.querySelectorAll('#menu-page .choice-grade .cg button');
        let selectgradeburgers = document.querySelectorAll('#menu-page .select-grade .cg button');
        let thirdgradeburgers = document.querySelectorAll('#menu-page .third-grade .cg button');
        let fourthgradeburgers = document.querySelectorAll('#menu-page .fourth-grade .cg button');
        let cinfo = document.querySelectorAll('#menu-page .choice-grade .cg .burger-name');
        let sinfo = document.querySelectorAll('#menu-page .select-grade .cg .burger-name');
        let tinfo = document.querySelectorAll('#menu-page .third-grade .cg .burger-name');
        let finfo = document.querySelectorAll('#menu-page .fourth-grade .cg .burger-name');
        let ct = document.querySelector('.cart-total h3');
        let pi = document.querySelector('.item-details');
        let price1 = [300, 350, 450];
        let price2 = [400, 450, 550];
        let price3 = [600, 750, 750];
        let price4 = [120, 140, 100];
        let bill = [];
        let arcont = "";
        choicegradeburgers.forEach((ele, ind) => {
            ele.addEventListener('click', () => {
                bill.push(price1[ind]);
                sum = sum + price1[ind];
                ct.innerHTML = sum;
                arcont += `<p>${cinfo[ind].innerHTML}</p>`;
                pi.innerHTML = arcont;
            })
        })
        selectgradeburgers.forEach((ele, ind) => {
            ele.addEventListener('click', () => {
                bill.push(price2[ind]);
                sum = sum + price2[ind];
                ct.innerHTML = sum;
                arcont += `<p>${sinfo[ind].innerHTML}</p>`;
                pi.innerHTML = arcont;
                console.log(sum);
            })
        })
        thirdgradeburgers.forEach((ele, ind) => {
            ele.addEventListener('click', () => {
                bill.push(price3[ind]);
                sum = sum + price3[ind];
                ct.innerHTML = sum;
                arcont += `<p>${tinfo[ind].innerHTML}</p>`;
                pi.innerHTML = arcont;
                console.log(sum);
            })
        })
        fourthgradeburgers.forEach((ele, ind) => {
            ele.addEventListener('click', () => {
                bill.push(price4[ind]);
                sum = sum + price4[ind];
                ct.innerHTML = sum;
                arcont += `<p>${finfo[ind].innerHTML}</p>`;
                pi.innerHTML = arcont;
                console.log(sum);
            })
        })
    }
    constructor() {
        this.cgmovement();
        this.arrayinstall();
    }
}


class homepage {
    burgerdisplay() {
        let count = 0;
        let b = document.querySelector('.nav-burger');
        let l = document.querySelector('nav ul');
        b.addEventListener('click', () => {
            l.classList.toggle('open');
        })
        let burgers = document.querySelectorAll('#home-page .burger-display .burgers-pics div');
        let burgerballs = document.querySelectorAll('#home-page .burger-display .burger-balls div');
        burgers[0].classList.add('b1');
        burgers[1].classList.add('b2');
        burgerballs[0].classList.add('fill');
        console.log(burgerballs);
        let myInterval = setInterval(() => {
            if (count == 0) {
                burgers[count].classList.toggle('b1');
                burgers[count + 1].classList.toggle('b2');
            }
            count++;
            if (count == 1) {
                burgers[count - 1].classList.toggle('b3');
                burgers[count].classList.toggle('b4');
                burgerballs[count].classList.toggle('fill');
                burgerballs[count - 1].classList.toggle('fill');
            }

            count = 0;

        }, 3000);

    }
    constructor() {
        this.burgerdisplay();
    }
}


// Main function holding all objects
let main = () => {
    const obj1 = new homepage();
    const obj2 = new movement();
    const obj3 = new menupage();
}
main();
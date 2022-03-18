$(function () {

    $('.time').text('01:00')
    let setID1;
    let d = 0;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    function time() {
        let minT = 1;
        let timeNow2 = new Date().getTime();
        let timeMon = timeNow2 + minT * (60 * 1000)

        setID1 = setInterval(() => {
            let timeNow = new Date().getTime()
            rizn1 = timeMon - timeNow
            let min = Math.floor((rizn1 % (1000 * 60 * 60)) / (1000 * 60))
            min < 10 ? min = '0' + min : '';
            sec = Math.floor((rizn1 % (1000 * 60)) / 1000)
            sec < 10 ? sec = '0' + sec : '';

            if (sec == 0) {
                document.querySelector('.time').innerHTML = `00:00`
                clearTimeout(setID1)
            } else {
                document.querySelector('.time').innerHTML = `${min}:${sec}`
            }
            if (document.querySelector('.time').textContent === '00:00') {
                $('.fon1').css('display', 'block')
            }
        })
    }


    $('.box').on('mouseup', function () {
        document.querySelectorAll('.box').forEach(element => {
            if (event.target == element) {
                if (element.event == onclick) {
                    if (d == 0) {
                        time();
                        d += 1
                        document.querySelector('.start').disabled = true
                        document.querySelector('.check').disabled = false
                    }
                }
            }
        });
    })


    $('.start').on('click', function () {
        time()
        document.querySelector('.start').disabled = true
        document.querySelector('.check').disabled = false
    })

    $('.check').on('click', function () {
        setInterval(() => {
            document.querySelector('.time-box').innerHTML = document.querySelector('.time').innerHTML
        })
        $('.fon').css('display', 'block')
    })

    $('.two1').on('click', function () {
        $('.fon1').css('display', 'none')
        $('.fon').css('display', 'none')
        d = 0
        document.querySelector('.check').disabled = true
        document.querySelector('.start').disabled = false
        location.reload()
    })


    function gen(min, max) {
        let totalNumbers = max - min + 1
        let totalNum = []
        let arrayRandomNumbers = []
        let tempRandomNumber
        while (totalNumbers--) {
            totalNum.push(totalNumbers + min);
        }
        while (totalNum.length) {
            tempRandomNumber = Math.round(Math.random() * (totalNum.length - 1));
            arrayRandomNumbers.push(totalNum[tempRandomNumber]);
            totalNum.splice(tempRandomNumber, 1);
        }
        return arrayRandomNumbers;
    }
    


    let x = 0
    let f
    let r
    $('.new').on('click', () => {
        x += 1
        r = f
        f = gen(1, 16)
        document.querySelectorAll('.box').forEach((element, index) => {
            
            
            if (x > 1) {
                element.classList.remove(`box${r[index]}`)
            }
            if (x == 1) {
                element.classList.remove(`box${arr[index]}`)
            }

            element.classList.add(`box${f[index]}`)
            element.textContent = f[index]
        });


        // if($('.box-res').html() > null){
        //     console.log($('.box-res').html());
        // }
    

        document.querySelector('.start').disabled = false
        document.querySelector('.check').disabled = true
        clearTimeout(setID1)
        document.querySelector('.time').innerHTML = '01:00'
        d = 0
    })

    let check = true
    $('.one').on('click', function () {
        $('.fon').css('display', 'none')

        for (let i = 0; i < arr.length; i++) {
            if ($('.box').eq(i).text() != arr[i]) {
                check = false;
                break;
            }

        };

        if (check) {
            $('.fon2').css('display', 'block');
        } else {
            $('.fon1').css('display', 'block');
        }

        document.querySelector('.start').disabled = false
        document.querySelector('.check').disabled = true
        clearTimeout(setID1)
        document.querySelector('.time').innerHTML = '01:00'
    })

    $('.two2').on('click', function () {
        $('.fon2').css('display', 'none')
        document.querySelector('.check').disabled = true
        location.reload()
    })


    $('.two').on('click', function () {
        $('.fon').css('display', 'none')
    })

    // $('.box').draggable()

    // $('.box-res').droppable({
    //     accept: '.box',
    //     over: function () {
    //         $('.box').draggable({
    //             // containment: '.box-res',
    //             grid: [128, 125],
    //         })
    //     },
    //     out: function () {
    //         $('.box').draggable({
    //             // containment: '.box-res',
    //             grid: '',
    //         })
    //     },
    // })

    $('.boxS').sortable({
        connectWith: '.mix, .box-res',

    })

    $('.box-res').droppable({
        accept: '.box',

    })








})
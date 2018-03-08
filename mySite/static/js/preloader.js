$(document).ready(function () {
    var basicTimeline = anime.timeline();

    basicTimeline
        .add({ //выезд линии
            targets: '.morph',
            duration: 500,
            width: '100%',
            easing: 'easeInOutQuad'
        })
        .add({ //раскрытие линии
            targets: '.morph',
            duration: 500,
            height: ['5%', '100%'],
            top: '0',
            easing: 'easeInOutQuad'
        })
        .add({ //appear text heart blocks
            targets: '.heart .quoteTextBG',
            duration: 250,
            opacity: ['0', '1'],
            easing: 'easeInOutQuad'
        })
        .add({ //appear text heart
            targets: '.heart .quoteText',
            duration: 250,
            opacity: ['0', '1'],
            easing: 'easeInOutQuad'
        })
        .add({ //appear text1 + сдвиг
            targets: '.heart .quote1TextTop',
            duration: 750,
            x: 339.2858,
            elasticity: 300,
//            easing: 'easeInOutQuad'
        })
        .add({ //appear text2 + сдвиг
            targets: '.heart .quote1TextBottom',
            duration: 550,
            x: '-0.7142',
            offset: '-=550',
            elasticity: 300,
//            easing: 'easeInOutQuad'
        })
        .add({
            targets: '.heart #quote1Heart',
            duration: 1,
            easing: 'easeInOutQuad',
            opacity: 1
        })
        .add({ //отрисовка треугольника
            targets: '.heart #quote1Heart',
            duration: 750,
            easing: 'easeInOutQuad',
            strokeDashoffset: [1000, 0]
        })

        .add({ //blink block
            targets: ['.heart #quote1Heart', '.heart .quoteText'],
            duration: 350,
            opacity: ['0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0'],
            easing: 'easeInOutQuad',
            loop: 1350
        })
        .add({ //remove  heart block
            targets: '.heart',
            duration: 250,
            opacity: 0,
            easing: 'easeInOutQuad',
        })
        .add({ //add double heart
            targets: '.double-heart',
            duration: 10,
            opacity: 1,
            easing: 'easeInOutQuad',
        })
        .add({ //appear text heart blocks
            targets: '.double-heart .quoteTextBG',
            duration: 250,
            opacity: ['0', '1'],
            easing: 'easeInOutQuad'
        })
        .add({ //appear text heart
            targets: '.double-heart .quoteText',
            duration: 250,
            opacity: ['0', '1'],
            easing: 'easeInOutQuad'
        })
        .add({ //appear text1 + сдвиг
            targets: '.double-heart #quote2TextTop',
            duration: 750,
            x: 183.7278,
            elasticity: 300,

//            easing: 'easeInSine'
        })
        .add({ //appear text2 + сдвиг
            targets: '.double-heart #quote2TextBottom',
            duration: 550,
            x: '-0.7144',
            offset: '-=550',
            elasticity: 300,

//            easing: 'easeInSine'
        })
        .add({ //отрисовка треугольника
            targets: '.double-heart .quotePositiveLines',
            duration: 750,
            easing: 'easeInOutQuad',
            strokeDashoffset: [1000, 0]
        })

        .add({ //blink block
            targets: ['.double-heart .quotePositiveLines', '.double-heart .quoteText'],
            duration: 350,
            opacity: ['0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0', '0.3', '0.6', '0'],
            easing: 'easeInOutQuad',
            loop: 1350
        })
        .add({ //remove double-heart
            targets: '.double-heart',
            duration: 250,
            opacity: 0,
            easing: 'easeInOutQuad'
        })
        .add({
            targets: '.preloader',
            duration: 1000,
            height: '0',
            top: '50%',
            opacity: 0,
            offset: '-=200',
            easing: 'easeInOutQuad',
            complete: function () {
                $('.preloader').remove();
                $('body').css('overflow-y', 'auto')
            }

        })

});

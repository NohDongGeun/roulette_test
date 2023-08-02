const prizes = [
  'Prize_1',
  'Prize_2',
  'Prize_3',
  'Prize_4',
  'Prize_5',
  'Prize_6',
]

const prizeImages = [
  'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_03.png', // 스타벅스
  'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_01.png', //조엘
  'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_02.png', // 크리스피
  'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_06.png', // 더블 1000
  'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_04.png', // 더블 5000
  'http://webimg.jestina.co.kr/UpData/jestina/event/201201_jWeek/roulette_product_05.png', // 더블 3000
]

document.getElementById('spin').addEventListener('click', function () {
  this.disabled = true

  const selectedPrize = Math.floor(Math.random() * prizes.length)
  const degreesPerPrize = 360 / prizes.length
  const rotation = degreesPerPrize * selectedPrize + 360 * 3
  const selectedImg = prizeImages[selectedPrize]

  document.getElementById('wheel').style.transform = `rotate(${rotation}deg)`

  const modal = document.getElementById('myModal')
  const span = document.getElementsByClassName('close')[0]

  span.onclick = function () {
    modal.style.display = 'none'
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }

  function showModal(prizeImage) {
    document.getElementById('prizeImg').src = prizeImage
    modal.style.display = 'block'
  }

  setTimeout(() => {
    showModal(selectedImg)
    wheel.style.transition = 'none'
    wheel.style.transform = 'rotate(0deg)'
    void wheel.offsetWidth
    wheel.style.transition = ''
    document.getElementById('spin').disabled = false
  }, 5000)
})

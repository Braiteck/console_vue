window.onload = () => {
    // Вспомогательные функции
    const is_touch_device = () => !!('ontouchstart' in window)


    const widthScroll = () => {
        let div = document.createElement('div')

        div.style.overflowY = 'scroll'
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)

        let scrollWidth = div.offsetWidth - div.clientWidth
        document.body.removeChild(div)

        return scrollWidth
    }


    // Есть ли поддержка тач событий или это apple устройство
    if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) document.documentElement.classList.add('custom_scroll')


    // Установка ширины стандартного скроллбара
    document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


    // Моб. версия
    if (document.body.clientWidth < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'


    window.addEventListener('resize', (event) => {
        // Моб. версия
        document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'

        if (document.body.clientWidth < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
    })
}
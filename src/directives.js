import Vue from 'vue'

export const accordionToggle = Vue.directive('accordionToggle', {
    inserted: (el) => {
        let parent = el.closest('.block'),
            accordion = el.closest('.accordion')

        el.addEventListener('click', function () {
            if (!parent.classList.contains('active')) {
                for (var item of accordion.querySelectorAll('.block')) {
                    item.classList.remove('active')
                }

                parent.classList.add('active')
            } else {
                parent.classList.remove('active')
            }
        })
    }
})
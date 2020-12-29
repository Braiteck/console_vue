import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        dateTime: {
            year: '',
            mnt: '',
            date: '',
            hour: '',
            min: '',
            day: ''
        },
        forcedVentilation: {
            percents: 30,
            status: false
        },
        exhaustVentilation: {
            percents: 30,
            status: false
        },
        temperature: {
            value: 10,
            percents: 0,
            type: ''
        },
        crash: [],
        recuperatorStatus: false,
        pumpStatus: false,
        charts: [
            {
                title: 'Приточный воздух',
                temperature: 0,
                period: 24,
                step: 30,
                chart: null
            },
            {
                title: 'Наружный воздух',
                temperature: 0,
                period: 24,
                step: 30,
                chart: null
            },
            {
                title: 'Обратная вода',
                temperature: 0,
                period: 24,
                step: 30,
                chart: null
            },
            {
                title: 'Комнатная температура',
                temperature: 0,
                period: 24,
                step: 30,
                chart: null
            }
        ]
    },


    mutations: {
        SET_STATE(state, payload) {
            // Дни недели
            let days = new Map([
                [1, 'Понедельник'],
                [2, 'Вторник'],
                [3, 'Среда'],
                [4, 'Четверг'],
                [5, 'Пятница'],
                [6, 'Суббота'],
                [7, 'Воскресенье']
            ])

            // Аварии
            let crashes = new Map([
                [1, 'Критическая авария'],
                [2, 'Пожар'],
                [3, 'Перегрев устройства'],
                [4, 'Термоконтакт приточного вентилятора'],
                [5, 'Диф.ман приточного вентилятора'],
                [6, 'Потеря сенсора приточного воздуха'],
                [7, 'Потеря сенсора воды'],
                [8, 'Перегрев нагревателя'],
                [9, 'Перегрев приточного воздуха'],
                [10, 'Критически низкая температура приточного воздуха'],
                [11, 'Критически низкая температура воды'],
                [12, 'Термоконтакт вытяжного вентилятора'],
                [13, 'Диф.ман вытяжноговентилятора'],
                [14, 'Приточный фильтр выработан'],
                [15, 'Приточный фильтр выработан'],
                [16, 'Вытяжной фильтр выработа'],
                [17, 'Вытяжной фильтр выработа'],
                [18, 'Авария ККБ'],
                [19, 'Обмерзание нагревателя']
            ])

            // Параметры даты
            state.dateTime.year = '20' + parseInt(payload.rtc.year)
            state.dateTime.mnt = parseInt(payload.rtc.mnt)
            state.dateTime.date = parseInt(payload.rtc.date)
            state.dateTime.hour = parseInt(payload.rtc.hour)
            state.dateTime.min = parseInt(payload.rtc.min)
            state.dateTime.day = days.get(parseInt(payload.rtc.day))

            // Параметры приточной вентиляции
            state.forcedVentilation.percents = parseInt(payload.ss.pnom)
            state.forcedVentilation.status = parseInt(payload.ss.eusr)

            // Параметры вытяжной вентиляции
            state.exhaustVentilation.percents = parseInt(payload.es.pnom)
            state.exhaustVentilation.status = parseInt(payload.es.eusr)

            // Параметры температуры
            state.temperature.value = (parseInt(payload.rg.setp) / 10).toFixed(1)
            state.temperature.percents = parseInt(payload.clr.pwr) || parseInt(payload.htr.mpwr)
            state.temperature.type = parseInt(payload.rg.mode)

            // Аварии
            state.crash = []

            if (parseInt(payload.flt.id)) {
                state.crash.push({ name: crashes.get(parseInt(payload.flt.id)) })
            }

            // Статус - Охладитель
            state.сoolerStatus = parseInt(payload.clr.pwr)

            // Статус - Насос
            state.pumpStatus = parseInt(payload.htr.pmpe)

            // Графики
            state.charts[0].temperature = (parseInt(payload.sns.aire) / 10).toFixed(1)
            state.charts[1].temperature = (parseInt(payload.sns.airc) / 10).toFixed(1)
            state.charts[2].temperature = (parseInt(payload.sns.wat) / 10).toFixed(1)
            state.charts[3].temperature = (parseInt(payload.sns.airr) / 10).toFixed(1)
        }
    },


    actions: {
        // Загрузка данных
        async loadState({ commit }) {
            return await this._vm.axios.get('http://localhost:8000/state').then((res) => {
                commit('SET_STATE', res.data)
            })
        },


        // Отключение/Включение - Приточная вентиляция
        async forcedToggle({ app }) {
            console.log(app)

            let bytesToSend = [21, 3, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },

        // Увеличение - Приточная вентиляция
        async forcedPlus({ app }) {
            console.log(app)

            let bytesToSend = [21, 10, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },

        // Уменьшение - Приточная вентиляция
        async forcedMinus({ app }) {
            console.log(app)

            let bytesToSend = [21, 11, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },


        // Отключение/Включение - Вытяжная вентиляция
        async exhaustToggle({ app }) {
            console.log(app)

            let bytesToSend = [20, 3, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },

        // Увеличение - Вытяжная вентиляция
        async exhaustPlus({ app }) {
            console.log(app)

            let bytesToSend = [20, 10, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },

        // Уменьшение - Вытяжная вентиляция
        async exhaustMinus({ app }) {
            console.log(app)

            let bytesToSend = [20, 11, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },


        // Увеличение - Температуры
        async temperaturePlus({ app }) {
            console.log(app)

            let bytesToSend = [26, 22, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        },

        // Уменьшение - Температуры
        async temperatureMinus({ app }) {
            console.log(app)

            let bytesToSend = [26, 23, 0, 0],
                bytesArray = new Uint8Array(bytesToSend)

            return await this._vm.axios.post('http://localhost:8000/command', bytesArray)
        }
    },


    getters: {
        getDateTime: state => state.dateTime,
        getForcedVentilation: state => state.forcedVentilation,
        getExhaustVentilation: state => state.exhaustVentilation,
        getTemperature: state => state.temperature,
        getСoolerStatus: state => state.сoolerStatus,
        getPumpStatus: state => state.pumpStatus,
        getСrashes: state => state.crash,
        getCharts: state => state.charts
    }
})
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, action) {
        if (!time || !action) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if (this.alarmCollection.find((item) => item[time] === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        let call = {callback : action, time, canCall : true};
        this.alarmCollection.push(call);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((el) => {
                if (el.time === this.getCurrentFormattedTime() & el.canCall === true) {
                    el.canCall = false;
                    el.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(el => {
            el.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

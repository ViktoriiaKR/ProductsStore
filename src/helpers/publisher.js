export default class Publisher {
    events = {};
    subscribe = (event, listener) => {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
        console.log(this.events, 'THIS EVENTS SUBSCRIBE')
    };

    unsubscribe = (event, listener) => {
        if (!this.events[event]) this.events[event] = [];
        this.events[event] = this.events[event].filter( func => func != listener)
    };

    notify = (event, data) => { //передача данных всем подписчикам котоые ожидают данные
        if (!this.events[event]) this.events[event] = [];
        this.events[event].forEach(func => func(data));
        console.log(data, 'notify')
    };
};
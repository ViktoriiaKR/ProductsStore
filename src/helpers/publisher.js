export default class Publisher {
    events = {};
    subscribe = (event, listener) => {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    };

    unsubscribe = (event, listener) => {
        if (!this.events[event]) this.events[event] = [];
        this.events[event] = this.events[event].filter( func => func != listener)
    };

    notify = (event, data) => {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].forEach(func => func(data));
    };
};
function Stream() {
    const subscriber = [];
    return {
        subscribe: function(callback) {
            subscriber.push(callback);
        },
        push: function(value) {
            for (const func of subscriber) {
                func(value);
            }
        }
    }
}

const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);
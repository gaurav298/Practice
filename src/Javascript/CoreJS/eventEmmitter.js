let emitter = {};

function myFunc() {
    emitter = {
        handlers: {},
        emit: function(evtName, data) {
            for (const handler of this.handlers[evtName]) {
                handler(data);
            }
        },
        on: function(evtName, handler) {
            if (!this.handlers[evtName]) {
                this.handlers[evtName] = [];
            }
            this.handlers[evtName].push(handler);
            return this;
        }
    };
    return emitter;
};

setTimeout(() => {
  console.log("trigger fired");
  emitter.emit("trigger", { customData: "this is custom data from trigger" });
}, 5000);
setTimeout(() => {
  console.log("trigger1 fired");
  emitter.emit("trigger1", { customData: "this is custom data from trigger1" });
}, 10000);
const caller = myFunc();
caller
  .on("trigger", (data) => {
    console.log(data);
    alert("trigger fired");
  })
  .on("trigger1", (data) => {
    console.log(data);
    alert("trigger1 fired");
  });

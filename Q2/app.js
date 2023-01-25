"use strict"

const countainerSpet = {
    steps:0,

    increseStep: function () {
        this.steps += 1
        return this;

    },
    decreaseStep: function () {
        this.steps -= 1
        return this;

    },

    reset: function(){
     this.steps = 0
     return this;
    },
    read: function(){
        console.log(this.steps);
        return this;
    }
}

countainerSpet.increseStep().increseStep().read().increseStep().read().decreaseStep().read();
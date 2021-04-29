// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _name: {
            default: "",
            override: true,
        },
        _timer: 0,
    },
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    get timer() {
        return this._timer;
    },
    set timer(value) {
        this._timer = value;
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.timer = 0.0;
        this.name = "bunny";
    },

    update(dt) {
        this.timer += dt;
        if (this.timer <= 0.5) {
            this.node.y += 100 * dt;
        } else if (this.timer <= 1.0) {
            this.node.y += -100 * dt;
        } else if (this.timer <= 2.0) {} else {
            this.timer = 0.0;
            this.talk();
        }
    },
    talk() {
        cc.log("umbala alaba " + this.name);
    }
});
class myPromise {

    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    constructor(callback) {
        this.PromiseState = myPromise.PENDING; //初始状态pending
        this.PromiseResult = null;
        callback(this._resolve.bind(this), this._reject.bind(this))
    }
    _resolve(val) {
        console.log(val)
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED; //成功状态fulfilled
            this.PromiseResult = val;
        }
    }
    _reject(val) {
        console.log(val)
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED; //rejected
            this.PromiseResult = val;
        }
    }
    then(onFuilled, onRejected) {
        if (this.PromiseState === myPromise.REJECTED) {
            onFuilled(this.PromiseResult)
        }
        if (this.PromiseState === myPromise.FULFILLED) {
            onRejected(this.PromiseResult)
        }
    }

}



let p1 = new myPromise((resolve, reject) => {
    resolve('成功')
})
p1.then(resolve => {
    console.log(resolve)
}, reason => {
    console.log(reason)
})

// let p2 = new myPromise((resolve, reject) => {
//     reject('失败')
// })

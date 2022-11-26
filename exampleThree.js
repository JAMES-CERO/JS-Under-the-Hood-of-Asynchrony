
function exampleThree() {
 
    async function wait (){
        await sleep(500)
            doWork()
            await sleep(500)
            doWork()
    }

    function one() {
        doWork()
    }

    async function two() {
        wait()
    }

    async function three() {
        wait()
    }

    one()
    return [two(), three()]
}
/**
 * Created by ranwahle on 22/02/2016.
 */

async function main() {
    await ping();
}

async function ping() {
    for (var i = 0; i < 10; i++) {
        await delay(300);
        console.log('ping');
    }
}

function delay(ms: number) {
    return new Promise((resolve, reject)  => setTimeout(resolve, ms));
}

main();

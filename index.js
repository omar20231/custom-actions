const core = require('actions/core') // can't find mudule apparently

try{
    const nameToGreet =core.getInput('who-to-greet');
    console,log(`hello', ${nameToGreet}`);
    core.setOutput('time', new Date().toTimeString());

} catch (error) {
    core.setFailed(error.message);
}
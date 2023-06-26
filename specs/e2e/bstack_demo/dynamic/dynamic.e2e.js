const assert = require('assert');
const winston = require('winston');
const logConfiguration = {
    'transports': [
        new (winston.transports.Console)({
            level: 'silly',
            json: true        
        })
    ]
};
const loggerWinston = winston.createLogger(logConfiguration);

var log4js = require("log4js");
log4js.configure({
    appenders: { app: { type: 'file', filename: 'app.log' } },
    categories: { default: { appenders: ['app'], level: 'all' } }
  });
var logger4js = log4js.getLogger();
logger4js.level = "all";

function add(args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

describe('Dynamic Suite - add() - Pass & Fail', function () {
  const tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 11}
  ];

  for(let i = 1; i<=4; i++){
    tests.forEach(({args, expected}) => {
      it(`Dynamic Tests - ${i} - correctly adds ${args.length} args`, function () {
        console.log(`it - console log - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        console.info(`it - console info - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        console.trace(`it - console trace - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        console.debug(`it - console debug - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        console.warn(`it - console warn - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        console.error(`it - console error - Dynamic Tests - ${i} - correctly adds ${args.length} args`)

        loggerWinston.info(`it - winston info - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('info', `it - winston info - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('debug', `it - winston debug - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('verbose', `it - winston verbose - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('silly', `it - winston silly - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('http', `it - winston http - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('warn', `it - winston warn - Dynamic Tests - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('error', `it - winston error - Dynamic Tests - ${i} - correctly adds ${args.length} args`)

        logger4js.info(`it - 4js info - Dynamic Tests - ${i} - correctly adds ${args.length} args`);
        logger4js.trace(`it - 4js trace - Dynamic Tests - ${i} - correctly adds ${args.length} args`);
        logger4js.debug(`it - 4js debug - Dynamic Tests - ${i} - correctly adds ${args.length} args`);
        logger4js.warn(`it - 4js warn - Dynamic Tests - ${i} - correctly adds ${args.length} args`);
        logger4js.error(`it - 4js error - Dynamic Tests - ${i} - correctly adds ${args.length} args`);
        logger4js.fatal(`it - 4js fatal - Dynamic Tests - ${i} - correctly adds ${args.length} args`);

        const res = add(args);
        var error_messages = ['Sum does not match', 'Total does not match']
        var randomIndex = Math.floor(Math.random() * error_messages.length)
        var error_message = error_messages[randomIndex];
        assert.strictEqual(res, expected, error_message);
      });
    });  
  }
});

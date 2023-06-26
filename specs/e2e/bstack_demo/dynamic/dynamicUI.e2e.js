import homePage from '../../../../pageobjects/bstack-demo/home.page';
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

describe('Dynamic Suite - BStack Demo - Pass & Fail', function() {
  this.timeout(500000);
  const tests = [ 
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3, 4], expected: 11}
  ];
  

  for(let i = 1; i<=1; i++){
    tests.forEach(({args, expected}) => {
      
        //1 loop - runs 1*2 test*120sec -> 4mins
        //5 loops - runs 5*2 test*120sec -> 20mins
        //10 loops - runs 10*2test*120 -> 40mins
      var sleep_time = i*2000
      
      it(`Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`, async () => {

        console.log(`it - console log - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        console.info(`it - console info - Dynamic Tests - BStack Demo -  ${i} - correctly adds ${args.length} args`)
        console.trace(`it - console trace - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        console.debug(`it - console debug - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        console.warn(`it - console warn - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        console.error(`it - console error - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)

        loggerWinston.info(`it - winston info - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('info', `it - winston info - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('debug', `it - winston debug - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('verbose', `it - winston verbose - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('silly', `it - winston silly - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('http', `it - winston http - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('warn', `it - winston warn - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)
        loggerWinston.log('error', `it - winston error - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`)

        logger4js.info(`it - 4js info - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`);
        logger4js.trace(`it - 4js trace - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`);
        logger4js.debug(`it - 4js debug - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`);
        logger4js.warn(`it - 4js warn - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`);
        logger4js.error(`it - 4js error - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`);
        logger4js.fatal(`it - 4js fatal - Dynamic Tests - BStack Demo - ${i} - correctly adds ${args.length} args`);

        for (let loadUrls = 1; loadUrls <=30; loadUrls++){
          await homePage.open()
          await new Promise(r => setTimeout(r, sleep_time));
          await expect(homePage.browserstackLogo).toBeExisting();
          await new Promise(r => setTimeout(r, sleep_time));
        }
        
        const res = await add(args);
        assert.strictEqual(res, expected);
      });
    });  
  }
});

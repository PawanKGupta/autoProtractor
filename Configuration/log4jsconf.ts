export class Logger {
    public static logger(): any {
        const log4js = require('log4js');
        log4js.configure('./Configuration/log4js.json');
        const log = log4js.getLogger('default');
        return log;
    }
}

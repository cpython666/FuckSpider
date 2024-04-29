import * as Checkers from './checkers';
import defaultConfig from './config';

class FuckSpider {
    constructor(options) {
        this.config = {...defaultConfig, ...options};
        this.init();
    }

    init() {
        // 初始化检查器
        this.checkers = [
            new Checkers.ConsoleCheck(),
            new Checkers.BehaviorCheck(),
            new Checkers.ViewportCheck()
        ];
        // 启动检查器
        this.checkers.forEach(checker => checker.start(this.config.checkInterval));
    }
}

export default FuckSpider;

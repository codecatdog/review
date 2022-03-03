// javascript异步加载的三种方案
/**
 * 1. defer 但要等到dom文档全部被解析完才会被执行。只有IE能用，可以将代码写到内部
 * 2. async,加载完就执行，async只能加载外部脚本，不能把js写在script标签里
 *      1和2执行也不阻塞页面
 * 3. 创建script标签，插入到dom中，加载完毕后callBack
 */
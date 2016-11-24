
-- 导出 news 的数据库结构
CREATE DATABASE IF NOT EXISTS `news` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `news`;


-- 导出  表 news.newsdata 结构
CREATE TABLE IF NOT EXISTS `newsdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `newstype` varchar(50) NOT NULL COMMENT '新闻类型',
  `newstitle` varchar(200) NOT NULL COMMENT '新闻标题',
  `newsimg` varchar(200) DEFAULT NULL COMMENT '新闻图片',
  `addtime` datetime DEFAULT NULL COMMENT '添加时间',
  `newssrc` varchar(100) DEFAULT NULL COMMENT '新闻来源',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='新闻数据表';

-- 正在导出表  news.newsdata 的数据：~6 rows (大约)
INSERT INTO `newsdata` (`id`, `newstype`, `newstitle`, `newsimg`, `addtime`, `newssrc`) VALUES
	(15, '百家', '4444e', 'img/1.jpg', '2016-10-08 00:00:00', '444'),
	(16, '精选', '2', 'img/2.jpg', '2016-10-01 00:00:00', '4');


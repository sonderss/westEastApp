import Mock from 'mockjs' //'mockjs'固定语法

var data = Mock.mock({
    'list|5-9':[{
        'pid|+1':0,
		'desc':'@ctitle(3,5)',
		'area':'@city()',
		'fangzi':'一室一厅',
		'price':'@natural(1,5)',
		'fengge':'简约风',
		'gongsi':'哈哈网络',
        'img':'../../static/img/myfix/04.png'
    }]
})
Mock.mock('http://www.baidu.com/api1',data)

// //系统通知
// var data1 = Mock.mock({
//     'list|3':[{
//         'pid|+1':0,
// 		'title':"@pick(['春节大酬宾，速速抢购！！', '国庆假期，五折优惠！！', '你买不买？？'])",
// 		'date':"@pick(['17:00', '昨天', '前天'])",
//     }]
// })
// Mock.mock('http://www.baidu.com/api2',data1)

//互动留言
var data2 = Mock.mock({
    'list|3':[{
		'pid|+1':0,
		'img':"@pick(['../../../static/img/message/toux.png','../../../static/img/message/touxiang.png'])",
		'title':"@pick(['张三评论了您的留言', '李四点赞了你的评论', '张三点赞了你的评论'])",
		'date':"@pick(['17:00', '昨天', '前天'])",
    }]
})
Mock.mock('https://www.baidu.com/api3',data2)


var concern=Mock.mock({
	'list|7':[{
		'img':'/static/img/goods/detail.jpg',
		'id|+1':1,
		'name':"店铺名称",
		"adress":"广州市番禺区天安科技园",
		"dec":'经营范围：家装、电器、五金'
	}]
})
Mock.mock('https://www.wang.com/api',concern)
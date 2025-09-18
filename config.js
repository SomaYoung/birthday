var config = {
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "逆水寒天赏孤勇者",  // 同上...
        "荣耀王者",
        "女性中的女性",
        "姐姐中的姐姐",
        "也是",
        "超绝无敌漂亮聪明的美少女",
        "星星的好姐姐",
        "瑜洛同学大人",
        "有幸有缘能和你共度20岁生日",
        "希望我们来日方长",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "逆水寒天赏孤勇者":"./imgs/shui.jpg",
        "荣耀王者": "./imgs/wangzhe.jpg",
        "女性中的女性": "./imgs/nvxing.jpg",
        "姐姐中的姐姐": "./imgs/jiejie.jpg",
        "超绝无敌漂亮聪明的美少女": "./imgs/meishaonv.jpg",
        "星星的好姐姐": "./imgs/xingxing.jpg",
        "瑜洛同学大人": "./imgs/yuluo.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};

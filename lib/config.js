// 项目配置文件
module.exports = {
    // 微信相关配置
    wechat: {
        appid: 'wx6e2947816c2c8eea',
        secret: '393d346f17bff148c25e358447717a70',
        // 微信 API 地址，地址后需要连接相关功能地址，例如：https://api.weixin.qq.com/cgi-bin/user/get
        apiurl: 'https://api.weixin.qq.com/cgi-bin/',
        reurl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        snsurl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        template: {
            alert: '6Uc_6adqWVrq6JHGDzunIDF5cBosSQR-3Tgm9nSgFio'
        }
    }
}

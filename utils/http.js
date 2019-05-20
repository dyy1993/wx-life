import {config} from '../config.js'
export class HTTP {
       constructor() {
    }
    get(url, params={}) {
        let that = this;
        return new Promise(function (resolve, reject){
            that.request(url,'GET',params).then((resp)=>{
                resolve(resp)
            }).catch((err)=>{
                reject(err)
            })
        })
        
    }
    post(url, params={}) {
        let that = this;
        return new Promise(function (resolve, reject){
            that.request(url,'POST',params).then((resp)=>{
                resolve(resp)
            }).catch((err)=>{
                reject(err)
            })
        }) 
    }

    request(url, method='GET', params) {
        return new Promise(function (resolve, reject){
            wx.request({
                url:url,
                data:params,
                method:method,
                header:{
                    'content-type': 'application/json',
                    'appkey':config.appkey  
                },
                success:(res)=>{
                    var code = res.statusCode.toString();
                    var startChar = code.charAt(0);
                    if (startChar == '2') {
                        resolve(res.data);
                    } else {
                        reject(res);
                    }
                },
                fail:(err)=>{
                    reject(err)
                }
            })
        })
        
    }
}
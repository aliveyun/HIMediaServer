作者：DoC 技术支持QQ：268165168
主要功能特点
基于C/C++开发维护；

支持Windows、Linux、macOS平台；
支持RTMP、HLS、SRT、GB28181、webrtc、http-flv、rtsp：
HLS支持播放广告
关键帧缓存；
秒开画面；

最新支持H5
 http://127.0.0.1:8080/ui/index.html
```
GB28181：
rtmp://ip/sip用户名/通道
http://IP:9996/live/sip用户名通道.m3u8
rtmp://127.0.0.1/34020000001320000008/0
rtmp://127.0.0.1/34020000002000000008/0
http://127.0.0.1:9996/live/340200000020000000080.m3u8
webrtc://127.0.0.1/live/livestream
SRT：
srt://127.0.0.1:10080?streamid=#!::h=live/livestream,m=publish
rtmp://127.0.0.1/live/livestream

```
                                                               
#  重要概念                      
一、StreamPath
拉流时需要填写 StreamPath ，这个 StreamPath 就是房间的唯一标识。举例：

FFmpeg 推流时 rtmp://127.0.0.1/live/livestream ，其中 live/livestream 就是 StreamPath
```
用 hdl 拉流即： http://127.0.0.1/live/live/livestream.flv 
用hls拉流即：   http://127.0.0.1/live/live/livestream.m3u8 
用webrtc拉流：  webrtc://127.0.0.1/live/livestream 
用RTMP拉流：    rtmp://127.0.0.1/live/livestream 
用RTSP拉流：    rtsp://127.0.0.1:554/live/livestream 
用GB28181拉流：    暂不支持拉流，支持gb28181设备推流 
rtmp://127.0.0.1/live/34020000001320000001_0 
```
如果用 OBS 推流，地址填写 rtmp://127.0.0.1/live ，流密钥 livestream ，最终也是一样。
在 rtmp 协议中， live 称为 app名称， livestream 称为流名称
二、如何推流(目前支持srt、webrtc、rtsp、rtmp、GB28181推流)
## 用ffmpeg推rtsp推流
```
 #ffmpeg.exe -threads 2 -re -fflags +genpts -rtsp_transport udp -i "rtsp地址" -c copy -f rtsp rtmp地址
 D:\ffmpeg\ffmpeg.exe -threads 2 -re -fflags +genpts -rtsp_transport udp -i "rtsp://admin:Infore123@10.55.23.201:554/Streaming/Channels/1" -c copy -f rtsp rtsp://127.0.0.1:554/live/livestream

```
## 用ffmpeg推rtmp推流
```
 #ffmpeg.exe -threads 2 -re -fflags +genpts -rtsp_transport udp -i "rtsp地址" -c copy -f flv rtmp地址
 D:\ffmpeg\ffmpeg.exe -threads 2 -re -fflags +genpts -rtsp_transport udp -i "rtsp://admin:Infore123@10.55.23.201:554/Streaming/Channels/1" -c copy -f flv rtmp://127.0.0.1:1935/live/livestream

```


# rtcdn-draft
WebRTC 低延迟直播CDN集成规范草案



## 编解码能力

WebRTC目前视频编解码支持VP8/VP9/H264,  音频默认支持OPUS。

考虑到跟RTMP互通, 视频编解码码限定支持`H264`, 音频编解码限定支持`OPUS`。

其中`H264`不支持B帧。


## WebRTC 拉流设计
1. [参考文档](https://github.com/rtcdn/rtcdn-draft)

在WebRTC拉流的时候， 上行有可能是RTMP/WebRTC或者其他的协议，此部分以上行为RTMP输入为准进行设计。

如果上行为WebRTC， 下文中的streamurl可以做响应的改动，比如`webrtc://domain/app/stream`


### 拉流

**拉流URL**

`schema://domain:port/rtc/v1/play`

```
schema: http或者https
method: POST
content-type: json
```

**请求参数**


```
{
  streamurl: 'webrtc://domain/app/stream',
  sdp: string,  // offer sdp
  clientip: string // 可选项， 在实际接入过程中，拉流请求有可能是服务端发起，为了更好的做就近调度，可以把客户端的ip地址当做参数，如果没有此clientip参数，CDN放可以用请求方的ip来做就近接入。
}
```



**HTTP响应**

```
{
  code: int,
  msg:  string,
  data: {
    sdp:string,   // answer sdp 
    sessionid:string // 该路下行的唯一id
  }
}
```

**HTTP响应code码**

```
200:  正常影响
400:  请求不正确，URL 或者 参数不正确
403:  鉴权失败
404:  该流不存在
500:  服务内部异常  
```


### 停止拉流


**停止拉流URL**

`schema://domain:port/rtc/v1/unplay`

```
schema: http或者https
method: POST
content-type: json
```


**请求参数**


```
{
  code:int,
  msg:string,
  data:{
    streamurl: 'webrtc://domain/app/stream',
    sessionid:string // 拉流时返回的唯一id
  }
}
```

**HTTP响应code码**

```
200:  正常影响
400:  请求不正确，URL 或者 参数不正确
403:  鉴权失败
404:  该流不存在
500:  服务内部异常  
```




## WebRTC 推流设计


### 推流


**推流URL**


`schema://domain:port/rtc/v1/publish`

```
schema: http或者https
method: POST
content-type: json
```


**请求参数**


```
{
  streamurl: 'webrtc://domain/app/stream',
  sdp: string,  // offer sdp
  clientip: string // 可选项， 在实际接入过程中，该请求有可能是服务端发起，为了更好的做就近调度，可以把客户端的ip地址当做参数，如果没有此clientip参数，CDN放可以用请求方的ip来做就近接入。
}
```


**HTTP响应**

```
{
  code:int,
  msg:string,
  data:{
    sdp:string,   // answer sdp 
    sessionid:string // 该路推流的唯一id
  }
}
```


**HTTP响应code 码**


```
200:  正常影响
400:  请求不正确，URL 或者 参数不正确
403:  鉴权失败
409:  该流已经存在  
```




### 停止推流


**停止推流URL**

`schema://domain:port/rtc/v1/unpublish`

```
schema: http或者https
method: POST
content-type: json
```


**请求参数**


```
{
  streamurl: 'webrtc://domain/app/stream',
  sessionid:string // 推流时返回的唯一id
}
```


**HTTP响应**

```
{
  code:int,
  msg:string
}
```

**HTTP响应code码**

```
200:  正常影响
400:  请求不正确，URL 或者 参数不正确
403:  鉴权失败
404:  该流不存在
500:  服务内部异常  
```



## 鉴权设计

URL: `schema://domain/v1/publish?token=xxxxxx`

推拉流的URL应当支持token或者其他的query参数， WebRTC-CDN中可以根据请求的token或者query参数来做鉴权




## 状态上报设计


为了方便CDN调式定位流出现的问题，需要定时上报流的状态，状态上报设计为可选


**状态上报URL**

`schema://domain:port/v1/stream`


```
schema: http或者https
method: POST
content-type: json
```


**请求参数**


```
{
  stats:json   // stats from peerconnection.getStats
}
```


## 与RTMP的互通

在设计的WebRTC的时候要考虑到对接原有的RTMP系统， WebRTC-CDN URL Schema 设计为与RTMP一致。 如果想要WebRTC系统和RTMP系统进行互通，CDN需要做音频的转码重采样和协议的转封装。
在上行WebRTC下行RTMP的时候，CDN需要把opus编码的音频转码为aac, WebRTC的的opus默认为48k采样率，RTMP中的AAC大多是44.1k采样率，这里需要重采样。相反RTMP协议转封装为WebRTC的过程中，
需要把aac转码为opus， 并做重采样。


## 流的保活

WebRTC的流需要保活， WebRTC默认2.5s发送一次Stun Binding Request， 服务端可以监听此Bingding equest,  在5秒内没有收到此请求可以主动将流清理， 完成资源的释放。
///////////////////////////////////////////////////////////////////////////////////////////////////////////////															 




 






 

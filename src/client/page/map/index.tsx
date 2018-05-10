import * as React from 'react'
import {observer} from 'mobx-react'

declare const BMAP_ANIMATION_BOUNCE: any;


@observer
export default class Maps extends React.Component<any, any> {


    componentDidMount() {

        // 百度地图API功能
        const map = new BMap.Map("allmap");
        const point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);

        // 禁止双击缩放
        map.disableDoubleClickZoom();

        // 创建小狐狸
        const pt = new BMap.Point(116.417, 39.909);
        const myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300, 157));
        const marker2 = new BMap.Marker(pt, {icon: myIcon});  // 创建标注
        map.addOverlay(marker2);
        marker2.setAnimation(BMAP_ANIMATION_BOUNCE); // 跳动的动画
        const label = new BMap.Label("xxxx", {offset: new BMap.Size(20, -10)});
        label.setStyle({
            color: "red",
            fontSize: "20px",
            height: "30px",
            lineHeight: "20px",
            fontFamily: "微软雅黑",
            fontWeight: 'bold'
        });
        marker2.setLabel(label);
        marker2.addEventListener('click', function (evt) {
            const point = evt.target.point;
            const info = '点击Marker坐标: ' + point.lng.toFixed(0) + ', ' + point.lat.toFixed(0);
            alert(info);
        });

    }

    render() {
        const winHeight = document.body.clientHeight;
        return (
            <div id={"allmap"} style={{height: winHeight - 64}}>
                百度地图
            </div>
        )
    }
}



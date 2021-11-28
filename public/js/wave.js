let stageW = 0; // 画面の幅
let stageH = 0; // 画面の高さ

// canvas要素の参照を取得
const canvas = document.querySelector('#sineCanvas');

// 2Dの描画命令群を取得
const context = canvas.getContext('2d');
resize();
tick();
window.addEventListener('resize', resize);

/** エンターフレームのタイミングです。 */
function tick() {
    requestAnimationFrame(tick);
    draw();
}

/** 描画します。 */
function draw() {
    // 画面をリセット
    context.clearRect(0, 0, stageW, stageH);
    context.lineWidth = 2;
    context.beginPath();
    context.strokeStyle = '#A4C1D7';
    const lineNum = 3; // ラインの数
    const segmentNum = 30;　// 分割数
    const time = Date.now() / 1000; // 媒介変数(時間)
    for( var j=0; lineNum > j; j++ ) {
        let amplitude = stageH / 2.5 + (j - 1) * 5; // 振幅
        for( var i=0; segmentNum > i; i++ ) {
        // X座標
            const x = i / (segmentNum - 1) * stageW;
            // ラジアン
            const radian = i / segmentNum * Math.PI + time + j * 200;
            // Y座標
            const y = amplitude * Math.sin(radian) + stageH / 2 + j * 1;
            // 線を描く
            if (i === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        };
        context.stroke();
    };
}
/** リサイズ時のイベントです。 */
function resize() {
    stageW = innerWidth * devicePixelRatio;
    stageH = innerHeight * devicePixelRatio;
    canvas.width = stageW;
    canvas.height = stageH;
}
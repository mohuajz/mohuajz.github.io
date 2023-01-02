 //返回桌面的时候显示
((function() {
		var callbacks = [],
			timeLimit = 50,
			open = true;
		setInterval(loop, 1);
		return {
			addListener: function(fn) {
				callbacks.push(fn);
			},
			cancleListenr: function(fn) {
				callbacks = callbacks.filter(function(v) {
					return v !== fn;
				});
			}
		}

		function loop() {
			var startTime = new Date();
			debugger;
			if (new Date() - startTime > timeLimit) {
				if (!open) {
					callbacks.forEach(function(fn) {
						fn.call(null);
					});
				}
				open = true;
				window.stop();
				alert('墨画家族 温馨提醒：\n小样！就你小子也想扒我站\n给我小心点！');
				document.body.innerHTML = "";
			} else {
				open = true;
			}
		}
	})()).addListener(function() {
		window.location.reload();
	});

 js键盘监听事件-监听键盘F12(123)-触发文件为空
$(document).keydown(function(event) {
	if (event.keyCode == 123) {
		alert('墨画家族 温馨提醒：\n小伙子！你想干嘛？又想扒我站？');
		document.body.innerHTML = "";
	}
});

//显示版权
console.log("\n %c CNM.SB %c https:cnm.sb/ \n\n",
			"color: #fadfa3; background: #2f55d4; padding:5px 0;", "background: #fadfa3; padding: 5px 0;")

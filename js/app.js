(function() {
	const listData = [
		{
			title: 'demo-or-test',
			src: 'https://github.com/a044161/demo-or-test',
			note: '一堆瞎折腾，没准我的第一个 500 star 就从这里诞生'
		},
		{
			title: 'pocket-tool',
			src: 'https://github.com/a044161/pocket-tool',
			note: '因为突然间想要把自己用到的各种方法函数集合在一起，所以才有了这个'
		},
		{
			title: '五子棋',
			src: 'https://github.com/a044161/fir',
			note: '曾经有过的一段经历'
		},
		{
			title: 'extend-storage',
			src: 'https://github.com/a044161/extend-storage',
			note: '增强型的 localStorage，可以加密，过期处理'
		},
		{
			title: 'browser-test',
			src: 'https://github.com/a044161/browser-test',
			note: '浏览器版本判断'
		},
		{
			title: 'window-performance',
			src: 'https://github.com/a044161/window-performance',
			note: 'perfomance 的封装，输出首屏加载时间'
		},
		{
			title: '未完待续....',
			note: '慢慢的添加'
		}
	]

	const $listCard = document.querySelector('.listcard')

	const listItemTpl = data => `
	<li class="listcard_li">
			<p class="listcard_li_title">
					<a href="${data.src || 'javascript:void(0);'}" target="_blank">${data.title}</a>
			</p>
			<p class="listcard_li_note">
					${data.note}
			</p>
	</li>
	`
	
	for (let i = 0; i < listData.length; i++) {
		const listItem = listItemTpl(listData[i])
		$listCard.innerHTML += listItem
	}

})();
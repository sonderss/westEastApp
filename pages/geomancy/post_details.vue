<template>
	<view>
		<view style="text-align: center; font-size: 30upx; height: 80upx; line-height: 80upx;">
			<text>{{lists.title}}</text>
		</view>
		<view style="font-size: 26upx;padding: 0 20upx; color: #8F8F8F;">
			<text>
				{{lists.post}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function(options) {
			this.lists.post = options.content
			this.lists.title = options.name
		},
		data() {
			return {
				lists: {
					title: null,
					post: null
				}
			}
		}
	}
</script>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/deep/ ::-webkit-scrollbar{
		width: 0 !important;height: 0 !important;background-color: transparent !important;
	}
	#app{
		background-color: black;
	}
	uni-view{
		box-sizing: border-box;
	}
	*{
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

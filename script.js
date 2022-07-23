window.onload = function() {
	var canvas = document.getElementById('myCanvas')
	
	var size = 2248
	var distance = 142.1
	
	canvas.height = size
	canvas.width = 1080
	var context = canvas.getContext('2d')
	stroke(context,distance,size, d=1, l=20)
	stroke(context,distance,size, d=5, l=40, '18px serif')
	stroke(context,distance,size, d=10, l=60)
}

function stroke(context,distance,size, d=1,len=50, font=null){
	var delta = size/distance
	for(var i=0; i<distance; i+=d){
		var y = size - (i*delta-1)
		
		context.beginPath()
		context.rect(0, y, len, 2)
		context.fillStyle = 'white'
		context.fill()
		
		context.beginPath()
		context.rect(0, y+2, len, 2)
		context.fillStyle = 'black'
		context.fill()
		
		if(font){
			context.font = '20px serif'
			context.fillStyle = 'black'
			context.fillText(i/10, 20, y-5-2)
			
			context.font = '18px serif'
			context.fillStyle = 'white'
			context.fillText(i/10, 20, y-5)
		}
	}
}
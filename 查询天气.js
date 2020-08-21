			var app = new Vue({
				el: '#app',
				data: {
					city:'',
					weather:[]
				}, 
				methods:{				
					searchWeather:function(){
						var that = this;
						axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
					.then(function(response){
						that.weather = response.data.data.forecast
					})
					
				},
					changeCity:function(city){
						this.city = city;
						this.searchWeather();
					}
			},
		})
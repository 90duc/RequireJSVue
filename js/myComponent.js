define(['textComponent'],function (textComponent) {
 
	var template =
		`<div>
			<text-component></text-component>
			 <p>{{info}}</p>
		</div>
		`;
	let component = {
	    template: template,
	    data() {
		return {
		    info: '芙蓉区',
		};
	    },
	    components:{
		textComponent:textComponent
	    }
	};
	return component;
});

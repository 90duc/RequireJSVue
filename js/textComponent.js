
define(function () {
 
    var template =
	`<div>
	    <p>{{text}}</p>
	</div>
	`;
    let component = {
	template: template,
	data() {
	    return {
		text: '信息',
	    };
	}
    };
    return component;
})

 //funkcja koonstruujaca
 function Button(text) {
	this.text = text || 'Hello';
}

//tworzymy metode

Button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text);
		
		});
		
		document.body.appendChild(this.element);
	
	}
}



var btn1 = new Button('Hello!');
btn1.create();



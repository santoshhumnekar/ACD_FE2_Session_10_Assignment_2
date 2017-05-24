import { Component } from '@angular/core';
import { ModalDemoComponent } from './modal-demo.component';
@Component({
    selector: 'modal-demo',
	template: '<modal-demo-component></modal-demo-component>',
	//providers: [ModalDemoComponent]
})

export class AppComponent{
	
	constructor(mod:ModalDemoComponent)
	{
		mod.setContext("hello babuji");
	}
}

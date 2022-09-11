import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-shell-demo',
  templateUrl: './shell-demo.component.html',
  styleUrls: ['./shell-demo.component.css']
})
export class ShellDemoComponent implements OnInit {

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) { }

  async ngOnInit() {
    const { SampleComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5001/remoteEntry.js',
      exposedModule: './SampleComponent'
    });

    const simpleComponentRef: ComponentRef<any>
      = this.vcref.createComponent(this.cfr.resolveComponentFactory(SampleComponent)) as ComponentRef<{ data: {} }>;

    const simpleComponentInstance = simpleComponentRef.instance;
    simpleComponentInstance.data = {
      title: 'Shell Title',
      subTitle: 'Shell Subtitle'
    };

    simpleComponentInstance.outputSubject.subscribe((msg: string) => {
      alert('我是爸爸我被觸發了!!!');
      console.log(msg);
    });
  }

}

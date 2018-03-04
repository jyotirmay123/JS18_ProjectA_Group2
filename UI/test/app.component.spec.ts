import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../src/app.component';
@Component({
    selector: 'test',
    template: `
    <my-app></my-app>
    `
})
class TestComponent {
}
describe('##Testing app.component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, AppComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
    }));
    it('##testing app.component parts', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const el:any = fixture.debugElement.nativeElement as HTMLElement; 
        expect(el.querySelector('p').textContent).toBe('Very simple setup.');
    }));
});
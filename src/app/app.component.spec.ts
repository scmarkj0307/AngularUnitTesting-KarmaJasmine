import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Test/Math';


describe('AppComponent', () => {

  let component = new AppComponent;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularUnitTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularUnitTesting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularUnitTesting app is running!');
  });

//to be test case
  it('My testcase',()=>{
    expect(true).toBe(true);
  })

  it('Show alert Message',()=>{
    expect(component.ShowMessage("Hello")).toBe("Hello");
  });

  it('Show the sum',()=>{
    expect(Addition(1,1)).toBe(2);
  })

//toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThan, toBeLessThanOrEqual test case
//SELF EXPLANATORY
it('Greater than,',()=>{
  expect(Addition(2,2)).toBeGreaterThan(1);
})


//to be and to be equal test case
it('toBe and toBeEqual Test Case',()=>{

  var a = 1;
  var b =1;

  var c = ['1'];
  var d = ['1'];

  expect(a).toBe(b);      //toBe only work for primitive data types such as strings,numbers or booleans, for everthing else use toEqual
  expect(c).toEqual(d);
})


//toBe(true),toBeTrue(),toBeTruthy(), and toBeFalse(), toBeFalsy()
it('toBe Hybrid',()=>{

  var a = "Hello";
  var b = true;
  var c = 1;

  var d = false;
  var e = undefined;

  expect(a).toBe("Hello");      //toBe(true)
  expect(b).toBeTrue();         //handle primitive data type and boolean object as well
  expect(c).toBeTruthy();       //can overload boolean


  expect(d).toBeFalse();         //handle primitive data type and boolean object as well
  expect(e).toBeFalsy("abc");    //can overload boolean
})


//toMatch() and toBeCloseTo()

it('Jasmine toMatch Function',()=>{

  var input = "The dotnetofiice tutorials";
  var strPhone = "001-789-56-67"
  expect(input).toMatch(/dotnetofiice/);
  expect(input).toMatch(/dotnetofiice/i);
  expect(input).not.toMatch(/dot1/);
  expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/)
})


it('Jasmine toBeClose Funtion',()=>{
  var pi = 3.1415926, e =2.78;

  expect(pi).not.toBeCloseTo(e);
  expect(pi).toBeCloseTo(e,0);
  expect(4.334).toBeCloseTo(4.334);
  expect(4.334).toBeCloseTo(4.3345,1);
  expect(4.334).toBeCloseTo(4.334,2);
  expect(4.334).not.toBeCloseTo(4.3,2);
  expect(4.223).not.toBeCloseTo(4.22,3);
  expect(4.223).not.toBeCloseTo(4.22,4);

})


//toBeDefined and toBeUndefined

it('Jasmine toBeDefined Function',()=>{
  var MyObj = {
    foo: "foo"
  };
  var MyFunction = (function() {})();
  var strUndefined;

  expect("The Dotnet office").toBeDefined();
  expect(MyObj).toBeDefined();
  expect(MyObj.foo).toBeDefined();
  expect(MyFunction).not.toBeDefined();
  expect(strUndefined).not.toBeDefined;

})


it('Jasmine toBeUndefined Function',()=>{
  var MyObj = {
    foo: "foo"
  };
  var MyFunction = (function() {})();
  var strUndefined;

  expect(MyObj).not.toBeUndefined();
  expect(MyObj.foo).not.toBeUndefined();
  expect(MyFunction).toBeUndefined();
  expect(strUndefined).toBeUndefined;

})


//toBeNull

it('Jasmine toBeNull Function',()=>{
  var nullValue = null;
  var valueUndefined;
  var notNull = "notNull";


  expect(null).toBeNull();
  expect(nullValue).toBeNull();
  expect(valueUndefined).not.toBeNull();
  expect(notNull).not.toBeNull();
})


//toContain

it('Jasmine toContain Function',()=>{
  
  var MyArray = ["jasmine", "Dotnetoffice", "Tutorials"];

    expect([1,2,3]).toContain(2);
    expect([1,2,3]).toContain(2,3);
    expect(MyArray).toContain("jasmine")
    expect(MyArray).not.toContain("dot")
    expect([1,2,3]).not.toContain(4)
    
})


//toBeNan - should be applied successfully for finding an Undetermined value
//note: useful when we do not know the output

it('Jasmine toBeNan Function',()=>{
  expect(0/0).toBeNaN();
  expect(0/5).not.toBeNaN();
})


//toBePositiveInfinity and toBeNegativeInfinity

it('Jasmine toBePositiveInfinity Funtion',()=>{
  expect(1/0).toBePositiveInfinity();
})


it('Jasmine toBeNegativeInfinity Function',()=>{
  expect(-1/0).toBeNegativeInfinity();
})

});

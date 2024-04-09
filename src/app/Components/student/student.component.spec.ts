import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';
import { StudentService } from 'src/app/Services/student.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { of } from 'rxjs';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers:[StudentService],
      imports:[AppRoutingModule,HttpClientModule]
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  //check if the saveData method call the calculate method by mocking the calculate method.
  it('SpyOn method',()=>{
    spyOn(component,'calculate')
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  })


//mocking the return value of the calculate method in order to check if the StudentResult function is working properly
  it('SpyOn method with return value',()=>{
    spyOn(component,'calculate').and.returnValue(41);
    let result = component.StudentResult();
    expect(result).toEqual("Pass");
  })



  //spyon servicec
  it('',()=>{
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service,"SaveDetails").and.callFake(()=>{
        return of({
          "result1":200
        })
    });

    component.saveData();
    expect(component.result).toEqual({
      "result1":200
    })
  })
});

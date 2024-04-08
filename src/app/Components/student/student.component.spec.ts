import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';
import { StudentService } from 'src/app/Services/student.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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



  //check if the saveData method call the calculate method
  it('SpyOn method',()=>{
    spyOn(component,'calculate')
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  })



  it('SpyOn method with return value',()=>{
    spyOn(component,'calculate')
  })
});

import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResetPassword } from 'src/app/models/resetPassword.model';

@Component({
  selector: 'app-reset-login-password',
  templateUrl: './reset-login-password.component.html',
  styleUrls: ['./reset-login-password.component.scss'],
  providers: [MessageService]
})
export class ResetLoginPasswordComponent {
  resetPasswordForm!: FormGroup;
  selectUserOption: any = "Administrator";
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private cdr: ChangeDetectorRef) { }
  userDetails=[
    { name: 'Administrator', code: 'Administrator' },
    { name: 'Reviewer ', code: 'Reviewer' }
   ]
   ngOnInit() :void {
    this.resetPasswordForm = this.fb.group({
      userName: ['', Validators.required],
      tempPassword: ['', Validators.required],
      retypePassword: ['', Validators.required]
     
    
    });
  }
   selectUser(event:any){
    this.selectUserOption = event.target.value;
    this.cdr.detectChanges();
   }
   resetPassword(){
    if (this.resetPasswordForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const ResetPassword: ResetPassword = {
        userName: this.resetPasswordForm.value.userName,
        tempPassword: this.resetPasswordForm.value.tempPassword,
        retypePassword: this.resetPasswordForm.value.retypePassword
      
      };

      
      console.log('Form submitted!', ResetPassword);
      this.messageService.add({ severity: 'success', summary: ' User Modified Successfully', detail: 'Message Content' });
    }
  }

   
   cancelClick(){
    this.router.navigate(['/users']);
   }
}

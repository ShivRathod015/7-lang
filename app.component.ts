import { Component ,OnInit,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextboxComponent } from './textbox/textbox.component';
import { LanglistComponent } from './langlist/langlist.component';
import { LangcodeComponent } from './langcode/langcode.component';
import { CodegenService } from './services/codegen.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TextboxComponent,LanglistComponent,LangcodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  codeservice = inject(CodegenService)
  message: string = "Hello World";
  code : string = "";
  language : string = "python"
  changeCode(lang:string){
      this.code = this.codeservice.CodeSender(lang,this.message)
      this.language = lang;
  }
  getmessage(message:string){
    this.message = message;
    this.code = this.codeservice.CodeSender(this.language,this.message)
    
  }
  ngOnInit(): void {
    this.code = this.codeservice.CodeSender(this.language,this.message);
}
}

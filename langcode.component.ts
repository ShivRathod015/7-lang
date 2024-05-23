import { Component, Input, OnInit, inject } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { CodegenService } from '../services/codegen.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-langcode',
  standalone: true,
  imports: [HighlightModule,CommonModule],
  templateUrl: './langcode.component.html',
  styleUrl: './langcode.component.css'
})
export class LangcodeComponent {
  codeservice = inject(CodegenService)
  @Input() code : string = ``
  
}

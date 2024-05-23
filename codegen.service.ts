import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodegenService {

  charCodeGen(input: string) {
    let strarr = Array.from(input)
    let strcode = ""
    let strarrlength = strarr.length;
    strarr.forEach((data, index) => {
      if (index == strarrlength - 1) {
        strcode += `${data.charCodeAt(0)} `;
      } else {
        strcode += `${data.charCodeAt(0)}, `;
      }
    })
    return strcode
  }

  pythonCode(input: string) {
    let chararr = this.charCodeGen(input)
    let code = `chararr = [${chararr}]
for i in chararr:
    print(chr(i),end="")`
    return code
  }
  javaCode(input: string) {
    let chararr = this.charCodeGen(input)
    let code = `public class Main {
      public static void main(String[] args) {
          int charr [] = {${chararr}};
         for (int i : charr) {
          System.out.print((char) i);
         }
      }
  }
  `
    return code
  }
  cCode(input: string) {
    let chararr = this.charCodeGen(input);
    let code = `#include <stdio.h>

    int main() {
        int chararr[] = {${chararr}};
        int arrLength = sizeof(chararr) / sizeof(chararr[0]);
        for (int i = 0; i < arrLength; i++)
        {
            printf("%c",(char) chararr[i]);
        }
        
        return 0;
    }`
    return code
  }
  CppCode(input: string) {
    let chararr = this.charCodeGen(input);
    let code = `#include <iostream>
    using namespace std;
    
    int main() {
        int chararr[] = {${chararr}};
        int arrLength = sizeof(chararr) / sizeof(chararr[0]);
        
        for (int i = 0; i < arrLength; i++)
          {
            cout<<(char) chararr[i];
          }
        return 0;
      }`
    return code;
  }
  PhpCode(input: string) {
    let chararr = this.charCodeGen(input);
    let code = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
        $chararr = array(${chararr});
        $fullstr = "";
        for ($i = 0; $i < count($chararr); $i++) {
            $fullstr = $fullstr . chr($chararr[$i]);
        }
        echo "<h1>" . $fullstr . "<h1/>";
        ?>
    </body>
    </html>`
    return code
  }
  JavaScriptCode(input: string) {
    let chararr = this.charCodeGen(input);
    let code = `let chararr = [${chararr}];
    let fullstr = ""
    chararr.forEach((data)=>{
        fullstr += String.fromCharCode(data)
    })
    console.log(fullstr)`;
    return code;
  }
  TypeScriptCode(input: string) {
    let chararr = this.charCodeGen(input);
    let code = `let chararr : number[] = [${chararr}];
    let fullstr : string = ""
    chararr.forEach((data)=>{
        fullstr += String.fromCharCode(data)
    })
    console.log(fullstr)`;
    return code;
  }
  CodeSender(lang: string, message: string) : string {
    if (lang == "python") {
      return this.pythonCode(message);
    } else if (lang == "java") {
      return this.javaCode(message);
    } else if (lang == "c") {
      return this.cCode(message);
    } else if (lang == "cpp") {
      return this.CppCode(message);
    } else if (lang == "javascript") {
      return this.JavaScriptCode(message);
    } else if (lang == "typescript") {
      return this.TypeScriptCode(message);
    } else if (lang == "php") {
      return this.PhpCode(message);
    }
    else {
      return ""
    }
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
})
export class PasswordGeneratorComponent implements OnInit {
  minPasswordLength = 8;
  passwordLength = 0;
  letters = false;
  numbers = false;
  symbols = false;
  password = '';

  onButtonClick() {
    this.password = this.generatePassword();
  }

  onChangeLength(length: string) {
    const parsedLength = parseInt(length);
    if (!isNaN(parsedLength)) {
      this.passwordLength = parsedLength;
    }
  }

  onChangeUseLetters() {
    this.letters = !this.letters;
  }
  onChangeUseNumbers() {
    this.numbers = !this.numbers;
  }
  onChangeUseSymbols() {
    this.symbols = !this.symbols;
  }

  generatePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+-=`~';

    let validChars = '';

    if (this.letters) {
      validChars += letters;
    }

    if (this.numbers) {
      validChars += numbers;
    }

    if (this.symbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    return generatedPassword;
  }

  ngOnInit(): void {}
}

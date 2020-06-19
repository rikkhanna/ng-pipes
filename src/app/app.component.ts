import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name :string;
  date :string;
  amount :number;
  miles :number;

  onMilesChange(value :string){
    this.miles = parseFloat(value);
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value)
  }
  onDateChange(value: string){
    this.date = value;
  }
  onTypingName(value: string){
    this.name = value;
  }
}

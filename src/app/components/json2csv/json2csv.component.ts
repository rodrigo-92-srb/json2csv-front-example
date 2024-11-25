import { Component } from '@angular/core';
import { JsonConverterService } from '../../services/json-converter.service';

@Component({
  selector: 'app-json2csv',
  templateUrl: './json2csv.component.html',
  styleUrls: ['./json2csv.component.css']
})
export class Json2csvComponent {
  jsonInput: string = '';
  csvOutput: string = '';

  constructor(private jsonConverterService: JsonConverterService) {}

  convert(): void {
    try {
      const jsonData = JSON.parse(this.jsonInput);
      this.jsonConverterService.convertJsonToCsv(jsonData).subscribe(
        (response) => {
          this.csvOutput = response;
        },
        (error) => {
          console.error('Error converting JSON to CSV:', error);
          alert('Failed to convert JSON to CSV. Please check the input and try again.');
        }
      );
    } catch (e) {
      alert('Invalid JSON format. Please correct it and try again.');
    }
  }
}

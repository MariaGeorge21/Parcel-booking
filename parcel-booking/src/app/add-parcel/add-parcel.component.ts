import { Component } from '@angular/core';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent {
  name!: string;
  email!: string;
  senderAddress!: string;
  receiverAddress!: string;
  weight!: number;
  price!: number;

  submitForm() {
    // Handle form submission logic here
    const formData = {
      name: this.name,
      email: this.email,
      senderAddress: this.senderAddress,
      receiverAddress: this.receiverAddress,
      weight: this.weight,
      price: this.price
    };
    console.log(formData);
    // You can perform additional actions such as sending data to a server
  }
}

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { FoodItem } from "src/app/shared/foodItem";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: 0,
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      calories: [0, [Validators.min(0)]],
    });
  }

  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();
  @Output() cancel: EventEmitter<FoodItem> = new EventEmitter();
  @Output() priceChange = new EventEmitter();

  form: FormGroup;

  ngOnInit() {}

  doSave() {
    this.saveFood.emit(this.food);
  }

  doCancel() {
    this.cancel.emit();
  }

  changed(value) {
    this.priceChange.emit(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.food != undefined) {
      console.log("receiving food", changes.food.currentValue);
      this.form.setValue(changes.food.currentValue);
    }
  }

  saveForm(form) {
    console.log("food to save", form.value);
    this.saveFood.emit(form.value);
  }
}

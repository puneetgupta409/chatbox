import { Component, OnInit , OnDestroy} from '@angular/core';
@Component({
  selector: 'app-footer', // HTML selector for using this component
  templateUrl: './footer.component.html', // Path to the component's HTML template file
  styleUrls: ['./footer.component.scss'], // Path to the component's CSS styles file
})

// Define the component class
export class FooterComponent implements OnInit , OnDestroy {
    constructor(){}
    ngOnDestroy(): void {

    }
    
    ngOnInit(): void {

    }
}
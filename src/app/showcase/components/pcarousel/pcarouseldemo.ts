import {Component, ViewEncapsulation} from '@angular/core';
import { CarService } from '../../service/carservice';

@Component({
    templateUrl: './pcarouseldemo.html',
    styles: [`
		.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-details > .p-grid {
			border: 1px solid #b3c2ca;
			border-radius: 3px;
			margin: 0.3em;
			text-align: center;
			padding: 2em 0 2.25em 0;
		}
		.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data .car-title {
			font-weight: 700;
			font-size: 20px;
			margin-top: 24px;
		}
		.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data .car-subtitle {
			margin: 0.25em 0 2em 0;
		}
		.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data button {
			margin-left: 0.5em;
		}
		.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data button:first-child {
			margin-left: 0;
		}
		.carousel-demo .p-carousel.custom-carousel .p-carousel-dot-icon {
			width: 16px !important;
			height: 16px !important;
			border-radius: 50%;
		}
		.carousel-demo .p-carousel.p-carousel-horizontal .p-carousel-content .p-carousel-item.p-carousel-item-start .car-details > .p-grid {
			margin-left: 0.6em;
		}
		.carousel-demo .p-carousel.p-carousel-horizontal .p-carousel-content .p-carousel-item.p-carousel-item-end .car-details > .p-grid {
			margin-right: 0.6em;
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class PCarouselDemo {

	cars: any[];

	
	responsiveOptions;

	constructor(private carService: CarService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.carService.getCarsSmall().then(cars => {
			this.cars = cars
		});
	}
}
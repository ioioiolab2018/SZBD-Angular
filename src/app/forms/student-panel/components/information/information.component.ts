import { Component } from '@angular/core';
import { StudentInformation } from 'src/app/shared/model/student-information';
import { InformationService } from './services/information.service';

@Component({
    selector: 'szbd-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
    providers: [InformationService]
})
export class InformationComponent {
    information: StudentInformation;

    constructor(private informationService: InformationService) {
        this.init();
    }

    private init(): void {
        this.informationService
            .getInformationsObs()
            .subscribe((val: StudentInformation) => {
                this.information = val;
            });
    }
}

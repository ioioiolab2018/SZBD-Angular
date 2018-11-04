import { Component } from '@angular/core';
import { StudentInfo } from 'src/app/shared/model/student-info';
import { InformationService } from './services/information.service';

@Component({
    selector: 'szbd-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
    providers: [InformationService]
})
export class InformationComponent {
    information: StudentInfo;

    constructor(private informationService: InformationService) {
        this.init();
    }

    private init(): void {
        this.informationService
            .getInformationsObs()
            .subscribe((val: StudentInfo) => {
                this.information = val;
            });
    }
}
